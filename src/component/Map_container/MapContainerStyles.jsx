import styled from 'styled-components';

export const MainContainer = styled.div`
/* height:100%; */
background-color:#fff;
/* min-width:800px; */
display:flex;
flex-direction:column;
box-shadow:0 5px 13px rgba(0,0,0,.1);
border-radius:8px;
padding:30px;

@media (max-width: 1000px){
        width:100vw;
        padding:0px
        
    }
`