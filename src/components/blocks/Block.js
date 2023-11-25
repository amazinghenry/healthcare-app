import './block.css';
import block1 from '../../assets/block1.png';
import block2 from '../../assets/block2.png';
import block3 from '../../assets/block3.png';

const Block = () => {
    return ( 
        <section className="container">

            <div className="block-group">
                <img src={ block1 } alt="doctor on duty" className="img-fluid block-item" />
                <img src={ block2 } alt="doctor on duty" className="img-fluid block-item" />
                <img src={ block3 } alt="doctor on duty" className="img-fluid block-item" />
            </div>

        </section>
     );
}
 
export default Block;