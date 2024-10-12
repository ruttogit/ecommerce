import { useTypewriter } from 'react-simple-typewriter'
import "./Hero.css"





function Hero() {
  // typewriter state
  const [text] = useTypewriter({
    words: ['you.', 'your style.', 'your life.'],
    loop: {},
    typeSpeed: 120,
  })
  

  return (
    <div className='hero' id="home">
        <div className="hero-text">
            <h1>Discover Handpicked <span className="special">Treasures,</span> Crafted Just for <span className="special">{text}</span></h1>
            <p>Shop the latest collections at unbeatable prices. Elevate your wardrobe today Porttitor dolorum ea aperiam explicabo deleniti, mattis aenean voluptatum quos neque facere, sapien malesuada officia dicta similique!</p>
            <a href="#categories"><button className="btn">Shop Now</button></a>
        </div>
    </div>
  )
}

export default Hero