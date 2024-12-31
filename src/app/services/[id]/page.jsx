import { getServiceDetails } from '@/services/getServices';
import Image from 'next/image';
import React from 'react';

const serviceDetailsPage = async ({ params }) => {
    const data = await getServiceDetails(params.id);
    const { title, img, price, description, facility } = data.service;
    console.log(data);
    return (
        <div>
            <div className=' w-full h-1/2'>
                <Image
                    src={img}
                    alt={title}
                    width={1920}
                    height={1080}
                    className=' rounded-xl object-cover'
                ></Image>
            </div>

            <div className='grid md:grid-cols-12 gap-2'>
                <div className='md:col-span-9 space-y-2'>

                    <Image className=' rounded-xl' src={img} alt={title} width={769} height={560} />

                    <h1 className=' text-2xl font-bold text-black'>{title}</h1>
                    <h1 className=' text-gray-400'>{description.slice(0, 300)}</h1>

                    <div className=' grid grid-cols-2 gap-1'>
                        {
                            facility.map((item, index) => <div key={index}>
                                <div className="card bg-gray-300 border-t-2 border-primary shadow-md">
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
                    side bar
                </div>
            </div>


        </div>
    );
};

export default serviceDetailsPage;