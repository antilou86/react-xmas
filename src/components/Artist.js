import React from 'react';
import {Link} from 'react-router-dom';

const Artist = () => {

    // need a black image to transition from (easy)
    // and an image to transition to. (Leah's choice) - background image for currently built component.
        // new div/component should load z-indexed higher than background one and be solid pure black. 
        // opacity will transition from 1 down to 0 on page render

    return(
        <div className="artist">

            <h3>About Me:</h3>

            <p>I have been an artist/craftperson for many years. I enjoy working in many many mediums and have gone through many phases <br/> from pysanky eggs, to colored pencil art, murals, designs on mugs, etc. 
            I enjoy constantly learning new forms of art. Please contact<br/>  me in regard to anything you are interested in. Requests for custom work are certainly welcome and I can always return to a previous skill. 
            <br/> While I hold several degrees that help me in my professional life, my real dream is getting my MFA.
            <br/>Imagine the places I could go with more training!!!</p>

            <Link to="/Contact">Contact me for more information!</Link>

        </div>
    )
}

export default Artist