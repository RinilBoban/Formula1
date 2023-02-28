import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import instance from '../baseUrl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BookTickets from './BookTickets';

function Raceschedule() {

    const [schedules, setSchedules] = useState([])
    const [year,setYear] = useState('2023')
    const [round,setRound] = useState('')
    const [raceName,setRaceName] = useState('')
    const [circuitName,setCircuitName] = useState('')
    const [country,setCountry] = useState('')
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')

    async function fetchData() {
        const result = await instance.get(`${year}.json`)
        // console.log(result.data.MRData.RaceTable.Races);
        setRound(result.data.MRData.RaceTable.Races[0].round)
        setRaceName(result.data.MRData.RaceTable.Races[0].raceName)
        setCircuitName(result.data.MRData.RaceTable.Races[0].Circuit.circuitName)
        setCountry(result.data.MRData.RaceTable.Races[0].Circuit.Location.country)
        setDate(result.data.MRData.RaceTable.Races[0].date)
        setTime(result.data.MRData.RaceTable.Races[0].time)
        setSchedules(result.data.MRData.RaceTable.Races)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div>
                <Form className='col-3 p-1 ms-5 mt-3'>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={(e)=>setYear(e.target.value)} type="text" placeholder="Enter year" />
                    </Form.Group>

                    <div className='text-center'>
                            <Button variant="primary" onClick={fetchData}>
                                Search
                            </Button>
                            <h1 style={{marginLeft:'700px', marginTop:'-100px', paddingBottom:'60px'}}>{year}</h1>
                    </div>
                </Form>

            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Round</th>
                        <th>Race Name: {}</th>
                        <th>Circuit Name</th>
                        <th>Country</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody style={{cursor:'pointer'}}>

                        {schedules.map(data=>(
                            <tr key={data.round}>
                                <td>{data.round}<BookTickets/></td>
                                <td>{data.raceName}</td>
                                <td>{data.Circuit.circuitName}</td>
                                <td>{data.Circuit.Location.country}</td>
                                <td>{data.date}</td>
                                <td>{data.time}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>

        </div>
    )
}

export default Raceschedule