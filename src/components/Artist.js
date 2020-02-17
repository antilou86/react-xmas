import React from 'react';
import {Link} from 'react-router-dom';
import ImageFadeIn from 'react-image-fade-in';

const Artist = () => {

    return(
        <div className="artist">
            <h3>About Me:</h3>
            <ImageFadeIn
                loadAsBackgroundImage
                opacityTransition={5}
                src="https://raw.githubusercontent.com/patricktran/react-image-fade-in/master/nismo-dog.jpg"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: "column",
                    flexWrap: 'no wrap',
                    height: '80vh',
                    width: '100%'
                  }}
            >
                <p>I have been an artist/craftperson for many years. I enjoy working in many many mediums and have gone through many phases <br/> from pysanky eggs, to colored pencil art, murals, designs on mugs, etc. 
                I enjoy constantly learning new forms of art. Please contact<br/>  me in regard to anything you are interested in. Requests for custom work are certainly welcome and I can always return to a previous skill. 
                <br/> While I hold several degrees that help me in my professional life, my real dream is getting my MFA.
                <br/>Imagine the places I could go with more training!!!</p>
                <Link to="/Contact">Contact me for more information!</Link>
            
            </ImageFadeIn>
        </div>
    )
}

export default Artist