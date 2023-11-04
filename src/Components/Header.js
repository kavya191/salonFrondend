import React from 'react'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userEnquiryApi } from '../Services/allApis';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Header = () => {
  const navigate=useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const[input,setInput]=useState({
    username:"",
    email:"",
    service:"",
    message:""
  })

  //input fuction
  const getInput=(e)=>{
    const {name,value}=e.target
    //console.log(name,value);
   setInput({...input,[name]:value})

  }
  //submit
  const addEnquiry=async()=>{
    const result=await userEnquiryApi(input)
    if(result.status>=200 && result.status<300){
       navigate('/')
      setShow(false)
    }
    console.log(input);
  }




  return (
    <>
    <Navbar expand="lg"style={{backgroundColor:'#63475f'}}>
    <Container fluid>
      <Navbar.Brand href="#" className='ms-5'><b className='text-white '>Lucinda’s </b>
      <p className='text-white'>Hair & Beauty</p></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
 
    </Container>
    <Navbar.Collapse id="navbarScroll" className='me-5 ms-5' >
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/" className='text-white'>Home</Nav.Link>
          <Nav.Link href="/about" className='text-white'>About</Nav.Link>
  
          <Nav.Link onClick={handleShow}  className='text-white' >
            Enquiry
          </Nav.Link>
          <Nav.Link href="/service" className='text-white' >
            Services
          </Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
  </Navbar>
  <Modal show={show} onHide={handleClose}  >
                <Modal.Header className='modal_header' closeButton>
                  <h2 className='d-flex justify-content-center' style={{color:"#63475f"}}>Enquiry Form</h2>
                    <Modal.Title className='text-white' style={{ fontFamily: 'Croissant One, serif' }}>Inquiry Form</Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal_header ' style={{backgroundColor:'#63475f'}}>
                    <label  for="inputName" className='form-label mt-2 text-white'>Name</label>
                    <input  onChange={(e)=>getInput(e)} type="text" name="username" id="inputName" className='form-control' placeholder='Enter Your Name' />

                    <label for="inputEmail" className='form-label mt-2 text-white'>Email</label>
                    <input  onChange={(e)=>getInput(e)}  type="text" name="email" id="inputEmail" className='form-control' placeholder='Enter Email' />

                    

                    
                    <label for="inputPackage" className='form-label mt-2 text-white'>Package</label>
                    <select onChange={(e)=>getInput(e)}   required name='service' className='dropdown w-100 form-control mt-2' id="inputPackage">
                        <option className='dropdown-item disabled' aria-disabled="true" value='select'>...Select...</option>
                        <option className='dropdown-item' value={'facial'}>Facial</option>
                      <option className='dropdown-item' value={'nail'}>Nail Extension and Nail Design</option>
                       
                        
                        <option className='dropdown-item' value={'hairTreatment'}>Hair Treatment</option>
                      
                        <option className='dropdown-item' value={'manicure'}>Manicure</option>
                        <option className='dropdown-item' value={'pedicure'}>Pedicure</option>
                        <option className='dropdown-item' value={'microblading'}>Micro Blading</option>
                    </select>

                    <label for="inputMessage" className='form-label mt-2 text-white'>Message</label>
                    <textarea onChange={(e)=>getInput(e)}   name="message" id="inputMessage" cols="10" rows="10" className='form-control' placeholder='Enter Your Contact Address'></textarea>    
                   

                </Modal.Body>

                <Modal.Footer className='modal_header'>
                    <Button variant="secondary" onClick={handleClose} style={{ fontFamily: 'Playfair Display, serif' }}>Close</Button>
                   
                    <Button onClick={addEnquiry}   
                    style={{ fontFamily: 'Playfair Display, serif',backgroundColor:"#63475f" }}>Add</Button>
                  
                </Modal.Footer>
               

            </Modal>
  </>
  )
  
}

export default Header