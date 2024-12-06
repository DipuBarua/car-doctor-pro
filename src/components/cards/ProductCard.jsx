import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
    const { index, product_id, name, price, rating, status, image } = product || {};

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-5 pt-5">
                <Image src={`/assets/images/products/${index}.jpg`} alt={product_id} width={210} height={160}></Image>
            </figure>
            <div className="card-body items-center text-center">
                <h1 className=' font-bold italic'>Rating: {rating}*</h1>
                <h2 className="card-title">{name}</h2>
                <p className=' text-primary'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;