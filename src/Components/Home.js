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
          <div className="headerText">
            <p>hey!</p>
            <p>i think we'd click.</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default HomePage;
