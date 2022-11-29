import './IntroTexts.css';

import React, { useState } from 'react';

export default function IntroTexts() {
  const [isFadeIn, setIsFadeIn] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0.5);

  setTimeout(() => {
    const slide = currentSlide + 0.5;
    if (slide > 2) {
      setCurrentSlide(0.5);
    } else {
      setCurrentSlide(slide);
    }
    setIsFadeIn(!isFadeIn);
  }, 1500);

  return (
    <div>
      { Math.ceil(currentSlide) === 1
        ? <div className={ isFadeIn ? 'intro-text fadeIn' : 'intro-text fadeOut' }>
            HI! I AM APOORVA SHARMA
          </div>
        : null
      }
      { Math.ceil(currentSlide) === 2
        ? <div className={ isFadeIn ? 'intro-text fadeIn' : 'intro-text fadeOut' }>
        ASPIRING PRODUCT MANAGER
      </div>
        : null
      }
    </div>
  );
}
