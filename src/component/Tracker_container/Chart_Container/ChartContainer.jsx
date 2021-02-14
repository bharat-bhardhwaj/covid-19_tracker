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
    console.log(sevenData)
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
            {
                total &&
                <DonutChartContainer confirmed={total.totalconfirmed} deceased={total.totaldeceased} recovered={total.totalrecovered}/>
            }
         
         {
             sevenData && 
             <LineChart sevenData={sevenData}/>
         }
        
        </div>
    )
}

export default ChartContainer;
