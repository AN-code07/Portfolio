"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const clientReviews = [
  {
    id: 1,
    name: "John Smith",
    position: "Project Manager",
    company: "Tech Solutions Inc.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    review:
      "The team delivered our website ahead of schedule with clean code and an amazing design. Their attention to detail made the process smooth and stress-free.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CEO",
    company: "Digital Ventures",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    review:
      "We got a flawless mobile app with smooth performance and intuitive design that exceeded our expectations. The communication was professional and timely.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Creative Director",
    company: "Design Studio",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    review:
      "Their design approach completely transformed our app's interface into something modern, elegant, and functional. Collaboration was seamless.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "CTO",
    company: "StartUp Labs",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    review:
      "They provided quick turnaround times and managed to exceed expectations in every sprint we worked on together. The code quality was exceptional.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#04071D] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#CBACF9] text-sm font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What clients <span className="gradient-text">say about me</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Don&apos;t just take my word for it — here&apos;s what the people I&apos;ve worked with have to say.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Swiper
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={1}
          spaceBetween={24}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full pb-16"
        >
          {clientReviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-[#0C0E23] p-8 rounded-2xl border border-[#141b4e] h-full min-h-[340px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#CBACF9]/10 hover:border-[#CBACF9]/20 group relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <FaQuoteLeft className="text-3xl text-[#CBACF9]/10 group-hover:text-[#CBACF9]/20 transition-colors duration-300" />
                </div>

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    &ldquo;{review.review}&rdquo;
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 mt-auto pt-5 border-t border-[#141b4e]">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#CBACF9]/30 flex-shrink-0 group-hover:border-[#CBACF9]/60 transition-colors duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {review.position},{" "}
                      <span className="text-[#CBACF9]">{review.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
