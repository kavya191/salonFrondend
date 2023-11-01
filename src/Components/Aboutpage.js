import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const AboutPage = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12} >
              <Carousel fade className='m-5 d-flex justify-content-start'>
        <Carousel.Item> 
          <img
            src="https://i.postimg.cc/2j75Y5M9/img1.jpg"
            style={{ width: "100%", height: "400px" }}
          ></img>
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.postimg.cc/PqDtRf14/img2.jpg"
            style={{ width: "100%", height: "400px" }}
          ></img>
       
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.postimg.cc/8CR2v7hq/img3.jpg"
            style={{ width: "100%", height: "400px" }}
          ></img>
       
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.postimg.cc/VNWh63ww/img4.jpg"
            style={{ width: "100%", height: "400px" }}
          ></img>
       
        </Carousel.Item>
    
      </Carousel>
                </Col>
                <Col>
                <h1 className='mt-5 text-center' style={{color:"#63475f"}}>About As</h1>
                <div>
                    <p className='text-center'><b>Located at Twin Park’s Centre, Lucinda’s Hair & Beauty salon  provides you a range of highly trendy hair cuts and styling, makeup, hair coloring, waxing services, spray tanning and facials. It was established in the year 2005 and has a team of highly skilled and experienced stylists.</b></p>
                </div>
                </Col>
            </Row>
            <Row>
                <h1 className='mt-5 text-center' style={{color:"#63475f"}}><b>Our Mission</b></h1>

                <p className='mt-3 text-center mb-4'>"Our mission at Lucinda’s Hair & Beauty is to provide a friendly,
                <br></br> personalized service through a team of highly skilled and creative professionals.
                <br></br> Teamwork is our most valuable asset which ensures our clients are always number one, and we strive to exceed your expectations."</p>
                <Col className='mb-3' lg={4} md={6} sm={12}>
                <img src='https://i.postimg.cc/k5KT6Wvm/four.jpg' width="100%" height="350px"></img>
                </Col>
                <Col className='mb-3' lg={4} md={6} sm={12}>
                <img src='https://i.postimg.cc/4N1Zthwp/three.jpg' width="100%" height="350px"></img>
                </Col>
                <Col className='mb-3' lg={4} md={6} sm={12}>
                <img src='https://i.postimg.cc/htbsbT5b/five.jpg' width="100%" height="350px"></img>
                </Col>
            </Row>
         
        </Container>
    </div>
  )
}

export default AboutPage