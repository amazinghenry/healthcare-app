import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    return ( 
        <nav className='container'>
            <div className='main-logo'>
                Healthcare
            </div>
            <div className='link-group'>
                <Link to = "/" className='link-item'>Home</Link>
                <Link to = "/" className='link-item'>Price List</Link>
                <Link to = "/" className='link-item'>Employers</Link>
                <Link to = "/" className='link-item nav-button'>Consult Now</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;