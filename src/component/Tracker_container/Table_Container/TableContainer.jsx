import React from 'react';
import {useSelector} from 'react-redux';
// import './table.css'
import TableItems from './TableItems';
import {Container,Table,TableBody,TableHeadRow,Tableheading} from './TableContainerStyles';
const TableContainer = () => {

  const statesData = useSelector((state) => state.getAllDataReducer.statewise)
  
  return (
    <Container
    >
      <Table>
        <thead>
          <TableHeadRow>
            <Tableheading>STATE</Tableheading>
            <Tableheading>CONFIRMED</Tableheading>
            <Tableheading>ACTIVE</Tableheading>
            <Tableheading>RECOVERED</Tableheading>
            <Tableheading>DECEASED</Tableheading>
          </TableHeadRow>
        </thead>
        <TableBody>

          {
            statesData?.map((ele,index) => {
              return (
    
              <TableItems state={ele.state} confirmed={ele.confirmed} active={ele.active} recovered={ele.recovered} death={ele.deaths} key ={index} stateCode={ele.statecode} />

              )
            })
          }
        
        
        
          {/* <tr class='active-row'>
            <td>Melissa</td>
            <td>5150</td>
          </tr> */}
        </TableBody>
      </Table>
    </Container>
  )
}

export default TableContainer
