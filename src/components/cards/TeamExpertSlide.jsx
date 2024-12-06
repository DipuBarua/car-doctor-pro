'use client'
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { team } from '@/lib/team';
import Image from 'next/image';
import { FaLinkedin, FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";


const TeamExpertSlide = () => {

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                team.map((expert, index) => <SwiperSlide key={expert.engineer_id}>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-2 pt-2">
                            <Image src={`/assets/images/team/${index + 1}.jpg`} alt={expert.engineer_id} width={210} height={250}></Image>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{expert.name}</h2>
                            <p>{expert.title}</p>
                        </div>

                        <div className=' flex justify-center items-center gap-2 pb-3'>
                            <FaSquareFacebook />
                            <FaSquareXTwitter />
                            <FaLinkedin />
                            <FaSquareInstagram />
                        </div>

                    </div>
                </SwiperSlide>)
            }
        </Swiper>

    );
};

export default TeamExpertSlide;