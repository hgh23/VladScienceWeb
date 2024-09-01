import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['l', 'a', 'd', 'i', 'm', 'i', 'r',' ','A'];
  const jobArray = ['D','A','T','A',];
  const jobArray1 = ['S','C','I','E','N','T','I','S','T'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass} _1`}>H</span>
          <span className={`${letterClass} _2`}>i,</span>
          <br />
          <span className={`${letterClass} _3`}>I</span>
          <span className={`${letterClass} _4`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={5} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray1} idx={30} />
        </h1>
        <h2>Data Scientist / IT Analyst / Python Enthusiast</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <Logo />
    </div>
    <Loader type='pacman' />
    </>
  );
};

export default Home;