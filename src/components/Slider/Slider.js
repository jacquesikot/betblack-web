import React, { useState } from 'react';
// import './Slider.css'
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

import tabImage1 from 'assets/images/slider_1.png';
import TabItem from 'sections/tabItem';

const data = [
  {
    id: 1,
    title: '8Ball Pool',
    subtitle: `Stake & earn real money when you play games with your friends and pals. Playing with friends is easy sign and you’ll be able to challenge your friends straight from the game.`,
    image: tabImage1,
  },
  {
    id: 2,
    title: '8Ball Pool',
    subtitle: `Stake & earn real money when you play games with your friends and pals. Playing with friends is easy sign and you’ll be able to challenge your friends straight from the game.`,
    image: tabImage1,
  },
  {
    id: 3,
    title: '8Ball Pool',
    subtitle: `Stake & earn real money when you play games with your friends and pals. Playing with friends is easy sign and you’ll be able to challenge your friends straight from the game.`,
    image: tabImage1,
  },
];

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {data.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            <TabItem
              title={obj.title}
              subtitle={obj.subtitle}
              image={obj.image}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      {/* <BtnSlider moveSlide={prevSlide} direction={'prev'} /> */}

      <div className="container-dots">
        {data.map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
}
