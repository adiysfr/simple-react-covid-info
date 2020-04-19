import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Home from './Home';
import About from './About';
import Tips from './Tips';
import homeIcon from './images/home.png';
import aboutIcon from './images/aboutus.png';
import LogoCov from '../src/images/covid-19.jpg';

const styles = {
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <StyleRoot>
          <div className='wrap-all' style={styles.fadeIn}>
            <img src={LogoCov} alt='imageCov' className='image-top' />
            <h4 className='title'>Covid-19 Realtime Data</h4>
            <ul className='header'>
              <li>
                <NavLink exact to='/'>
                  <img className='imgNav' src={homeIcon} alt='default' />
                  <p>Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to='/tips'>
                  <img className='imgNav' src={aboutIcon} alt='default' />
                  <p>Tips</p>
                </NavLink>
              </li>
              <li>
                <NavLink to='/about'>
                  <img className='imgNav' src={aboutIcon} alt='default' />
                  <p>About</p>
                </NavLink>
              </li>
            </ul>
            <div className='content'>
              <Route exact path='/' component={Home} />
              <Route exact path='/tips' component={Tips} />
              <Route exact path='/about' component={About} />
            </div>
            <div className='footer'>
              <p>Adi Yusuf Ramadhan | 2020</p>
            </div>
          </div>
        </StyleRoot>
      </HashRouter>
    );
  }
}

export default Main;
