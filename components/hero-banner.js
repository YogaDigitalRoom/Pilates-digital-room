'use client';

import { useEffect } from 'react';
import { animate } from 'motion';

const HeroBanner = () => {
  useEffect(() => {
    // Animation for h1 spans
    const spans = document.querySelectorAll('.hero-title span');

    spans.forEach((span, index) => {
      const direction = index % 2 === 0 ? '-80px' : '80px'; // Odd: left, Even: right
      animate(
        span,
        { opacity: [0, 1], transform: [`translateX(${direction})`, 'translateX(0)'] },
        { duration: 0.8, delay: index * 0.4 }
      );
    });

    const words = ['pilates', 'respiracion', 'core funcional', 'flexibilidad', 'movilidad', 'fuerza'];
    const h2 = document.querySelector('.typewriter');
    let currentIndex = 0;

    const typeWord = (word) => {
      return new Promise((resolve) => {
        let typedWord = '';
        let i = 0;

        // Typing effect
        const typing = setInterval(() => {
          typedWord += word[i];
          h2.textContent = typedWord;
          i++;

          if (i === word.length) {
            clearInterval(typing);

            // Pause before deleting
            setTimeout(() => resolve(), 1000);
          }
        }, 100);
      });
    };

    const deleteWord = (word) => {
      return new Promise((resolve) => {
        let i = word.length;

        // Deleting effect
        const deleting = setInterval(() => {
          h2.textContent = word.slice(0, i - 1);
          i--;

          if (i === 0) {
            clearInterval(deleting);
            resolve();
          }
        }, 50);
      });
    };

    const cycleWords = async () => {
      while (true) {
        const word = words[currentIndex];
        await typeWord(word);
        await deleteWord(word);
        currentIndex = (currentIndex + 1) % words.length;
      }
    };

    // Start the h2 animation after h1 completes
    setTimeout(() => {
      cycleWords();
    }, spans.length * 0.8 * 1000 + 400); // Total duration of h1 animation
  }, []);

  return (
    <section className="relative py-20">
      <div className="absolute z-[1] top-0 left-0 h-full w-full bg-black/60"></div>
      <div className="absolute top-0 left-0 h-full w-full flex">
        <video
          className="w-full h-full object-cover"
          src="/hero-banner.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
      <div className="container relative z-[2]">
        <h1 className="!text-[48px] !leading-[56px] md:!text-[120px] md:!leading-[132px] text-center flex flex-col items-center justify-center hero-title">
          <span>pilates</span>
          <span>digital</span>
          <span>room</span>
        </h1>
        <h2 className="h-10 typewriter text-center"></h2>
      </div>
    </section>
  );
};

export default HeroBanner;
