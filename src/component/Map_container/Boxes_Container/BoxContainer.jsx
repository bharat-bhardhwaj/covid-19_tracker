import React from 'react'

const BoxContainer = ({confirmed,deceased,recovered}) => {
  return (
    <div
      style={{
        display:'flex',
        justifyContent:"space-evenly",
        width: '100%',
        padding: '20px',
      }}
    >
      <div
        style={{
          background: 'pink',
          borderRadius: '9px',
          opacity: '.4',
          padding: '0 30px 0 30px',
          display: 'inline-block',
        }}
      >
        <h5
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'red',
          }}
        >
          confirmed
        </h5>
        <h6
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'red',
          }}
        >
          {confirmed}
        </h6>
      </div>
      <div
        style={{
          background: 'lightgrey',
          borderRadius: '9px',
          opacity: '.4',
          padding: '0 30px 0 30px',
          display: 'inline-block',
        }}
      >
        <h5
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'darkgrey',
          }}
        >
          deceased
        </h5>
        <h6
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'darkgrey',
          }}
        >
          {deceased}
        </h6>
      </div>
      <div
        style={{
          background: 'lightgreen',
          borderRadius: '9px',
          opacity: '.4',
          padding: '0 30px 0 30px',
          display: 'inline-block',
        }}
      >
        <h5
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'green',
          }}
        >
          recovered
        </h5>
        <h6
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'green',
          }}
        >
          {recovered}
        </h6>
      </div>
      <div
        style={{
          background: 'lightblue',
          borderRadius: '9px',
          opacity: '.4',
          padding: '0 30px 0 30px',
          display: 'inline-block',
        }}
      >
        <h5
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'blue',
          }}
        >
          active
        </h5>
        <h6
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'blue',
          }}
        >
          {Number(confirmed) -(Number(deceased) + Number(recovered))}
        </h6>
      </div>
    </div>
  )
}

export default BoxContainer
