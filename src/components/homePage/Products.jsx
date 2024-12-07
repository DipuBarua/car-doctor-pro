import React from 'react';
import ProductCard from '../cards/ProductCard';
import { products } from '@/lib/products';

const Products = () => {
    return (
        <div className='py-16'>
            <div className=' flex items-center justify-center'>
                <div className=' space-y-6 w-2/3 text-center'>
                    <p className=' text-primary'>Popular Products</p>
                    <h1 className=' text-5xl font-bold'>Browse Our Products</h1>
                    <p className=' text-slate-500'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                </div>
            </div>

            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map((product, index) => <ProductCard
                        key={index}
                        product={product}
                        count={index + 1}
                    ></ProductCard>)
                }
            </div>

        </div>
    );
};

export default Products;