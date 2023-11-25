import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return ( 
        <footer className='container-fluid'>
            <div className='container footer-group'>

                <div className='footer-item'>
                    <p className='footer-title'>Company</p>
                    <Link to ="/" className='footer-link-item'>Home</Link>
                    <Link to ="/" className='footer-link-item'>About Us</Link>
                    <Link to ="/" className='footer-link-item'>Careers</Link>
                    <Link to ="/" className='footer-link-item'>Testimonials</Link>
                </div>
                <div className='footer-item '>
                    <p className='footer-title'>Professionals</p>
                    <Link to ="/" className='footer-link-item'></Link>
                    <Link to ="/" className='footer-link-item'>Work for Healthcare</Link>
                    <Link to ="/" className='footer-link-item'>Benefits</Link>
                    <Link to ="/" className='footer-link-item'>Download the App</Link>
                    <Link to ="/" className='footer-link-item'>Refer a Facility</Link>
                </div>
                <div className='footer-item '>
                    <p className='footer-title'>Facilities</p>
                    <Link to ="/" className='footer-link-item'>provider Portal</Link>
                    <Link to ="/" className='footer-link-item'>Hospitals</Link>
                    <Link to ="/" className='footer-link-item'>Skilled Nurse</Link>
                    <Link to ="/" className='footer-link-item'>Products</Link>
                </div>
                <div className='footer-item '>
                    <p className='footer-title'>Contact us</p>
                    <Link to ="/" className='footer-link-item'> Healthcare@gmail.com</Link>
                    <Link to ="/" className='footer-link-item'>(44)555-0909</Link>
                </div>
            </div>

            <div className='copyright-group'>
                <p>© copyright Healthcare. All Right Reserved </p>
            </div>

        </footer>
     );
}
 
export default Footer;