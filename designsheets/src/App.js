import './App.css';
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import FeatureScreen from './screens/FeatureScreen'
import Review from './components/Review'

import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'

function App() {
  return(
    <Router className='body'>
      {/* <Route  path='/' component={Review} exact /> */}

      <Route  path='/' component={HomeScreen} exact />
      <Route path='/feature' component={FeatureScreen} />
      <Route path='/career' component={FeatureScreen} />
      <Route path='/career1' component={FeatureScreen} />
      <Route path='/howitwork' component={FeatureScreen} />
    </Router>
  )
    
}

export default App;
