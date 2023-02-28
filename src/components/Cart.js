import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cart() {

  const [cart,setCart] = useState([])
  // const [total,setTotal] = useState(0)

  const getData=(e)=>{

    return axios.get('http://localhost:4200/getCart')
    .then(data=>{
      // console.log(data.data.products)
      setCart(data.data.products)
      // setTotal(cart.length)
      // console.log('total ='+total);
    })
    // .then(
    // cart.map(item=>(
    //   setTotal(item.price)
    // ))
    // )
    // .then(
    //   console.log('total ='+total)
    // )

  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div className='row mt-5 gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 text-center justify-content-center'>
    {cart.map(item=>(
    <Card key={item.id} style={{ width: '18rem', padding:'20px' }}>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{item.category}</ListGroup.Item>
      <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
    </ListGroup>
    {/* <Link to={'/cart'}> */}
    {/* <Button onClick={(e)=>addToCart(item)}> */}
      <Button>
      Remove</Button>
    {/* </Link> */}
  </Card>
    ))}
    </div>
  )
}

export default Cart