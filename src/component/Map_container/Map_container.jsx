import React from 'react'
import BoxContainer from './Boxes_Container/BoxContainer';
import MapsItemContainer from './Maps_item_Container/MapsItemContainer';
import {useSelector} from 'react-redux';


const Map_container = () => {
    const total= useSelector(state=> state.getAllDataReducer.casesTime)
    const statesData = useSelector((state) => state.getAllDataReducer.statewise)
    const stateData2 = useSelector(state=> state.getStateDataReducer.stateData)
    return (
        <div style={{
            height:"100%",
            backgroundColor:"#fff",
            minWidth:'800px',
            display:'flex',
            flexDirection:'column',
            boxShadow:"0 5px 13px rgba(0,0,0,.1)",
            borderRadius:"8px" 
        }}>
            {
                total &&
                <BoxContainer confirmed={stateData2 ? stateData2.confirmed: total.totalconfirmed} deceased={stateData2 ? stateData2.deceased: total.totaldeceased} recovered={stateData2 ? 
                  stateData2.recovered:  total.totalrecovered}/>
            }
           {
               statesData && <MapsItemContainer statesData={statesData}/>
           }
           
        </div>
    )
}

export default Map_container
