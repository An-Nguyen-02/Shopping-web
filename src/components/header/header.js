import react from "react";
import './header.scss';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.util.js'

const Header = ({currentUser}) => (
    <div className="header">
        <Link to = "/">
            <Logo className="logo-container" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/contact'>
                CONTACT
            </Link>
            <Link>
                {
                    currentUser ?
                    <div className="option" onClick={()=>auth.signOut()}> SIGN OUT</div>
                    :
                    <Link className="option" to='/signin'>SIGN IN</Link>
                }
            </Link>
        </div>

    </div>
)

export default Header;