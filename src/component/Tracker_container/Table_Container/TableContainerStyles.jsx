import styled from 'styled-components'

export const Container = styled.div`
        max-height: 600px;
        /* width: 100%; */
        background: #fff;
        box-shadow: 0 5px 13px rgba(0,0,0,.1);
        border-radius: 8px;
        display:flex;
        /* padding:20px; */
        /* justify-content:center; */
        @media (max-width: 1000px){
        width:100vw;
    }

`

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 95%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  table-layout: fixed;

  @media (max-width: 1000px){
        width:100vw
    }
`

export const TableHeadRow = styled.tr`
  background-color: blueviolet;
  color: #ffffff;
  text-align: left;
  display: block;
`

export const TableBodyRow = styled.tr`
  border-bottom: 1px solid #dddddd;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:last-of-type {
    border-bottom: 2px solid blueviolet;
  }
`

export const Tableheading = styled.th`
  padding: 12px 15px;
  text-align: left;
  width: 200px;
`

export const TableData = styled.td`
  padding: 12px 15px;
  text-align: left;
  width: 200px;
`

export const TableBody = styled.tbody`
  display: block;
  overflow: auto;
  height: 500px;
`
