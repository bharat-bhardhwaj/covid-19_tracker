import React, { useEffect } from 'react'
import DonutChartContainer from './Donut_Chart_container/DonutChartContainer';
import LineChart from './line_Chart_Container/LineChartContainer';
import {useSelector,useDispatch} from 'react-redux';
import {gettotalData,getLastsevenData} from '../../../actions/getAllData';
import {Container} from './ChartContainerstyles';


const ChartContainer = () => {
  
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(gettotalData())
        dispatch(getLastsevenData())
    },[dispatch])

    const total= useSelector(state=> state.getAllDataReducer.casesTime)
    const sevenData = useSelector(state=> state.getAllDataReducer.sevenData)
    const stateData = useSelector(state=> state.getStateDataReducer.stateData)
    const lineChartData= useSelector(state => state.getStateDataReducer.LineChartData);
   
   

    return (
        <Container>
            {
                total &&
                <DonutChartContainer confirmed={stateData ? stateData.confirmed : total.totalconfirmed} deceased={stateData ? stateData.deceased : total.totaldeceased} recovered={stateData?stateData.recovered :total.totalrecovered}/>
            }
         
         {
             sevenData && 
             <LineChart sevenData={sevenData} lineChartData={lineChartData}/>
         }
        
        </Container>
    )
}

export default ChartContainer;
