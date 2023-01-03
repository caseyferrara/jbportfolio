import './CSS/Style.css'
import { Element } from 'react-scroll';
import homepage from '../Images/homepage.png';

function HomePage() {

    return (
      
      <Element id="homepage">
        <div align="center" className="allContainer">
            <div
                align="center"
                style={{
                    backgroundImage: `url(${homepage})`,
                    backgroundSize: 'cover',
                    height: 600,
                    width: 650
                }}
            >
            <p className='headerText'>hey!</p>
            <p className='headerText'>i think we'd click.</p>
            </div>
        </div>
      </Element>
    );
  }
  
  export default HomePage;