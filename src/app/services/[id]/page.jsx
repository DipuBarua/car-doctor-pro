import { getServiceDetails, getServices } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Service Details",
    description: 'Service details page'
}

const serviceDetailsPage = async ({ params }) => {
    const data = await getServiceDetails(params.id);
    const { _id, title, img, price, description, facility } = data.service;

    const { services } = await getServices();

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
                    <h1>Service Details</h1>
                </div>
            </div>

            <div className='grid md:grid-cols-12 gap-4 mb-12'>
                <div className='md:col-span-9 space-y-4'>

                    <Image className=' rounded-xl object-cover' src={img} alt={title} width={1920} height={1080} style={{ height: '70vh' }} />

                    <h1 className=' pt-4 text-3xl font-bold text-black'>{title}</h1>
                    <h1 className=' text-gray-400'>{description.slice(0, 300)}</h1>

                    <div className=' grid grid-cols-2 gap-4'>
                        {
                            facility.map((item, index) => <div key={index}>
                                <div className="card bg-red-50 border-t-2 border-primary shadow-md">
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p className=' text-gray-400'>{item.details}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>

                    <h1 className=' text-gray-400'>{description.slice(300)}</h1>

                </div>

                <div className='md:col-span-3'>
                    <div className=' p-4 bg-gray-200 space-y-2 rounded-t-md'>
                        <h1 className=' text-xl font-bold'>Services</h1>
                        {
                            services.map(item => <div key={item._id} className='w-full rounded-md px-2 hover:bg-red-200 text-sm font-bold bg-slate-100 py-2'>
                                <Link href={`/services/${item._id}`}>{item.title}</Link>
                            </div>)
                        }
                    </div>

                    <div>
                        <Image
                            src={img}
                            alt={title}
                            width={569}
                            height={120}
                            className=' object-contain px-5 py-12 bg-red-100 rounded-b-md'
                        ></Image>

                        <h1 className='px-2 py-4 text-xl font-semibold'>Price:
                            <span className=' text-red-400'> ${price}</span>
                        </h1>

                        <Link href={`/checkout/${_id}`}>
                            <button className=' btn w-full rounded-md text-white bg-red-500 hover:bg-red-300'>Proceed Checkout</button>
                        </Link>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default serviceDetailsPage;