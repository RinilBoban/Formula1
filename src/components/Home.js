import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import { FaArrowAltCircleRight } from "react-icons/fa";

function Home() {

  return (
    <div className='row'>

      <div className='col-6'>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src="https://a-static.besthdwallpaper.com/redbull-racing-rb18-formula-1-2022-back-view-wallpaper-1440x1080-92195_22.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>RedBull Tops the chart</h3>
          <p>With the teams testing their machine at Bahrain, Red Bull sets the fastest laps...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src="https://aniportalimages.s3.amazonaws.com/media/details/FP9k2d8X0AEo5nL2022041007045120220410071459.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Mystery Ferrari Nose</h3>
          <p>Everyone is amazed with the weird nose of the SF23. And on top of that, the...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src="https://www.insidesport.in/wp-content/uploads/2022/04/george-russell-mercedes-w13-1.jpg?w=690"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mercedes goes all in</h3>
          <p>
            The Breckely based team leaves no stones unturned as their aerodynamics is ...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>



      <div className='col-6'>

        <div className='box-1'>
          <h2>View the races schedules</h2>
        <Link to={'raceschedules'}>
          <p><FaArrowAltCircleRight/></p>
          
        </Link>
        </div>

        <div className='box-2'>
          <h2>View the Driver & Constructor standings</h2>
        <Link to={'standings'}>
          <p><FaArrowAltCircleRight/></p>
        </Link>
        </div>

        <div className='box-3'>
          <h2>Merchandise Store</h2>
          <Link to={'merchandise'}>
          <p><FaArrowAltCircleRight/></p>
        </Link>
        </div>

        <div className='box-4'>
          <h2>View the race results</h2>
        <Link to={'standings'}>
          <p><FaArrowAltCircleRight/></p>
        </Link>
        </div>


      <Link to={'login'}>
            <Button>Login</Button>
        </Link>

        <Link to={'register'}>
            <Button>Register</Button>
        </Link>

        <Link to={'raceschedules'}>
            <Button>Race Schedules</Button>
        </Link>

        <Link to={'standings'}>
          <Button>Standings</Button>
        </Link>

        <Link to={'/'}>
          <Button>Race Results</Button>
        </Link>

        <Link to={'merchandise'}>
          <Button>Merchandise</Button>
        </Link>

        <Link to={'bookTickets'}>
          <Button>Ticket Booker</Button>
        </Link>

        <Link to={'cart'}>
          <Button>Cart</Button>
        </Link>

        <Link to={'creditcard'}>
          <Button>Credit Card</Button>
        </Link>

      </div>
        

    </div>
  )
}

export default Home

// https://s0.2mdn.net/dfp/1779066/5130156133/1676982839104/ATA-IconParka-Libery%20Media-Media_en_970x250/headline-1.png