import './CSS/Style.css'
import { Element } from 'react-scroll';
import homepage from '../Images/homepage.png';

function HomePage() {
  return (
    <Element id="homepage">
      <div align="center" className="allContainer">
        <div
          style={{
            backgroundImage: `url(${homepage})`,
            // backgroundSize: 'cover',
            height: 740,
            width: 705
          }}
        >
        </div>
      </div>
    </Element>
  );
}

export default HomePage;