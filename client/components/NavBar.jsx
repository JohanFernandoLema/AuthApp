import './navBar.scss'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <Link to={'/'}>
          <div>PCI</div>
        </Link>
        <div className="listLinks">
          <ul>
            <Link to={'/about'}>
              <li>About</li>
            </Link>
            <Link to={'/stores-information'}>
              <li>Our Stores</li>
            </Link>
            <Link to={'/contact-us'}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div>
          <button>Log In</button>
        </div>
      </div>
    </>
  )
}
export default NavBar
