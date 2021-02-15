import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-evenly;
   @media (max-width: 1000px){
        width:100vw;
        justify-content:center;
        align-items:center;
    }
`
