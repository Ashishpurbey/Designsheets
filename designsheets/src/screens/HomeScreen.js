import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Review from '../components/Review'
import Socialmedia from '../components/Socialmedia'
import '../asset/HomeScreen.css'


const HomeScreen = () => {
    return (
        <div>
            <Header/>
            <div className="background_color  home_1">
            
            </div>
               
           
            <Review/>
            <Socialmedia/>
          
            <Footer/>
        </div>
    )
}

export default HomeScreen
