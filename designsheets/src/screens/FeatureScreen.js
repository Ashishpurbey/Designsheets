import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Socialmedia from '../components/Socialmedia'
import '../asset/FeatureScreen.css'

const FeatureScreen = () => {
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

export default FeatureScreen
