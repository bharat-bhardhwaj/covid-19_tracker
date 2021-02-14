import React from 'react';
import {useSelector} from 'react-redux';
import './table.css'
import TableItems from './TableItems';

const TableContainer = () => {

  const statesData = useSelector((state) => state.getAllDataReducer.statewise)
  
  return (
    <div
      style={{
        height: '600px',
        width: '100%',
        background: '#fff',
        boxShadow: '0 5px 13px rgba(0,0,0,.1)',
        borderRadius: '8px',
        display:'flex',
        padding:'10px',
        justifyContent:'center',
      }}
    >
      <table className='styled-table'>
        <thead>
          <tr>
            <th>STATE</th>
            <th>CONFIRMED</th>
            <th>ACTIVE</th>
            <th>RECOVERED</th>
            <th>DECEASED</th>
          </tr>
        </thead>
        <tbody >

          {
            statesData?.map((ele,index) => {
              return (
    
              <TableItems state={ele.state} confirmed={ele.confirmed} active={ele.active} recovered={ele.recovered} death={ele.deaths} key ={index} />

              )
            })
          }
        
        
        
          {/* <tr class='active-row'>
            <td>Melissa</td>
            <td>5150</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default TableContainer
