import React from 'react'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function ServicePage() {
  return (
    <div >
        <h1 className='text-center mt-4 ' style={{color:"#63475f"}}>Our Services</h1>
        <Container className='w-75'>
            <Row className='mt-5'>
                <Col lg={6}>
                <Image src="https://i.postimg.cc/15Cn2NDk/hair.jpg" width="100%" height="300px" rounded />
                </Col>
                <Col lg={6}>
                    <h2 style={{color:"#63475f"}}>Hair Treatment</h2>
                    <p>A relaxing salon treatment for hair involves using chemicals <br></br> to reduce the curls and bring your locks to an easier manageable state.<br></br> A good post-relaxing treatment is a must in this case. Looks almost the same as relaxing treatment, but rebonding uses much stronger components.</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg={6}>
                <Image src="https://i.postimg.cc/ydGRCCzm/facial.jpg" width="100%" height="300px" rounded />
                </Col>
                <Col lg={6}>
                    <h2 style={{color:"#63475f"}}>Factial Treatment</h2>
                    <p>Salon facial on the other hand is a relaxing spa treatment that typically focuses on pampering and relaxation. It is performed by a licensed aesthetician who uses high-quality, but non-medical-grade products to cleanse and exfoliate the skin.</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg={6}>
                <Image src="https://i.postimg.cc/3NPbRq2p/manicure.jpg" width="100%"height="300px" rounded />
                </Col>
                <Col lg={6}>
                <h2 style={{color:"#63475f"}}>Manicure</h2>
                    <p>A manicure usually consists of filing and shaping the free edge of nails, pushing and clipping (with a cuticle pusher and cuticle nippers) any nonliving tissue (but limited to the cuticle and hangnails), treatments with various liquids, massage of the hand, and the application of fingernail polish.</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg={6}>
                <Image src="https://i.postimg.cc/yYQ7hMRK/pedicure.jpg" width="100%" height="300px" rounded />
                </Col>
                <Col lg={6}>
                    <h2 style={{color:"#63475f"}}>Pedicure</h2>
                    <p>A pedicure is a cosmetic treatment for the feet and toenails that cleans your feet, provides nail care and foot/calve massages. Contrary to popular belief, pedicures are NOT just for women! They are for anyone who to take care of their feet, including men and children.</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg={6}>
                <Image src="https://i.postimg.cc/L6hcSnqd/nail.jpg" width="100%" height="300px" rounded />
                </Col>
                <Col lg={6}>
                    <h2 style={{color:"#63475f"}}>Nail Art</h2>
                    <p>Nail art is the technique of enhancing nails by trimming, decorating, and polishing them. Consultations are not only the first step towards offering good services, but also a legal requirement before the treatment. They also offer an opportunity to know your client's wishes and preferences to achieve great results.</p>
                </Col>
            </Row>
            <Row className='mt-5 mb-5'>
                <Col lg={6}>
                <Image src="https://i.postimg.cc/nhff1nL6/microblading.jpg" width="100%" height="300px" rounded />
                </Col>
                <Col lg={6}>
                    <h2 style={{color:"#63475f"}}>Micro Blading</h2>
                    <p>In simple terms, Microblading treatment is a semi-permanent way of filling in one's eyebrows. Very similar to a tattoo, this treatment lasts about 12 months. The process of it resembles tattooing but is much less painful, and the results will shock you!</p>
                </Col>
            </Row>
        </Container>
       
    {/* <div className='d-flex justify-content-center flex-wrap gap-2  mb-3'>
        <Image src="https://i.postimg.cc/ydGRCCzm/facial.jpg" width="300px" height="300px" rounded />
    <Image src="https://i.postimg.cc/ydGRCCzm/facial.jpg" width="300px" height="300px" rounded />
    <Image src="https://i.postimg.cc/3NPbRq2p/manicure.jpg" width="300px" height="300px" rounded />
    </div> */}
    </div>
  )
}

export default ServicePage