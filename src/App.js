import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Artist from './components/Artist'
import Works from './components/Works'
import Footer from './components/Footer'
import ImageFadeIn from 'react-image-fade-in'

function App() {
  return (
    <Router>
      <div className="App">
        <ImageFadeIn
                  loadAsBackgroundImage
                  opacityTransition={8}
                  src="https://raw.githubusercontent.com/patricktran/react-image-fade-in/master/nismo-dog.jpg"
                  style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'flex',
                      flexDirection: "column",
                      flexWrap: 'no wrap',
                      height: '200vh',
                      width: '100%'
                    }}
              >
          <Navbar/>
          <h1>Designs By Lealyn</h1>
            <Switch>
              <Route exact path="/" component={Artist}/>
              <Route path="/works" component={Works}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          <Footer/>
        </ImageFadeIn>
      </div>
    </Router>
  );
}

export default App;
