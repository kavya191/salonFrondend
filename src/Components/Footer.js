import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
  
           <div style={{ backgroundColor: '#63475f' }}>
      <Container  className='text-center '>
        <Row >
          <Col lg={4} >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56659254385!2d77.46612530135566!3d12.954280237295148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698683322445!5m2!1sen!2sin" 
          width="600" height="450" style={{border:"0",width:"70%",height:"70%",marginTop:"20px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
          <Col lg={4}  >
            <h2 className='text-white text-center mt-4'>Contact Us</h2>
           
            <p className='text-white'><i class="fa-solid fa-address-book fa-beat"></i> City Tower,2nd floor<br></br>Banglore</p>
            <p className='text-white'><i class="fa-solid fa-phone fa-beat"></i> +919865456789</p>
            
            
          </Col>
          <Col lg={4}  className='mb-5' >
            <h3 className='text-white mt-4'>Connect With Us</h3>
            <div className=''>
              <i class="fa-brands fa-instagram mt-3 ms-2 text-white fa-2x"></i>

              <i class="fa-brands fa-facebook mt-3 ms-2 text-white fa-2x"></i>
              <i class="fa-brands fa-github mt-3 ms-2 text-white fa-2x"></i>
              <i class="fa-brands fa-linkedin mt-3 ms-2 text-white fa-2x"></i>
              <i class="fa-brands fa-twitter mt-3 ms-3 text-white fa-2x "></i>
            </div>
            <div className='text-white'>
              <li class=" fa-solid fa-envelope mt-3 ms-3 text-white me-1 "></li>alicerogerbeautysalon@gmail.com
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
  )
}

export default Footer