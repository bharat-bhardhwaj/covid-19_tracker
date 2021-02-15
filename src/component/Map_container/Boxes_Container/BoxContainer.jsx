import React from 'react'
import { MainContainer, Boxes, Heading5, Heading6 } from './BoxContainerStyles'
const BoxContainer = ({ confirmed, deceased, recovered }) => {
  return (
    <MainContainer>
      <Boxes color={'pink'}>
        <Heading5 color='red'>confirmed</Heading5>
        <Heading6 color='red'>{confirmed}</Heading6>
      </Boxes>
      <Boxes color='lightgrey'>
        <Heading5 color='darkgrey'>deceased</Heading5>
        <Heading6 color='darkgrey'>{deceased}</Heading6>
      </Boxes>
      <Boxes color='lightgreen'>
        <Heading5 color='green'>recovered</Heading5>
        <Heading6 color='green'>{recovered}</Heading6>
      </Boxes>
      <Boxes color='lightblue'>
        <Heading5 color='blue'>active</Heading5>
        <Heading6 color='blue'>
          {Number(confirmed) - (Number(deceased) + Number(recovered))}
        </Heading6>
      </Boxes>
    </MainContainer>
  )
}

export default BoxContainer
