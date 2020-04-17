import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends React.Component {
  render() {
    return (
      <div className='boxWhite'>
        <div className='wrapTitle'>
          <h4>Tentang Website Ini</h4>
        </div>
        <div className='wrapContent'>
          <Container>
            <p>
              Website sederhana ini dibuat untuk membantu melihat informasi
              tentang data covid-19. Sumber Data yang di ambil dari{' '}
              <a
                href='https://corona.lmao.ninja/'
                target='_blank'
                rel='noopener noreferrer'
              >
                NOVELCovid/API.
              </a>
              <br />
              <br />
              Semoga membantu, Terimakasih.
              <br />
              Adi Yusuf Ramadhan
            </p>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
