import React from 'react'
import ChartContainer from './Chart_Container/ChartContainer';
import TableContiner from './Table_Container/TableContainer';

const Tracker_Conatiner = () => {
    return (
        <div style={{
            height:"100%",
            width:"48%",
            display:"flex",
            flexDirection:"column",
            padding:"10px",
            justifyContent:"space-evenly"
            
            
        }}>
            <ChartContainer/>
            <TableContiner/>
        </div>
    )
}

export default Tracker_Conatiner
