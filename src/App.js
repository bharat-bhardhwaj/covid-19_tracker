import React, { useEffect } from 'react'
import TrackerContainer from './component/Tracker_container/Tracker_Conatiner'
import MapContainer from './component/Map_container/Map_container'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './actions/getAllData'
import { getLastStatesevenData } from './actions/getStateData'
import { Heading, Container, MainContainer } from './AppStyles'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
    dispatch(getLastStatesevenData())
  }, [dispatch])
  return (
    <MainContainer>
      <Heading>India covid 19 tracker</Heading>

      <Container>
        <TrackerContainer />
        <MapContainer />
      </Container>
    </MainContainer>
  )
}

export default App
