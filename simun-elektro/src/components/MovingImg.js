// // // MovingImg.js
// // import React, { useEffect, useRef, useState } from 'react';
// // import Image from 'react-bootstrap/Image';
// // import "./styles.css";


// const MovingImage = (props) => {
  
  
//   let [image, setImage] = useState(props.imageList[0])
//   let index = 0
//   useEffect(() => {
//     const img = document.querySelector(".ImgMainDiv")
//     const interval = setInterval(() => {
//       index++
//       index = index % props.imageList.length
//       setImage(props.imageList[index])

//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//       <img className="ImgMainDiv" src={image} />
//   );
// };

// export default MovingImage;
