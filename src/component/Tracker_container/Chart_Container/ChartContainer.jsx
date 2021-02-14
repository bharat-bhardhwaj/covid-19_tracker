import React from 'react'
import DonutChartContainer from './Donut_Chart_container/DonutChartContainer';
import LineChart from './line_Chart_Container/LineChartContainer';

const ChartContainer = () => {
    return (
        <div style={{
            height:"250px",
            width:"100%",
            background:"#fff",
            boxShadow:"0 5px 13px rgba(0,0,0,.1)",
            borderRadius:"8px" ,
            paddingTop:"10px",
            paddingBottom:"10px",
            display:'flex',

        }}>
            <DonutChartContainer/>
            <LineChart/>
        </div>
    )
}

export default ChartContainer;
