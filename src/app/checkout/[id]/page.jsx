import { getServiceDetails } from '@/services/getServices';
import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: "Checkout",
    description: 'Service Checkout page'
}

const CheckoutPage = async ({ params }) => {

    const data = await getServiceDetails(params.id);
    const { title, img, price, description, facility } = data.service;

    const handleCheckout = (e) => {
        e.preventDefault();
        const title = e.target.name.value;
    }

    return (
        <div>
            <div className='mb-12'>
                <Image
                    src={img}
                    alt={title}
                    width={1920}
                    height={1080}
                    style={{ height: "60vh" }}
                    className=' rounded-xl object-cover'
                ></Image>

                <div className='text-5xl text-white font-black  absolute z-10 top-1/2 left-32'>
                    <h1>CheckOut </h1>
                </div>
            </div>

            <div className=' bg-gray-300 p-12 mb-12'>
                <form onClick={handleCheckout} >
                    <div className='flex justify-between gap-4'>
                        <div>
                            <div>
                                <label>Title</label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='Service Title'
                                    className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl bg-white'
                                />
                            </div>

                            <div>
                                <label>Your Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl bg-white'
                                />
                            </div>

                            <div>
                                <label>Your Address</label>
                                <input
                                    type="text"
                                    name='address'
                                    placeholder='Your Current Address'
                                    className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl bg-white'
                                />
                            </div>

                        </div>

                        <div>
                            <div>
                                <label>Price</label>
                                <input
                                    disabled
                                    type="text"
                                    name='price'
                                    placeholder='Service Price'
                                    className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl bg-white'
                                />
                            </div>

                            <div>
                                <label>Your Phone</label>
                                <input
                                    type="text"
                                    name='phone'
                                    placeholder='Phone Number'
                                    className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl bg-white'
                                />
                            </div>

                            <div>
                                <label>Date</label>
                                <input
                                    type="date"
                                    name='date'
                                    placeholder={''}
                                    className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl bg-white'
                                />
                            </div>

                        </div>
                    </div>


                    <button type='submit' className='btn btn-sm w-full'>CheckOut</button>
                </form>
            </div>

        </div>
    );
};

export default CheckoutPage;