import Image1 from '../../images/why-choose.jpg'
import './About.css'

function About() {
  return (
    <div className='about'>
        <div className="about-us">
            <h1>About Us</h1>
            <div className="about-us-wrapper">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci iste vero sapiente odio et ab nam architecto quo? Itaque fuga aliquam sapiente nulla repellendus beatae cumque assumenda, quam nostrum sit veniam, ex quos a distinctio architecto possimus corporis optio ad dolorem autem veritatis et magni. Doloremque ab velit explicabo.</p>
            </div>
        </div>
        <div className="why-choose">
          <h2>Why Choose Us?</h2>
          <div className="why-choose-us-wrapper">
            <div className="left-wrapper">
              <img src={Image1} alt="" />
            </div>
            <div className="right-wrapper">
              <h3>Wide Product Selection</h3>
              <p>Posuere accumsan deleniti, distinctio condimentum aliquip sequi congue consequatur faucibus, senectus quos, do ratione quaerat hac aliquip quas sed auctor voluptates nesciunt? Venenatis fuga adipisci, numquam proident. Convallis. Accusantium nonummy! Dolorum quasi, leo consectetuer, dicta, possimus, aliquam dapibus reprehenderit, fames alias venenatis metus? Animi corrupti interdum ornare perferendis quis eleifend maecenas mauris nunc perspiciatis. Cupiditate sunt saepe, fugiat fugiat ratione, dis maiores parturient. Ut, cursus? Error aperiam nisi quis pretium, commodo minus ornare, repudiandae? Condimentum. volutpat maxime ipsum vulputate, quis ducimus commodi! Ullamcorper cubilia! Iaculis dis, malesuada hendrerit sociis turpis sunt! </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About