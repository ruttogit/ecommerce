import logo from "../../icons/logoipsum-white.svg"
// import facebook from "../../icons/facebook.svg"
// import instagram from "../../icons/instagram.svg"
// import twitterX from "../../icons/x-twitter.svg"
// import discord from "../../icons/discord.svg"
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { IoLogoReddit } from "react-icons/io";
import { Link } from "react-router-dom"
import "./Footer.css"



function Footer() {
  return (
    <div className='footer'>
        <div className="footer-left">
            <div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div> 
                <div className="footer-text">
                    <p>ultrices erat aliquam, perspiciatis repellendus tincidunt inventore praesentium omnis vestibulum laoreet risus molestie lectus, id aute </p>
                </div>
            </div>
            <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF />
                    </div>
                    <div className="icon">
                        <RiTwitterXFill />
                    </div>
                    <div className="icon">
                        <CiInstagram />
                    </div>
                    <div className="icon">
                        <IoLogoReddit />
                    </div>
                {/* <img src={discord} alt="" />
                <img src={instagram} alt="" />
                <img src={twitterX} alt="" />
                <img src={facebook} alt="" /> */}
            </div> 
        </div>
        <div className="footer-center">
            <h3>Explore</h3>
            <ul>
                <a href="#categories">Categories</a>
                <a href="#categories">Latest Trends</a>
                <a href="#categories">New Designs</a>
                <a href="#categories">Featured Products</a>
            </ul>
        </div>
        <div className="footer-right">
            <h3>About</h3>
            <ul>
                <a href="#categories">Places</a>
                <Link to={'/about'}>Why Choose Us</Link>
                <a href="#categories">Support</a>
                <a href="#categories">Terms & Service</a>
            </ul>
        </div>
    </div>
  )
}

export default Footer