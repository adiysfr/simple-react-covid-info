import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import LogoCov from './covid-19.jpg';
import About from './About';
import Tips from './Tips';
import homeIcon from './images/home.png';
import aboutIcon from './images/aboutus.png';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className='wrap-all'>
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
      </HashRouter>
    );
  }
}

export default Main;
