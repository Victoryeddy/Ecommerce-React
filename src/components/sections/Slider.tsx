import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Quisque mi urna, consequat et quam in, varius consequat lacus. In et nisi lobortis felis ornare semper. Mauris lacinia, tortor vitae suscipit euismod, enim nunc vehicula ante, eu pellentesque est ex ut dui.",
      author: "Dianne Russell",
      position: "CEO, Co-Founder",
      image: 'diana', 
      company: "XYZ Inc."
    },
  
    {
      id: 2,
      quote: "Another great testimonial quote would go here with similar length.",
      author: "John Doe",
      position: "CTO",
      image: 'diana', 
      company: "ABC Corp"
    },
    {
      id: 3,
      quote: "Another great testimonial quote would go here with similar length.",
      author: "John Doe",
      position: "CTO",
      image: 'diana', 
      company: "ABC Corp"
    },
    {
      id: 4,
      quote: "Another great testimonial quote would go here with similar length.",
      author: "John Doe",
      position: "CTO",
      image: 'diana', 
      company: "ABC Corp"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Testimonials</h2>
        
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          navigation={true}
          effect={'fade'}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className=" p-8 rounded-lg text-center">
                <blockquote className="text-lg italic text-gray-600 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-6">
                    <div className='flex justify-center mb-4'>

                    <img src={new URL(`/src/assets/${testimonial.image}.png`, import.meta.url).href} alt="" className='rounded-full'/>
                    </div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </p>
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