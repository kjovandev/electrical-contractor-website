import React, { useEffect, useRef } from 'react';
import Image from 'react-bootstrap/Image';

const MovingImage = ({ imageSource }) => {
 const backgroundImageRef = useRef(null);

 useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const backgroundImage = backgroundImageRef.current;
      if (backgroundImage) {
        backgroundImage.style.transform = `translateY(${scrollY * 0.5}px)`; // change 0.5 to any value between 0 and 1 to adjust the scroll speed
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 return (
    <div className="faux-column" style={{ position: "relative", overflow: "hidden", minHeight: "400px", backgroundColor: "red" }}>
      <div className="content" style={{ position: "relative", zIndex: "2" }}>
        <p>text</p>
      </div>
      <div ref={backgroundImageRef} style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "100" }}>
        <Image src={imageSource} 
        style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }}
        
        alt="image 1"></Image>
      </div>
    </div>
 )
}

export default MovingImage;