import React,{Fragment,useState} from 'react';
import { 
    ComposableMap, Geographies, Geography 
  } from 'react-simple-maps';
  import { scaleQuantize } from "d3-scale";
  import {useDispatch} from 'react-redux';
  import {DeleteStateData,updatestateData,lineChartData,DeleteLineData} from '../../../actions/getStateData';  
  import ReactTooltip from 'react-tooltip'
  const INDIA_TOPO_JSON = require('./india.topo.json');
  const colorScale = scaleQuantize()
  .domain([1,1000])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

  const PROJECTION_CONFIG = {
    scale: 1500,
    center: [78.9629, 22.5937]
  };
  
  const  MapsItemContainer =({statesData}) => {

  const [tooltipContent, setTooltipContent] = useState('');
  const [stated,setStated] = useState('')
    const dispatch = useDispatch();

    const onMouseEnter =(geo,current) => {
      if(current){
        setTooltipContent(`${geo.properties.name}: ${current.active}`)
        setStated(current)
    
        dispatch(lineChartData(current.statecode.toLowerCase()))
        dispatch(updatestateData(current.state,current.confirmed,current.recovered,current.deaths))
      }

      
    }

    const onMouseLeave =() => {
      setTooltipContent(' ')
      setStated('')
      dispatch(DeleteLineData())
      dispatch(DeleteStateData())
    }
    
    return (
      <Fragment>
        <div style={{
          display:'flex',
          justifyContent:'space-evenly',
          padding:'20px',
          width:'100%',
          color:'red',
        
        }}>
          <div style={
            {
            color:"red",
            fontSize:"2rem"
            }
          }>{stated?.state}</div>
          
          
          <div>
            <div style={{
              color:"green",
              display:"flex",
              flexDirection:"column",
              textTransform:'uppercase'
            }}>{stated?.lastupdatedtime && 'last update'}</div>
          <div
          style={{
            color:"green",
          }}>{stated?.lastupdatedtime}</div>
           </div>
        </div>
        <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={900}
          height={920}
          data-tip=""
      >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => {
                const current = statesData.find(s => s.statecode === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.active) : "#eee"}
                    onMouseEnter={()=> onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
      </ComposableMap>
      </Fragment>
    )
  }

  export default MapsItemContainer;