import { type ReactElement } from 'react';
import './Styles.css';
import { Link } from 'react-router-dom';

import snap from './assets/images/logo.svg';
import pic1 from './assets/images/icon-todo.svg';
import cal from './assets/images/icon-calendar.svg';
import remi from './assets/images/icon-reminders.svg';
import plan from './assets/images/icon-planning.svg';
import datbiz from './assets/images/client-databiz.svg';
import audiophile from './assets/images/client-audiophile.svg';
import meet from './assets/images/client-meet.svg';
import maker from './assets/images/client-maker.svg';
import heroImage from './assets/images/image-hero-desktop.png';

export default function ReactM(): ReactElement {
  return (
    <div className="app">
      <header>
        <Link to="/">
          <img src={snap} alt="Snap Logo" className="snap"/>
        </Link>

        <div className="dropdown">
          <button className="dropbtn">Features</button>
          <nav className="dropdown-content">
            <div>
              <img src={pic1} alt="Todo Icon" />
              <span>Todo List</span>
            </div>
            <div>
              <img src={cal} alt="Calendar Icon" />
              <span>Calendar</span>
            </div>
            <div>
              <img src={remi} alt="Reminders Icon" />
              <span>Reminders</span>
            </div>
            <div>
              <img src={plan} alt="Planning Icon" />
              <span>Planning</span>
            </div>
          </nav>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Company</button>
          <nav className="dropdown-content">
            <Link to="/history">History</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>

        <nav className="career-nav">
          <Link to="/careers">Careers</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="register-div">
          <nav className="second-nav">
            <Link to="/login">Login</Link>
            <button className="registering">Register</button>
          </nav>
        </div>
      </header>

      <main>
        <div className="makes-div">
          <div className="smaller-div">
            <h1 id="first-heading">
              <span className="make">Make</span>
              <br />
              <span className="remote"> remote work</span>
            </h1>
            <p className="paragraph">
              Get your team in sync, no matter your location.
              <br />
              Streamline processes, create team rituals,
              <br />
              and watch productivity soar.
            </p>
            <button className="learn">Learn more</button>
          </div>

          <div className="big-image">
            <img src={heroImage} alt="A guy with a laptop" id="laptop-guy" />
          </div>
        </div>

        <div className="infor">
          <figure>
            <img src={datbiz} alt="Databiz client logo" />
          </figure>
          <figure>
            <img src={audiophile} alt="Audiophile client logo" />
          </figure>
          <figure>
            <img src={meet} alt="Meet client logo" />
          </figure>
          <figure>
            <img src={maker} alt="Maker client logo" />
          </figure>
        </div>
      </main>
    </div>
  );
}


