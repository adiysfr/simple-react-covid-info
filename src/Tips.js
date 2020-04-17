import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TipsIcon from './images/tips.png';

class About extends React.Component {
  render() {
    return (
      <div className='boxWhite'>
        <div className='wrapTitle'>
          <h4>Tips</h4>
        </div>
        <div className='wrapContent'>
          <Container>
            <div className='tips'>
              <img src={TipsIcon} alt='tips' />
              <p>Sumber: Kementrian Kesehatan Republik Indonesia</p>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
