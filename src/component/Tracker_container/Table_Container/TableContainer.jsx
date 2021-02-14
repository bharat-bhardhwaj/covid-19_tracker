import React from 'react'
import './table.css'
const TableContainer = () => {
  return (
    <div
      style={{
        height: '600px',
        width: '100%',
        background: '#fff',
        boxShadow: '0 5px 13px rgba(0,0,0,.1)',
        borderRadius: '8px',
        display:'flex',
        justifyContent:'center'
      }}
    >
      <table class='styled-table'>
        <thead>
          <tr>
            <th>STATE</th>
            <th>CONFIRMED</th>
            <th>ACTIVE</th>
            <th>RECOVERED</th>
            <th>DECEASED</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maharashtra</td>
            <td>654654</td>
            <td>654654</td>
            <td>654654</td>
            <td>654654</td>
          </tr>
          <tr>
            <td>Maharashtra</td>
            <td>654654</td>
            <td>654654</td>
            <td>654654</td>
            <td>654654</td>
          </tr>
          <tr>
            <td>Maharashtra</td>
            <td>654654</td>
            <td>654654</td>
            <td>654654</td>
            <td>654654</td>
          </tr>
          <tr>
            <td>Maharashtra</td>
            <td>654654</td>
            <td>654654</td>
            <td>654654</td>
            <td>654654</td>
          </tr>
          <tr>
            <td>Maharashtra</td>
            <td>654654</td>
            <td>654654</td>
            <td>654654</td>
            <td>654654</td>
          </tr>
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
