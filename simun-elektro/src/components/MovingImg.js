// MovingImg.js
import React, { useEffect, useRef } from 'react';
import Image from 'react-bootstrap/Image';
import "./styles.css";

const MovingImage = ({ contentOverImage, imageSource, initialTopPosition = 0 }) => {
  const backgroundImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const elementTop = backgroundImageRef.current.getBoundingClientRect().top;
      const translation = Math.max(0, Math.min(viewportHeight - elementTop, viewportHeight) * 0.5);

      const backgroundImage = backgroundImageRef.current;
      if (backgroundImage) {
        backgroundImage.style.transform = `translateY(${translation}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="movingImgMainDiv">
      <div className="contentOverovingImg">
        <p>{contentOverImage}</p>
      </div>
      <div className='movingImgDiv' ref={backgroundImageRef} style={{ top: `${initialTopPosition}px` }}>
        <Image className='movingImg' src={imageSource} alt="image 1"></Image>
      </div>
    </div>
  );
};

export default MovingImage;
