import './navBar.scss'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <Link to={'/'} className="removeU">
          <div className="pciLabel">PCI</div>
        </Link>
        <div className="listLinks">
          <ul>
            <Link to={'/about'} className="removeU">
              <li>About</li>
            </Link>
            <Link to={'/stores-information'} className="removeU">
              <li>Our Stores</li>
            </Link>
            <Link to={'/contact-us'} className="removeU">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <button className="logInBtn">Log In</button>
      </div>
    </>
  )
}
export default NavBar
