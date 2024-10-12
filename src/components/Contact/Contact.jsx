import { MdPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { IoLogoReddit } from "react-icons/io";
import "./Contact.css"

function Contact() {
  return (
    <div className="contact">
        <div className="contact-wrapper">
            <div className="contact-left">
                <h2>Contact</h2>
                <p className="contact-paragraph">Iure vero ipsum ultrices ad! Perspiciatis quod, etiam temporibus quasi culpa nostrum! Cillum, magnis placeat ultricies similique eos animi vehicula, tenetur adipisci veritatis rem ante nulla ornare sequi curabitur rerum. Dictum, sunt! Incidunt mollis turpis incididunt.</p>
                <div className="contact-icons">
                    <div className="cont">
                        <div className="icon"><MdPhone /></div>
                        <p>+1234567890</p>
                    </div>
                    <div className="cont">
                        <div className="icon"><MdOutlineMail /></div>
                        <p>example.email.com</p>
                    </div>
                    <div className="cont">
                        <div className="icon"><IoLogoWhatsapp /></div>
                        <p>+1234567890</p>
                    </div>
                </div>
                <div className="follow">
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
                </div>
            </div>
            <div className="contact-right">
                <form action="">
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Phone Number"/>
                    <input type="text" placeholder="Email Adress"/>
                    <textarea name="" id="" placeholder="Message"></textarea>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact