import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Testimonial1, Testimonial2, Testimonial3, Testimonial4 } from '../../assets/images';
import {SmallTitle,BigTitle,SliderItem} from '../../components'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center">
                <SmallTitle title="Testimonial"/>
                <BigTitle title="Our Clients Say!"/>
            </div>
            <Swiper
            modules={[Autoplay, Pagination]}
            
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },

                767: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }} >
              <SwiperSlide>
                <SliderItem name="Client Name" 
                job="Software Engineer" imageName={Testimonial1}
                comment="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."/>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem name="Client Name" 
                job="Web Developer" imageName={Testimonial2}
                comment="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."/>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem name="Client Name" 
                job="Flutter Developer" imageName={Testimonial3}
                comment="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."/>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem name="Client Name" 
                job="ReactJS Developer" imageName={Testimonial4}
                comment="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."/>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem name="Client Name" 
                job="NodeJS Developer" imageName={Testimonial3}
                comment="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."/>
              </SwiperSlide>
              <SwiperSlide>
              <SliderItem name="Client Name" 
                job="FullStack Developer" imageName={Testimonial2}
                comment="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."/>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem name="Client Name" 
                job="ReactJS Developer" imageName={Testimonial4}
                comment="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."/>
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem name="Client Name" 
                job="Software Engineer" imageName={Testimonial1}
                comment="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."/>
              </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default Testimonials