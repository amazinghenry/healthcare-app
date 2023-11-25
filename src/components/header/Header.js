import './header.css';

const Header = () => {
    return ( 
        <header className='container'>
            <div className='header-group'>
                <h1>Your Comprehensive Healthcare Resource</h1>
                <p>Welcome to Healthcare, your ultimate destination for comprehensive healthcare information and support. We take pride in being your go-to resource for all things health-related.</p>
                <button type="button" className='green-button'>Get Started</button>
            </div>
        </header>
     );
}
 
export default Header;