import React, { useEffect } from 'react'
import DonutChartContainer from './Donut_Chart_container/DonutChartContainer';
import LineChart from './line_Chart_Container/LineChartContainer';
import {useSelector,useDispatch} from 'react-redux';
import {gettotalData,getLastsevenData} from '../../../actions/getAllData';


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
   
   
    const onMousetable =() => {
        
    }
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
            justifyContent:'space-evenly'
        }}>
            {
                total &&
                <DonutChartContainer confirmed={stateData ? stateData.confirmed : total.totalconfirmed} deceased={stateData ? stateData.deceased : total.totaldeceased} recovered={stateData?stateData.recovered :total.totalrecovered}/>
            }
         
         {
             sevenData && 
             <LineChart sevenData={sevenData} lineChartData={lineChartData}/>
         }
        
        </div>
    )
}

export default ChartContainer;
