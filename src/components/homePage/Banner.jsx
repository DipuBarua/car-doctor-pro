import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">

            {
                banners.map((banner, index) => (<div
                    key={banner.index}
                    id={`slide${index + 1}`}//index=0,1,2,3
                    className="carousel-item relative w-full bg-cover bg-no-repeat bg-top h-[90vh]"
                    style={{
                        backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.32)), url(/assets/images/banner/${index + 1}.jpg)`,
                        // backgroundAttachment: "fixed",
                        // backgroundPosition: 'center',
                    }}>

                    <div className=' w-full h-full items-center flex pl-32'>
                        <div className=' md:w-1/3 text-white space-y-6'>
                            <h1 className=' text-5xl font-bold'>{banner.title}</h1>
                            <p>{banner.description}</p>
                            <button className=' btn btn-primary mr-6 rounded-sm'>Discover More</button>
                            <button className=' btn btn-primary btn-outline rounded-sm'>Latest Project</button>
                        </div>
                    </div>

                    <div className="absolute flex bottom-12 right-12 gap-4">
                        <a href={`#${banner.previous}`} className="btn btn-circle">❮</a>
                        <a href={`#${banner.next}`} className="btn btn-circle">❯</a>
                    </div>

                </div>))
            }

        </div>
    );
};

const banners = [
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "slide2",
        previous: "slide6"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "slide3",
        previous: "slide1"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "slide4",
        previous: "slide2"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "slide5",
        previous: "slide3"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "slide6",
        previous: "slide4"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "slide1",
        previous: "slide5"
    },
]

export default Banner;