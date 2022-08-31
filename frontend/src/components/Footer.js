import React from 'react'
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";

const date = new Date().getFullYear();

const Footer = () => {
    return (
        <div className>
            <div className='footer-container'>
                <div className='footer-sub'>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/boyanmol" target={'_blank'}><ImFacebook color='#888888' /></a>
                        <a href="https://www.facebook.com/boyanmol" target={'_blank'}><ImTwitter color='#888888' /></a>
                        <a href="https://np.linkedin.com/in/anmol-thapa?trk=people-guest_people_search-card" target={'_blank'}><ImLinkedin2 color='#888888' /></a>
                    </div>
                    <p className='footer-footer'>
                        @{date} Anmol Thapa Magar
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer