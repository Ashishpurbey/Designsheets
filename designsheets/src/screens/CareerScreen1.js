import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Socialmedia from '../components/Socialmedia'
import {Row,Col,Image, ListGroup} from 'react-bootstrap'
import '../asset/CareerScreen.css'
import Review from '../components/Review'



const CareerScreen1 = () => {
    return (
        <div className="">
            <Header/>

             <Row className="section1 background_color">
                 <Col lg={5} sm={9} xs={9} className=" mt-5 mx-auto my-auto pt-5 pb-5">
                    <Image  src='./images/preview@1X.png' fluid/>
                 </Col>
                 <Col lg={4} sm={9} xs={9} className="mx-auto my-auto mt-5 pt-5">
                    <ListGroup>
                    <h3 className='width1'>What we belive</h3>
                    <p className="width2"> A new innovation, new platform for sheet designing more efficiently and creatively, uniting all design people on the same software for better collaboration, tools creation at every possible oppurtunity maximizing your output at cost of our software.</p>
                    </ListGroup>
                 </Col>
                 <Col xl={1} md={0} lg={0} sm={0}></Col>

             </Row>

          
            <Socialmedia/>
            <Review/>
            <Footer/>
        </div>
    )
}

export default CareerScreen1
