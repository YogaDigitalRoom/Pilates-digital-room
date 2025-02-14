'use client';

import Image from 'next/image';

const Banner = ({ title, imageSrc = '/yoga.jpg' }) => {
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

      {/* Title */}
      <div className="container relative z-[2]">
        <h1 className="!text-[48px] !leading-[56px] md:!text-[120px] md:!leading-[132px] text-center flex flex-col items-center justify-center text-white">
          {title || 'Default Title'}
        </h1>
      </div>
    </section>
  );
};

export default Banner;