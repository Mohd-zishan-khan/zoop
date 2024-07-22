import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer' >
          
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" srcset="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos atque, ipsa minima corrupti quasi animi quidem tempore officia, ratione doloremque. Consequatur accusantium tempora unde provident itaque veniam fugiat ipsa?</p>

                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li> Delivery</li>
                        <li> Privacy policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>9301741847</li>
                        <li>zishan.112khan@gmail.com</li>
                    </ul>

                </div>
                 
            </div>
            <hr />
            <p className="footer-copyright"></p>


        </div>
    )
}

export default Footer