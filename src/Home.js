import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SockJsClient from 'react-stomp';

const Home = ({myMap}) => {

    const query = new URLSearchParams(useLocation().search);
    const id = query.get("key") ? query.get("key"): 'estacao';

    const [responseData, setResponseData] = React.useState(null);

    React.useEffect(() => {
        axios.get(`https://allhomeapi.herokuapp.com/v1/sensors`) //https://allhomeapi.herokuapp.com/v1/sensors
            .then((response) => {
                setResponseData(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    
    return (
        <div className="app-container">
            <h1>{id}</h1>
            <div className="row">
            <SockJsClient url='https://allhomeapi.herokuapp.com/chat' 
                      topics={['/topic/news']}
                      onMessage={(msg) => {
                          console.log(msg);
                          var m = [];
                          m.push(msg);
                            setResponseData(m);
                      }}/>


                {responseData && responseData.filter(rd => rd !== null).map(element => {
                    console.log("data found: " + responseData.length);
                    if (element.location === id) {

                        let maps = new Map();
                        maps = element.values;
                        const myMap = new Map();
                        
                        for (let [k, v] of Object.entries(maps)) {
                            try {
                                if (require('./cards/'+ k).default) {
                                    var cardToRender = require('./cards/'+ k).default
                                    myMap.set(cardToRender(v));
                                }
                            } catch(ex) {
                                console.log("Module [" + k + "] does not exist");
                            }
                        }
                        return myMap;
                    }
                })}
            </div>
        </div>
    )
}
export default Home
