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
      positive: '',
      deaths: '',
      recovered: '',
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
          <div>
            <p>
              <span className=''>Positive:</span> <br /> {data.cases}
            </p>
          </div>
        );
        const deaths = (
          <div>
            <p>
              <span className=''>Meninggal:</span> <br /> {data.deaths}
            </p>
          </div>
        );
        const recovered = (
          <div>
            <p>
              <span className=''>Sembuh:</span> <br /> {data.recovered}
            </p>
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
  componentDidMount() {
    this.getAllData();
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
                    <img className='circle' src={positiveIcon} alt='default' />
                  </center>
                  <div className='ctr'>{this.state.positive}</div>
                </div>
              </Col>
              <Col xs='4'>
                <div className='bgCircle'>
                  <center>
                    <img className='circle' src={recoveryIcon} alt='default' />
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
    );
  }
}

export default Home;
