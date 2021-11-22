import React from 'react';
import axios from "axios";
import Nav from "./Navbar";
import RangeSlider from "./components/RangeSlider";

const Alarm = () => {

    Nav.changeTitle('Alarms');

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

    return(
        <div className="app-container" key="appcontainer">
            <div className="accordion" id="accordionExample">
                {responseData && responseData.map(element => {
                    const myMap = new Map();
                    for (let [k, v] of Object.entries(element.values)) {
                        console.log("k: "+k+"- v:" + v)
                        myMap.set(RangeSlider(element.location, k, v));
                    }
                        return (
                            <div className="accordion-item" key={'key-' + element.location}>
                                <h2 className="accordion-header" id={'head-' + element.location}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse-' + element.location} aria-expanded="false" aria-controls={'collapse-' + element.location}>
                                    <strong>{element.location}</strong>
                                </button>
                                </h2>
                                <div id={'collapse-' + element.location} className="accordion-collapse collapse" aria-labelledby={'head-' + element.location} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        { myMap }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div id="slider"></div>
        </div>
    )
}

export default Alarm;