import './testimony.css';
import janedoe from '../../assets/janedoe.png';

const Testimony = () => {
    return ( 
        <section className='testimony container'>
            <div className='testimony-group'>

                <div className='testimony-item'>
                    <h2>What do they say about Healthcare?</h2>
                    <p className='testimony-text' >Explore the What Do they Say About  section on our website and discover the real stories, testimonials, and insights from individuals.</p>
                    <button type='button' className='green-button'>View More</button>
                </div>
                <div className='testimony-item'>
                    <p className='author-text'>
                    The compassionate care and the strong sense of connection within Healthcare community have been my pillar of support. It’s more than a healthcare platform; It’s a lifeline for those seeking understanding. guidance and genuine connections.
                    </p>
                    <div className='testimony-author-group'>
                        <img src = { janedoe } alt='author' className='img-fluid' />
                        <p className='author-text'>Jane D.</p>
                    </div>
                </div>

            </div>
        </section>
     );
}
 
export default Testimony;