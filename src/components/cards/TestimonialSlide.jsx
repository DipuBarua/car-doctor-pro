'use client'
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { testimonials } from '@/lib/testimonials';
import Image from 'next/image';


const TestimonialSlide = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={15}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >

            {
                testimonials.map((item, index) => <SwiperSlide key={index}>
                    <div className="card bg-slate-200 rounded-none shadow-xl">
                        <div className="card-body">
                            <div className=' flex'>

                                <div className="avatar ">
                                    <div className="w-24 rounded-full">
                                        <Image src={item.image} alt={item.customerName} width={24} height={24}></Image>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="card-title">{item.customerName}</h2>
                                    <h2 className=' card-bordered text-slate-500'>{item.designation}</h2>
                                </div>

                            </div>

                            <p>{item.review}</p>
                            <div className="card-actions justify-start text-primary">
                                <strong>{item.rating}*</strong>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                )
            }


        </Swiper>
    );
};

export default TestimonialSlide;