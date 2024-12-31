import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { getServices } from '@/services/getServices';


const Services = async () => {
    const { services } = await getServices();

    return (
        <div className=' flex flex-col items-center text-center pb-16'>
            <div className=' space-y-6 w-2/3 text-center'>
                <p className=' text-primary'>Service</p>
                <h1 className=' text-5xl font-bold'>Our Service Area</h1>
                <p className=' text-slate-500'>The majority have suffered alteration in some form, by injected humour, or <br />randomised wordswhich don't look even slightly believable. </p>
            </div>

            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6'>
                {
                    services?.length > 0 &&
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <button className=' btn btn-outline btn-primary rounded-sm'>More Services</button>
        </div>
    );
};

export default Services;