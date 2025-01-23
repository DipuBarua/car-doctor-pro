'use client'
import { getServiceDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// export const metadata = {
//     title: "Checkout",
//     description: 'Service Checkout page'
// }

const CheckoutPage = ({ params }) => {

    const { data } = useSession();
    const [service, setService] = useState({});
    const { _id, title, img, price, description, facility } = service || {};


    const loadService = async () => {
        const details = await getServiceDetails(params.id);
        setService(details.service)
    }

    const handleCheckout = async (e) => {
        e.preventDefault();
        const newBooking = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            date: e.target.date.value,
            serviceTitle: title,
            serviceId: _id,
            price: price
        }
        console.log(newBooking);

        const res = await fetch("http://localhost:3000/checkout/api/newBooking", {
            method: "POST",
            body: JSON.stringify(newBooking),
            headers: {
                'content-type': "application/json",
            }
        })
        console.log(res);
    }

    useEffect(() => {
        loadService();
    }, [params])

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
                <form onSubmit={handleCheckout} >
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            name='title'
                            placeholder='Service Title'
                            defaultValue={title}
                            disabled
                            className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl bg-white'
                        />
                    </div>
                    <div className='flex justify-around gap-4 w-full'>
                        <div className=' w-full space-y-2'>
                            <div>
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='Service Title'
                                    defaultValue={data?.user?.name}
                                    className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl bg-white'
                                />
                            </div>

                            <div>
                                <label>Your Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    defaultValue={data?.user?.email}
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

                        <div className=' w-full space-y-2'>
                            <div>
                                <label>Price($)</label>
                                <input
                                    readOnly
                                    type="text"
                                    name='price'
                                    defaultValue={price}
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
                                    defaultValue={new Date().getDate()}
                                    className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl bg-white'
                                />
                            </div>

                        </div>
                    </div>


                    <button type='submit' className='btn btn-sm hover:bg-primary my-4 w-1/3 mx-auto'>Order Confirm</button>
                </form>
            </div>

        </div>
    );
};

export default CheckoutPage;