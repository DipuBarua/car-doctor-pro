import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from "react-icons/fi";

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service || {}
    // console.log(service);

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-md">
            <figure>
                <Image src={img} alt={title} width={420} height={100} />
            </figure>
            <div className="card-body justify-items-end">
                <h2 className=" card-title">{title}</h2>

                <div className=" card-actions text-primary justify-between items-center font-semibold">
                    <h2>Price: ${price}</h2>

                    <Link href={`/services/${_id}`}>
                        <FiArrowRight size={20} />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;