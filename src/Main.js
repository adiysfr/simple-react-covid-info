import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import LogoCov from './covid-19.jpg';
import About from './About';
import homeIcon from './images/home.png';
import aboutIcon from './images/aboutus.png';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
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
              <NavLink to='/about'>
                <img className='imgNav' src={aboutIcon} alt='default' />
                <p>About</p>
              </NavLink>
            </li>
          </ul>
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </div>
          <div className='footer'>
            <p>Adi Yusuf Ramadhan | 2020</p>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
