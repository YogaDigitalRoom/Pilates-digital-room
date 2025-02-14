'use client';

import Image from 'next/image';
import { animate } from 'motion';
import { useEffect, useRef } from 'react';

const Banner = ({ title, imageSrc = '/yoga.jpg' }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const words = title.split(' ');
      titleRef.current.innerHTML = '';
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.marginRight = '8px';
        
        word.split('').forEach((letter, letterIndex) => {
          const span = document.createElement('span');
          span.innerText = letter;
          span.style.opacity = '0';
          span.style.display = 'inline-block';
          wordSpan.appendChild(span);
          animate(span, { opacity: [0, 1] }, { duration: 0.05, delay: (wordIndex * 0.5) + (letterIndex * 0.05) });
        });
        titleRef.current.appendChild(wordSpan);
      });
    }
  }, [title]);

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Overlay */}
      <div className="absolute z-[1] top-0 left-0 h-full w-full bg-black/60"></div>

      {/* Background Image */}
      <div className="absolute top-0 left-0 h-full w-full">
        <Image
          src={imageSrc}
          alt={title || 'Default Banner'}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      <div className="container relative z-[2]">
        <h1
          ref={titleRef}
          className="!text-[48px] !leading-[56px] md:!text-[120px] md:!leading-[132px] text-center flex flex-wrap justify-center text-white"
        >
        </h1>
      </div>
    </section>
  );
};

export default Banner;