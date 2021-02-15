import React,{Fragment} from 'react'
import {TableBodyRow,TableData} from './TableContainerStyles'
import {useDispatch} from 'react-redux';
import { updatestateData,DeleteStateData ,lineChartData,DeleteLineData} from '../../../actions/getStateData';

const TableItems = ({state,confirmed,active,recovered,death,stateCode}) => {
    const dispatch = useDispatch();
    const onMouseover =() => {
        dispatch(lineChartData(stateCode.toLowerCase()))
        dispatch(updatestateData(state,confirmed,recovered,death))
    }

    const onMouseleave = () => {

        dispatch(DeleteLineData())
        dispatch(DeleteStateData())
    }
    return (
        <Fragment>
                <TableBodyRow onMouseOver={onMouseover} onMouseLeave={onMouseleave}>
                 <TableData>{state}</TableData>
                <TableData>{confirmed}</TableData>
               <TableData>{active}</TableData>
               <TableData>{recovered}</TableData>
               <TableData>{death}</TableData>
             </TableBodyRow>
        </Fragment>
    )
}

export default TableItems
