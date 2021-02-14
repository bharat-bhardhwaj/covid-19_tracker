import React,{Fragment} from 'react'

const TableItems = ({state,confirmed,active,recovered,death}) => {
    return (
        <Fragment>
                <tr>
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
