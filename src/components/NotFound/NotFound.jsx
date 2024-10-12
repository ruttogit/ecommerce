import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import './NotFound.css'

function NotFound() {
  return (
    <div className='space-top'>
      <div className="notfound">
        <h1>NotFound</h1>
        <Link to={'/'}>        
          <div className="call-to-act">
            <IoMdArrowBack />
            <p>Back To Home</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NotFound