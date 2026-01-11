import React from 'react';
import { Button } from '../../components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '../../components/Social';
import Photo from '../../components/Photo';
import Stats from '../../components/Stats';
import Services from '../Services/Services';

const Home = () => {
    return (
        <section className='h-full'>
            <div className='container mx-auto h-full'>

                <div className='flex flex-col-reverse lg:flex-row items-center justify-between lg:pt-8 lg:pb-20'>

                    {/* text */}
                    <div className='text-center lg:text-left'>
                        <span className='text-xl'>Software Engineer</span>

                        <h1 className='h2 mb-6'>
                            Hello, I'm <br /> <span className='text-accent h1'>Sazedul Islam</span>
                        </h1>
                        <p className='max-w-[500px] leading-snug mb-9 text-white/80'><span className='font-bold text-white'>Backend Software Engineer</span> with 2+ years of experience specializing in <span className='front-blod text-white'>Node.js, NestJS, and TypeScript</span>. Experienced in building scalable REST APIs, microservices, real-time systems, and subscription-based platforms using <span className='front-bold text-white'>PostgreSQL, MongoDB, Redis, AWS, and Docker</span>. Passionate about clean architecture, performance, and reliable backend systems.</p>


                        {/* button */}
                        <div className='flex flex-col lg:flex-row items-center gap-8'>
                            <a href="/public/Sazedul Islam Backend Engineer.pdf" download >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="uppercase flex items-center gap-2"
                                >
                                    <span>Download CV</span>
                                    <FiDownload className='text-xl' />
                                </Button>
                            </a>

                            <div className='mb-8 lg:mb-0'>
                                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" ></Social>
                            </div>
                        </div>

                    </div>


                    {/* photo */}
                    <div className='mb-8 lg:mb-0'>
                        <Photo></Photo>

                    </div>
                </div>


                {/* stats */}
                <div>
                    <Stats></Stats>
                </div>

                {/* services */}
                {/* <Services></Services> */}
            </div>
        </section>
    );
};

export default Home;