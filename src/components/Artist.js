import React from 'react';
import {Link} from 'react-router-dom';

const Artist = () => {
    
    return(
        <div className="artist">

            <h3>About Me:</h3>

            <p>I have been an artist/craftperson for many years. I enjoy working in many many mediums and have gone through many phases <br/> from pysanky eggs, to colored pencil art, murals, designs on mugs, etc. 
            I enjoy constantly learning new forms of art. Please contact<br/>  me in regard to anything you are interested in. Requests for custom work is certainly welcome and I can always return to a previous skill. 
            <br/> While I hold several degrees that help me in my professional life, my real dream is getting my MFA.
            <br/>Imagine the places I could go with more training!!!</p>

            <Link to="/Contact">Contact me for more information!</Link>

        </div>
    )
}

export default Artist