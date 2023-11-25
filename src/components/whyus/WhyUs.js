import './whyus.css';
import accessible from '../../assets/accessible.png';
import heart from '../../assets/heart.png';
import technology from '../../assets/technology.png';
import wellness from '../../assets/wellness.png';
import certificate from '../../assets/certificate.png';
import community from '../../assets/community.png';

const WhyUs = () => {
    return ( 
        <section className='container-fluid why-us'>
            <div className='container whyus-container'>
                <h2>Why Choose Us?</h2>
                <p>At Healthcare, we stand at the forefront of healthcare excellence, dedicated to providing you with unique.</p>

                <div className='whyus-group'>

                    <div className='whyus-item'>
                        <img src = { certificate } alt='' className='img-fluid' />
                        <h3>Why Choose Us?</h3>
                        <p>Authentic Online Medical Certificates from £10.90. AHPRA-registered specialists, delivered, fast, convenient, and affordable, all from home.</p>
                    </div>

                    <div className='whyus-item'>
                        <img src = { heart } alt='' className='img-fluid' />
                        <h3>Patient Centric Approach</h3>
                        <p>Your health is our priority. We prioritise a patient-centric approach, tailoring our services to meet your individual needs and preferences.</p>
                    </div>

                    <div className='whyus-item'>
                        <img src = { technology } alt='' className='img-fluid' />
                        <h3>Cutting-Edge Technology</h3>
                        <p>We leverage the latest advancements in medical technology to provide you with the most effective and efficient healthcare solutions.</p>
                    </div>

                    <div className='whyus-item'>
                        <img src = { wellness } alt='' className='img-fluid' />
                        <h3>Holistic Wellness</h3>
                        <p>Beyond addressing immediate health concerns, we focus on promoting overall well-being. Our holistic approach encompasses physical, mental, and etc.</p>
                    </div>

                    <div className='whyus-item'>
                        <img src = { accessible } alt='' className='img-fluid' />
                        <h3>Accessible & Convenient</h3>
                        <p>We understand the importance of accessibility and convenience in healthcare. Our user-friendly platform ensures easy navigation and seamless interactions.</p>
                    </div>

                    <div className='whyus-item'>
                        <img src = { community } alt='' className='img-fluid' />
                        <h3>Community Connection</h3>
                        <p>Join a community that cares. Our platform fosters a sense of belonging and support, connecting you with a network of individuals who share similar health goals</p>
                    </div>                    
                </div>

            </div>
        </section>
     );
}
 
export default WhyUs;