import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import nav from "./Navbar";
import {LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis} from 'recharts';

const Chart = () => {

    nav.changeTitle('Charts');

    const query = new URLSearchParams(useLocation().search);
    const [responseData, setResponseData] = React.useState([]);
    const intervals = new Map();
    intervals.set('temperature', [-5, 50]);
    intervals.set('humidity', [0, 100]);
    intervals.set('barometer', [915, 935]);
    

    React.useEffect(() => {
        axios.get(`https://allhomeapi.herokuapp.com/v1/sensors/summary`,
        { params: { location: query.get("location"), key: query.get("key") }})
            .then((response) => {
                setResponseData(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="app-container" key="appcontainer">
            <div className="bread">{query.get("location") + '/' + query.get("key")}</div>
            <div className="chart">
                <ResponsiveContainer>
                    <LineChart data={responseData} margin={{ right: 8, left: -30, top: 4 }}>
                        <XAxis dataKey="day" interval={'preserveStartEnd'} />
                        <YAxis domain={intervals.get(query.get("key"))}></YAxis>
                        <Legend />
                        <Tooltip />
                        <Line dataKey="max" stroke="red" />
                        <Line dataKey="min" stroke="blue"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart;