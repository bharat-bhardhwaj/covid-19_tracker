import styled from 'styled-components';

export const MainContainer = styled.div`
    width : 100vw;
    height: 100vh;
    background-color: #eee;
    display:flex;
    flex-direction:column;
`

export const Heading= styled.h2`
    display :  flex;
    justify-content:center;
    width:100vw;
    font-size:2vw;
    font-weight:lighter;
    text-transform:uppercase;
    letter-spacing:.7rem;
    color:blueviolet;
`

export const Container= styled.div`
    display:flex;
    justify-content:space-evenly;
    width:100vw;
    /* height:100vh; */

    @media (max-width: 1000px){
        flex-direction:column;
      
    }
  
`
