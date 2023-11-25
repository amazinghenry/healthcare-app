import './mission.css';
import mission from '../../assets/mission.png';

const Mission = () => {
    return ( 
        <section className='container mission-group'>
            <div className='mission-item'>
                <h2>Nurturing Health and Building Community at Healthcare </h2>
                <p>At healthcare, our mission is to provide a holistic approach to healthcare, fostering a supportive community that accompanies you on your journey to a healthier, happier life.</p>
                <button type='button' className='green-button' >Learn More</button>
            </div>
            <div className='mission-item'>
                <img src = { mission } alt='grid of healthcare professionals' className='img-fluid' />
            </div>
        </section>
    );
}
 
export default Mission;