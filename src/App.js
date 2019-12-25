import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Artist from './components/Artist'
import Works from './components/Works'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <h1>Designs By Lealyn</h1>
          <Switch>
            <Route exact path="/" component={Works}/>
            <Route path="/about" component={Artist}/>
            <Route path="/contact" component={Contact}/>
            
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
