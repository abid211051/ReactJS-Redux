import React, { useState } from 'react'
import { useEffect } from 'react';
import Slider from './ImageGenerator/Slider';
import pic from './ImageSrcData/ImageSrc';

let cnt = 8; // Setting in mid point.[Can initialize as 0 also]
function App() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    const img = <Slider pic={pic} cnt={cnt} />
    setImage(img)
  }, [])
  const leftmovement = (e) => {
    cnt++;
    if (cnt > pic.length - 1) {
      cnt = 0;
    }
    const img = <Slider pic={pic} cnt={cnt} />
    setImage(img)
  }
  const rightmovement = (e) => {
    cnt--;
    if (cnt < 0) {
      cnt = pic.length - 1;
    }
    const img = <Slider pic={pic} cnt={cnt} />
    setImage(img)
  }
  return (
    <>
      <div className='main'>
        <h1>Flower is an exquisite symphony of beauty.</h1>
        <div className='slider'>
          <button className='btn left' onClick={leftmovement}>left</button>
          {image.length !== 0 ? image : ''}
          <button className='btn right' onClick={rightmovement}>Right</button>
        </div>
      </div>
    </>
  )
}

export default App
