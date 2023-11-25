import './guide.css';
import guideimage from '../../assets/guide.png';

const Guide = () => {
    return ( 
        <section className='container guide'>
            <div className='guide-group'>
                <img src = { guideimage } alt='doctor taking care of patient' className='img-fluid' />
                <div className='guide-item'>
                    <h2>Responsive, Knowledgable and Compassionate</h2>
                    <p>We understand that your well-being is a journey, and we are here to guide you with a commitment to being responsive, knowledgeable, and compassionate every step of the way</p>
                    <button type='button' className='green-button' >Consult Now</button>
                </div>
            </div>
        </section>
     );
}
 
export default Guide;
