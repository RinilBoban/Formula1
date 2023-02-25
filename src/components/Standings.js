import React from 'react'
import ConstructorStandings from './ConstructorStandings'
import DriverStandings from './DriverStandings'

function Standings() {
  return (
    
    <div>
          <h1 className='text-center'>Standings</h1>
          <div className='row'>
            <div className='col-6 text-center'>
            <DriverStandings/>
            </div>
          <div className='col-6 text-center'>
          <ConstructorStandings/>
          </div>
          </div>
    </div>
              
    
  )
}

export default Standings