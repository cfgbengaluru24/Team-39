// import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./barChartBox.css";

const data = [
    {
        name: '22 July',
        uv: 40,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '23 July',
        uv: 30,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '24 July',
        uv: 20,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '25 July',
        uv: 27,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '26 July',
        uv: 18,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '27 July',
        uv: 23,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '28 July',
        uv: 34,
        pv: 4300,
        amt: 2100,
    },
];


const AreaChartBox = () => {
    return (
        <div className="areaChartBox">
            {/* <h1>{props.title}</h1> */}
            <h1> No. of employees</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={150}>
                    <AreaChart
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AreaChartBox;
