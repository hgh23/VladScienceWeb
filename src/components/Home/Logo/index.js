import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
import {  useRef } from 'react';


const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();


  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        />
        <path
          ref={outlineLogoRef}
          d="M2900,4560C2556,4544,2277,4475,1985,4332C1754,4218,1579,2921,1385,2896C1324,2828,1240,2751,1145,2683"
        />
      </svg>
    </div>
  );
};

export default Logo;
