import Image from 'next/image';
import React from 'react';
import { FiArrowRight } from "react-icons/fi";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service || {}
    console.log(service);

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-md">
            <figure>
                <Image src={img} alt={title} width={420} height={100} />
            </figure>
            <div className="card-body">
                <h2 className=" card-title">{title}</h2>

                <div className=" card-actions text-primary justify-between items-center font-semibold">
                    <h2>Price: ${price}</h2>
                    <FiArrowRight />
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;