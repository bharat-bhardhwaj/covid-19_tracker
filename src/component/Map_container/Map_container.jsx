import React from 'react'
import BoxContainer from './Boxes_Container/BoxContainer';
import MapsItemContainer from './Maps_item_Container/MapsItemContainer';
import {useSelector} from 'react-redux';


const Map_container = () => {
    const total= useSelector(state=> state.getAllDataReducer.casesTime)

    return (
        <div style={{
            height:"100%",
            backgroundColor:"#fff",
            width:"48%" ,
            display:'flex',
            flexDirection:'column',
            boxShadow:"0 5px 13px rgba(0,0,0,.1)",
            borderRadius:"8px" 
        }}>
            {
                total &&
                <BoxContainer confirmed={total.totalconfirmed} deceased={total.totaldeceased} recovered={total.totalrecovered}/>
            }
           
            <MapsItemContainer/>
        </div>
    )
}

export default Map_container
