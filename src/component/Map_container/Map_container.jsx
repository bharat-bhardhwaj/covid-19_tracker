import React from 'react'
import BoxContainer from './Boxes_Container/BoxContainer';
import MapsItemContainer from './Maps_item_Container/MapsItemContainer';
import {useSelector} from 'react-redux';
import {MainContainer} from './MapContainerStyles';
const Map_container = () => {
    const total= useSelector(state=> state.getAllDataReducer.casesTime)
    const statesData = useSelector((state) => state.getAllDataReducer.statewise)
    const stateData2 = useSelector(state=> state.getStateDataReducer.stateData)
    return (
        <MainContainer >
            {
                total &&
                <BoxContainer confirmed={stateData2 ? stateData2.confirmed: total.totalconfirmed} deceased={stateData2 ? stateData2.deceased: total.totaldeceased} recovered={stateData2 ? 
                  stateData2.recovered:  total.totalrecovered}/>
            }
           {
               statesData && <MapsItemContainer statesData={statesData}/>
           }
           
        </MainContainer>
    )
}

export default Map_container
