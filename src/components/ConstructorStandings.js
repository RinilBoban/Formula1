import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import instance from '../baseUrl';
import Table from 'react-bootstrap/Table';

function ConstructorStandings() {
    const [year,setYear] = useState('2022')
    const [standings,setStandings] = useState([])

    async function getData(){
        const result = await instance.get(`${year}/constructorStandings.json`)
        console.log(result.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
        setStandings(result.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
    <h1 className='mb-3'>ConstructorStandings</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setYear(e.target.value)} type="text" placeholder="Enter Year to search..." />
      </Form.Group>
      <Button onClick={getData} className='mb-4' variant="light">
        Submit
      </Button>
    </Form>
    <h2>{year}</h2>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Constructor Name</th>
          <th>Points</th>
          <th>Nationality</th>
        </tr>
      </thead>
      <tbody>
        {standings.map(data=>(
            <tr key={data.position}>
                <td>{data.position}</td>
                <td>{data.Constructor.name}</td>
                <td>{data.points}</td>
                <td>{data.Constructor.nationality}</td>
            </tr>
        ))}
      </tbody>
    </Table>

    </div>
  )
}

export default ConstructorStandings