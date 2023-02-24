import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import instance from '../baseUrl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Raceschedule() {

    const [schedules, setSchedules] = useState({})
    const [round,setRound] = useState('')
    const [raceName,setRaceName] = useState('')
    const [circuitName,setCircuitName] = useState('')
    const [country,setCountry] = useState('')
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')

    async function fetchData() {
        const result = await instance.get('2021.json')
        console.log(result.data.MRData.RaceTable.Races);
        setRound(result.data.MRData.RaceTable.Races[0].round)
        setRaceName(result.data.MRData.RaceTable.Races[0].raceName)
        setCircuitName(result.data.MRData.RaceTable.Races[0].Circuit.circuitName)
        setCountry(result.data.MRData.RaceTable.Races[0].Circuit.Location.country)
        setDate(result.data.MRData.RaceTable.Races[0].date)
        setTime(result.data.MRData.RaceTable.Races[0].time)
        setSchedules(result.data.MRData.RaceTable.Races)
        console.log(schedules);
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div>
                <Form className='col-3 p-1'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter year" />
                    </Form.Group>

                    <div className='text-center'>
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
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
                <tbody>
                    <tr>
                        {schedules.map((data)=>(
                            <Col>
                                <td>{data.round}</td>
                                <td>{data.raceName}</td>
                                <td>{data.Circuit.circuitName}</td>
                                <td>{data.Circuit.Location.country}</td>
                                <td>{data.date}</td>
                                <td>{data.time}</td>
                            </Col>
                        ))}
                        {/* <td>{round}</td>
                        <td>{raceName}</td>
                        <td>{circuitName}</td>
                        <td>{country}</td>
                        <td>{date}</td>
                        <td>{time}</td> */}
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default Raceschedule