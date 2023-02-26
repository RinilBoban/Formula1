import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import instance from '../baseUrl';
import Table from 'react-bootstrap/Table';

function DriverStandings() {

    const [year,setYear] = useState('2022')
    const [standings,setStandings] = useState([])

    async function getData(){
        const result = await instance.get(`${year}/driverStandings.json`)
        console.log(result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        setStandings(result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
        <h1 className='mb-3'>Driver Standings</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setYear(e.target.value)} type="text" placeholder="Enter Year to search..." />
      </Form.Group>
      <Button onClick={getData} className='mb-4' variant="light">
        Search
      </Button>
    </Form>
    <h2>{year}</h2>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Driver Name</th>
          <th>Points</th>
          <th>Nationality</th>
          <th>Permanent Number</th>
        </tr>
      </thead>
      <tbody>
        {standings.map(data=>(
            <tr key={data.position}>
                <td>{data.position}</td>
                <td>{data.Driver.givenName}&nbsp;{data.Driver.familyName}</td>
                <td>{data.points}</td>
                <td>{data.Driver.nationality}</td>
                <td>{data.Driver.permanentNumber}</td>
            </tr>
        ))}
      </tbody>
    </Table>

    {/* <ListGroup as="ol" numbered>
        {standings.map(data=>(
            <ListGroup.Item as="li">
                {data.Driver.givenName}&nbsp;
                {data.Driver.familyName}&nbsp;
                {data.points}&nbsp;
                {data.Driver.permanentNumber}
            </ListGroup.Item>
        ))}
    </ListGroup>         */}
    </div>
  )
}

export default DriverStandings