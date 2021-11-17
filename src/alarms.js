import React from 'react';
import axios from "axios";
import nav from "./Navbar";

const Alarm = () => {

    nav.changeTitle('Alarms');

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
                        return (
                            <div className="accordion-item" key={'key-' + element.location}>
                                <h2 className="accordion-header" id={'head-' + element.location}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse-' + element.location} aria-expanded="false" aria-controls={'collapse-' + element.location}>
                                    {element.location}
                                </button>
                                </h2>
                                <div id={'collapse-' + element.location} className="accordion-collapse collapse" aria-labelledby={'head-' + element.location} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        { Object.keys(element.values).map(k => {
                                                return (<li>{k}</li>)
                                            })
                                        }
                                    </ul>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Alarm;