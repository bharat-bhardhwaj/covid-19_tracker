import React from 'react'
import ChartContainer from './Chart_Container/ChartContainer';
import TableContiner from './Table_Container/TableContainer';
import {Container} from './TrackercontainerStyles';


const Tracker_Conatiner = () => {
    return (
        <Container >
            <ChartContainer/>
            <TableContiner/>
        </Container>
    )
}

export default Tracker_Conatiner
