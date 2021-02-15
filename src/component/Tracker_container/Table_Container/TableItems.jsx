import React,{Fragment} from 'react'
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
                <tr onMouseOver={onMouseover} onMouseLeave={onMouseleave}>
                 <td>{state}</td>
                <td>{confirmed}</td>
               <td>{active}</td>
               <td>{recovered}</td>
               <td>{death}</td>
             </tr>
        </Fragment>
    )
}

export default TableItems
