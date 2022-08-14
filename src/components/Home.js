import React from 'react';
import img from '../img.png';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Home() {
  return (
    <React.Fragment>
      <Nav />
      <div className="home-wrapper">
        <div className="left">
          <div className="text-holder">
            <h2 className="home-hero-upper">Explore</h2>
            <h2 className="home-hero-bottom">Countries</h2>
            <Link to="/all">
              <button className="btn btn-nav show">SHOW ALL</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
