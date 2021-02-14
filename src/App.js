import React,{useEffect} from 'react';
import TrackerContainer from './component/Tracker_container/Tracker_Conatiner';
import MapContainer from './component/Map_container/Map_container';
import {useDispatch,useSelector} from 'react-redux';
import {getData} from './actions/getAllData'


function App() {
 const dispatch = useDispatch()
 useEffect(() => {
   dispatch(getData())
 },[dispatch])
  return (
  <div style={{
    width : "100vw",
    height: "100vh",
    backgroundColor:"#eee",
  
    
  }}>
    <h2
    style={{
      display:'flex',
      justifyContent:"center",
      width:"100%",
      fontSize:"3rem",
      fontWeight:"lighter",
      textTransform:"uppercase",
      letterSpacing:"1.4rem",
      color:"blueviolet"
      
  

    }}
    >India covid 19  tracker</h2>

    <div style={{
    
    display:"flex",
    justifyContent:"space-between",
    width:"100%",
    height:"100%",
    padding:"30px",
     

      
    }}>
      <TrackerContainer/>
      <MapContainer/>
    </div>
  </div>
  );
}

export default App;
