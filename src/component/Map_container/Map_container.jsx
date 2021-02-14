import React from 'react'
import BoxContainer from './Boxes_Container/BoxContainer';
import MapsItemContainer from './Maps_item_Container/MapsItemContainer';


const Map_container = () => {
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
            <BoxContainer/>
            <MapsItemContainer/>
        </div>
    )
}

export default Map_container
