import React from 'react';
import {ImFacebook} from 'react-icons/im';
import {AiOutlineTwitter, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai';


const Footer = () => {
  return (
    <footer>
        <div className='container'>
        <div className="footer-item">
            <div className='img'>
                <img src="foot.png" alt="img" />                
                <p>join the revolution and see how easy middle makes home loans</p>
            </div>
            <div className='company'>
                <h4>company</h4>
                <p>contact</p>
            </div>
            <div className='help'>
                <h4>Who we help</h4>
                <ul>
                    <li>customers</li>
                    <li>Brokers</li>
                    <li>Lenders</li>
                </ul>
            </div>
            <div className='icon'>
                <h4>follow us on</h4>
                <ul className="social">
                    <li><ImFacebook /> </li>
                    <li><AiOutlineTwitter /></li>
                    <li><AiFillYoutube /></li>
                    <li><AiFillLinkedin /></li>
                </ul>
            </div>
        </div>
        <hr />
        <div className='copy-right'>
        <div>
            <p>&#169; 2023 PennyPot | ABN 89 684 875 315 | Australia Credit Licence 538443</p>
        </div>
            <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Privacy Collection Notice</li>
            </ul>
        </div>
        </div>
    </footer>
  )
}

export default Footer