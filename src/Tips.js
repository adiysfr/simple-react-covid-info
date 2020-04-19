import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TipsIcon from './images/tips.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class About extends React.Component {
  render() {
    return (
      <div className='boxWhite'>
        <div className='wrapTitle'>
          <h4>Tips</h4>
        </div>
        <div className='wrapContent'>
          <Container>
            <Carousel>
              <div>
                <img src='https://asset.kompas.com/crops/BM0hsv8rbG4DJYhVrJSU19_i4Ho=/4x36:1200x833/750x500/data/photo/2020/03/31/5e83084449494.jpg' />
                <p className='legend'>sumber: kompas.com</p>
              </div>
              <div>
                <img src='https://pbs.twimg.com/media/EPHMPT9UUAA3IxK.jpg' />
                <p className='legend'>sumber: pmi</p>
              </div>
              <div>
                <img src={TipsIcon} />
                <p className='legend'>
                  sumber: Kementrian Kesehatan Republik Indonesia
                </p>
              </div>
            </Carousel>
          </Container>
          {/* <div className='tips'>
              <img src={TipsIcon} alt='tips' />
              <p>Sumber: Kementrian Kesehatan Republik Indonesia</p>
            </div> */}
        </div>
      </div>
    );
  }
}

export default About;
