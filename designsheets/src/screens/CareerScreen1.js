import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Socialmedia from '../components/Socialmedia'

const CareerScreen1 = () => {
    return (
        <div>
            <Header/>
            <div className="background_color feature">
                <img className="image6" src="./images/Features@1X.png"></img>
                <p>Features Will be disclosed soon</p>         
            </div>
            <Socialmedia/>
            <Footer/>
        </div>
    )
}

export default CareerScreen1
