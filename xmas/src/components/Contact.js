import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
    return(
        <div className="contact">
            <h3>Contact Me:</h3>
            <h6>check out my social media!</h6>

            <div className="socials">
                <div className="social-card">
                    <SocialIcon url="http://instagram.com/designsbylealyn/" />
                    <p>Insta</p>
                </div>

                <div className="social-card">
                    <SocialIcon url="http://facebook.com/DesignsbyLealyn" />
                    <p>FB</p>
                </div>

                <div className="social-card">
                    <SocialIcon url="http://etsy.com/shop/DesignsbyLealyn" />
                    <p>Etsy</p>
                </div>
            </div>
        
        </div>
    )
}

export default Contact
