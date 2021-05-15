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
            <div>
                <p>No more Compromising with your presentation</p>
                <p>Design the best presentation sheets within the least time.</p> 
            </div>
            <div>
            <img className="image6" src="./images/3d-art-digital-illustration.jpg.pagespeed.ce.HOe3qqiaTN (1)@1X.png"></img>
            </div>
               
            
            
                 
            </div>
            {/* <div>
                  <p>Here we present you the</p>
                  <h3>DesignSheets</h3>
                  <p>A web based design tool,which helps you design the best professional presentation sheets easily and within the least time ever</p>
            </div> */}
            <div>

            </div>
            <Socialmedia/>
          
            <Footer/>
        </div>
    )
}

export default HomeScreen
