import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import CreditCardForm from './CreditCardForm';

function BookTickets() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
  ];

  function confirm(){
    alert('Tickets sent to email address')
    const handleClose2 = () => setShow2(false);
  }

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book Tickets here..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Select number of seats:
            &nbsp;

      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-light' : 'outline-light'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShow2}>Go to payments</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 2 begin */}

      {/* <Button variant="primary" onClick={handleShow2}>
        Launch demo modal
      </Button> */}

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Card Credentials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreditCardForm/>


          <Form>
          <br></br>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your e-mail id here..."
                autoFocus
              />
            </Form.Group>
            {/*  */}


            <Form.Group className="mb-3" style={{textAlign:'end', paddingRight:'10px'}} controlId="exampleForm.ControlInput4">
              <Form.Label>Total Amount : {radioValue * 7500}</Form.Label>
              {/* <Form.Control
                type="number"
                placeholder="Enter CVV"
              /> */}
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Go Back
          </Button>
          {/* <Button variant="primary" onClick={handleClose2}> */}
          <Button variant="primary" onClick={confirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default BookTickets