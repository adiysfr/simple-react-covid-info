import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';
import positiveIcon from './images/positive.png';
import recoveryIcon from './images/recovery.png';
import deathIcon from './images/death.png';

import axios from './Axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positive: 0,
      deaths: 0,
      recovered: 0,
      positiveIndonesia: 0,
      deathsIndonesia: 0,
      recoveredIndonesia: 0,
      casesNowIndonesia: 0,
      deathsNowIndonesia: 0,
      isLoading: true
    };
  }

  getAllData() {
    axios
      .get(`v2/all`, {})
      .then(res => {
        const data = res.data;
        console.log(data);
        const positive = (
          <div classname='content-fill'>
            <span className='title-content'>Positive:</span> <br />{' '}
            <p className='count-content'> {data.cases}</p>
          </div>
        );
        const deaths = (
          <div classname='content-fill'>
            <span className='title-content'>Meninggal:</span> <br />{' '}
            <p className='count-content'> {data.deaths}</p>
          </div>
        );
        const recovered = (
          <div classname='content-fill'>
            <span className='title-content'>Sembuh:</span> <br />{' '}
            <p className='count-content'> {data.recovered}</p>
          </div>
        );

        this.setState({
          positive,
          deaths,
          recovered
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  getIndonesiaData() {
    axios
      .get(`v2/countries/indonesia`, {})
      .then(res => {
        const data = res.data;
        console.log(data);
        const positiveIndonesia = (
          <div classname='content-fill'>
            <span className='title-content'>Positive:</span> <br />{' '}
            <p className='count-content'> {data.cases}</p>
          </div>
        );
        const deathsIndonesia = (
          <div classname='content-fill'>
            <span className='title-content'>Meninggal:</span> <br />{' '}
            <p className='count-content'> {data.deaths}</p>
          </div>
        );
        const recoveredIndonesia = (
          <div classname='content-fill'>
            <span className='title-content'>Sembuh:</span> <br />{' '}
            <p className='count-content'> {data.recovered}</p>
          </div>
        );
        const casesNowIndonesia = (
          <div classname='content-fill'>
            <span className='title-content'>Positive Hari Ini:</span> <br />{' '}
            <p className='count-content'> {data.casesPerOneMillion}</p>
          </div>
        );
        const deathsNowIndonesia = (
          <div classname='content-fill'>
            <span className='title-content'>Meninggal Hari Ini:</span> <br />{' '}
            <p className='count-content'> {data.deathsPerOneMillion}</p>
          </div>
        );

        this.setState({
          positiveIndonesia,
          deathsIndonesia,
          recoveredIndonesia,
          casesNowIndonesia,
          deathsNowIndonesia
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getAllData();
    this.getIndonesiaData();
    setTimeout(
      function() {
        this.setState({ isLoading: false });
      }.bind(this),
      500
    );
  }

  render() {
    return this.state.isLoading ? (
      <Spinner type='grow' color='secondary' />
    ) : (
      <>
        <div className='boxWhite'>
          <div className='wrapTitle'>
            <h5>Data Di Seluruh Dunia</h5>
          </div>
          <div className='wrapContent'>
            <Container>
              <Row>
                <Col xs='4'>
                  <div className='bgCircle'>
                    <center>
                      <img
                        className='circle'
                        src={positiveIcon}
                        alt='default'
                      />
                    </center>
                    <div className='ctr'>{this.state.positive}</div>
                  </div>
                </Col>
                <Col xs='4'>
                  <div className='bgCircle'>
                    <center>
                      <img
                        className='circle'
                        src={recoveryIcon}
                        alt='default'
                      />
                    </center>
                    <div className='ctr'>{this.state.recovered}</div>
                  </div>
                </Col>
                <Col xs='4'>
                  <div className='bgCircle'>
                    <center>
                      <img className='circle' src={deathIcon} alt='default' />
                    </center>
                    <div className='ctr'>{this.state.deaths}</div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className='boxWhite'>
          <div className='wrapTitle'>
            <h5>Data Di Indonesia</h5>
          </div>
          <div className='wrapContent'>
            <Container>
              <Row>
                <Col xs='4'>
                  <div className='bgCircle'>
                    <center>
                      <img
                        className='circle'
                        src={positiveIcon}
                        alt='default'
                      />
                    </center>
                    <div className='ctr'>{this.state.positiveIndonesia}</div>
                  </div>
                </Col>
                <Col xs='4'>
                  <div className='bgCircle'>
                    <center>
                      <img
                        className='circle'
                        src={recoveryIcon}
                        alt='default'
                      />
                    </center>
                    <div className='ctr'>{this.state.recoveredIndonesia}</div>
                  </div>
                </Col>
                <Col xs='4'>
                  <div className='bgCircle'>
                    <center>
                      <img className='circle' src={deathIcon} alt='default' />
                    </center>
                    <div className='ctr'>{this.state.deathsIndonesia}</div>
                  </div>
                </Col>
                <Col xs='4'>
                  <div className='bgCircle'>
                    <center>
                      <img
                        className='circle'
                        src={positiveIcon}
                        alt='default'
                      />
                    </center>
                    <div className='ctr'>{this.state.casesNowIndonesia}</div>
                  </div>
                </Col>
                <Col xs='4'>
                  <div className='bgCircle'>
                    <center>
                      <img className='circle' src={deathIcon} alt='default' />
                    </center>
                    <div className='ctr'>{this.state.deathsNowIndonesia}</div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
