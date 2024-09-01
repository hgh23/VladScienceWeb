import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect } from 'react';
import { faWindows, faGithub, faFreeCodeCamp, faAws , faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {


    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t','', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Hey there! I'm a certified data scientist with a passion for leveraging data to drive business success. With a prestigious certification in Applied Data Science from MIT under my belt, I've been making waves in the industry since completing my studies.</p>
                <p>From developing recommendation systems to tackling complex predictive modeling challenges, I've honed a diverse skill set that allows me to thrive in any data-driven environment. My capstone project at MIT, where I built a sophisticated recommendation system, showcases my ability to apply cutting-edge techniques to real-world problems</p>
                <p>Looking ahead, I'm excited to expand my expertise in deep learning and big data technologies, using my proficiency in Python and scikit-learn to build robust, scalable solutions. I'm also currently exploring data visualization tools like Tableau and Power BI to enhance my ability to communicate insights effectively.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faWindows} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPython} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faFreeCodeCamp} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faAws} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                    </div>



                </div>

            </div>
            
        </div>

        <Loader type="pacman" />
        </>
    )
}


export default About;