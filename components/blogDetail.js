'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Use new import for Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BlogPostClient({ blog }) {
  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500 text-center">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <article className="">
        <h1 className=" mb-4 text-white">
          {blog.title || 'Untitled Blog Post'}
        </h1>
        {blog.date && (
          <p className="text-white/80 mb-6">{blog.date}</p>
        )}

        {blog.description && (
          <p className="text-white/80 mb-6">{blog.description}</p>
        )}

        <section>
          {blog.content &&
            blog.content.map((item, index) => (
              <div key={index} className="mb-8">
                {item.heading && (
                  <h2 className=" text-white mb-4">
                    {item.heading}
                  </h2>
                )}

                {item.image && item.image.length > 0 && (
                  <Swiper
                    modules={[Navigation, Pagination]} // Pass modules directly
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="mb-4"
                  >
                    {item.image.map((image, idx) => (
                       <SwiperSlide key={idx}>
                       <Image
                         src={`/${image}`}
                         alt={item.heading || 'Slide Image'}
                         width={800}
                         height={400}
                         className="rounded-lg object-cover w-full h-auto"
                       />
                     </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                {item.subText && (
                  <p className="italic text-white mb-2">{item.subText}</p>
                )}

                {item.text && <p className="text-white">{item.text}</p>}
              </div>
            ))}
        </section>
      </article>
    </div>
  );
}
