import React, { useState, useEffect } from 'react'
import instance from '../baseUrl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Racelist() {
    const [schedules, setSchedules] = useState([])

    async function fetchData() {
        const result = await instance.get('2021.json')
        setSchedules(result.data.MRData.RaceTable.Races)
        // console.log(result.data.MRData.RaceTable.Races);
        console.log(schedules);
    }
    useEffect(() => {
        fetchData()
    }, [])



  return (
    <div>
        {
            schedules.map(item=>(
                <Col>
                    {item.round}
                    {item.raceName}   
                    {item.Circuit.circuitName}
                    {item.Circuit.Location.country} 
                    {item.date}
                    {item.time}
                </Col>
            ))
        }


    </div>
  )
}

export default Racelist