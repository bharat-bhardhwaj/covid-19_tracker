import styled from 'styled-components';

export const MainContainer= styled.div`
display:flex;
justify-content:space-evenly;
width: 100%;
padding-top:20px;

@media (max-width: 700px){
       flex-direction:column;
       padding-top:0px
    }
`

export  const Boxes = styled.div`
background: ${props => props.color};
border-radius: 9px;
opacity: .4;
padding: 0 30px 0 30px;
display: inline-block;
margin-right:20px;

@media (max-width: 700px){
       width:100%;
       /* display:block; */
       padding:0px;
    }
`

export const Heading5 = styled.h5`
font-size: 1rem;
font-weight: bold;
text-transform: uppercase;
color: ${props=> props.color};
`

export const Heading6 = styled.h6`
font-size: 1rem;
font-weight: bold;
text-transform: uppercase;
color: ${props=> props.color};
`