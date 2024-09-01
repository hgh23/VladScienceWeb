import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iohxrtc', 'template_tsh6yuu', refForm.current, 'rW-inZuxp2RoRKW2P')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>🌟 Attention data-driven decision makers! Don't miss the opportunity to collaborate with a passionate, MIT-certified data scientist. With expertise in machine learning, predictive modeling, and a proven track record of transforming data into actionable insights, I'm here to help unlock the full potential of your data. Let's connect and drive your organization's success through cutting-edge analytics! 🚀📊📩</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="Name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="Email" placeholder="Email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="Subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message"></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="info-map">
          Vladimir Belony <br />
          United States of America <br />
          Fort Myers, FL 33920 <br />
          <span>ALL4_1@icloud.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[26.6406, -81.8723]} zoom={13} scrollWheelZoom={false}>
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;