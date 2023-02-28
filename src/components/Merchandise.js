import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function Merchandise() {

  const [products,setProducts]=useState([])
  const [id,setId] = useState('')
  const [image,setImage] = useState('')
  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('')
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState('')
  // const [total,setTotal] = useState(0)
  
  const getData=(e)=>{

    return axios.get('http://localhost:4200/merchandise')
    .then(data=>{
      // console.log(data.data.products)
      setProducts(data.data.products)
    })
  }

  useEffect(()=>{
    getData()
  },[])

  async function addToCart(item){
    console.log(item.price);
      setId(item.id)
      setImage(item.image)
      setTitle(item.title)
      setPrice(item.price)
      setCategory(item.category)
      setDescription(item.description)  
    

    const data={
      id,
      image,
      title,
      price,
      category,
      description
    }
    return axios.post('http://localhost:4200/addToCart',data)
    .then(datum=>{
      console.log(datum.message)
      alert(datum.message)
    })
  }


  return (
    // <div class="container px-2 px-lg-2 mt-5">
    <div className='row mt-5 gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 text-center justify-content-center'>
    {products.map(item=>(
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
    <Button onClick={(e)=>addToCart(item)}>
      {/* <Button> */}
      Buy</Button>
    {/* </Link> */}
  </Card>
    ))}
    </div>
    // </div>
  )
}

export default Merchandise