import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../asset/Review.css'

const Review = () => {
    return (
      <Carousel className='carousel'>
      <Carousel.Item fluid>
         <p>What people say about us</p>
         <p>Student</p>
         <p>“Design Sheets is a great initiative, and would prove to be highly useful for various architecture students, firms and even beyond. The various templates they offer are simple yet apt for the job with multiple options. With an interface that is easy</p>
      </Carousel.Item>
      <Carousel.Item fluid>
      <p>What people say about us</p>
         <p>Student</p>
         <p>“Design Sheets is a great initiative, and would prove to be highly useful for various architecture students, firms and even beyond. The various templates they offer are simple yet apt for the job with multiple options. With an interface that is easy</p>
      </Carousel.Item>
      <Carousel.Item fluid>
      <p>What people say about us</p>
         <p>Student</p>
         <p>“Design Sheets is a great initiative, and would prove to be highly useful for various architecture students, firms and even beyond. The various templates they offer are simple yet apt for the job with multiple options. With an interface that is easy</p>
      </Carousel.Item>
    </Carousel>
    )
}

export default Review
