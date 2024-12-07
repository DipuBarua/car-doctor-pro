import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product, count }) => {
    const { product_id, name, price, rating, status, image } = product || {};

    return (
        <div className="card bg-base-100 w-96 shadow-xl p-5 rounded-none">
            <figure className="p-4 bg-slate-100 rounded-xl">
                <Image src={`/assets/images/products/${count}.png`} alt={name} width={120} height={80}></Image>
            </figure>
            <div className="card-body items-center text-center p-0">
                <h1 className=' font-bold italic text-primary'>Rating: {rating}*</h1>
                <h2 className="card-title">{name}</h2>
                <p className=' text-primary font-bold'>${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;