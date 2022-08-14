import React from 'react';
import img from '../img.png';
import { Link } from 'react-router-dom';
import Nav from './Nav';
const Home = (props) => {
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
        <div className="right">
          <img
            src={
              'https://static.vecteezy.com/system/resources/previews/002/759/924/original/stamp-with-official-country-flag-pattern-and-old-grunge-texture-and-countries-name-rectangle-shape-set-6-of-12-on-this-series-all-national-flags-of-the-world-vector.jpg'
            }
            className="hero-image"
            alt=""
          />
        </div>
      </div>
      <footer className="text-center mt-8">
        <p>
          Made with <i className="fas fa-heart"></i> by Omkar
        </p>
        <a
          href="https://github.com/OmkarK45/react-countries"
          className="py-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </React.Fragment>
  );
};

export default Home;
