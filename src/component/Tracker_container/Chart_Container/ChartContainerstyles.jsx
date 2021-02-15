import styled from 'styled-components'

export const Container = styled.div`
height:250px;
/* width:100%; */
background:#fff;
box-shadow:0 5px 13px rgba(0,0,0,.1);
border-radius:8px;
padding-top:10px;
padding-bottom:10px;
display:flex;
justify-content:space-evenly;
@media (max-width: 1000px){
        width:100vw;
    }

@media(max-width:600px){
    flex-direction:column;
    height:600px;
}

`
