import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { projects } from '../../components/Projects';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from '../../components/WorkSliderBtns';



const Work = () => {

    const projectItems = useMemo(() => projects?.items ?? [], []);

    const normalizeProject = (item) => {
        const title = item?.title ?? item?.name ?? "";
        const liveUrl = item?.live ?? item?.liveDemo ?? "";
        const githubUrl = item?.github ?? "";

        const stackNames = Array.isArray(item?.stack)
            ? item.stack.map(s => (typeof s === 'string' ? s : s?.name)).filter(Boolean)
            : Array.isArray(item?.techStack)
                ? item.techStack.filter(Boolean)
                : [];

        const responsibilities = Array.isArray(item?.responsibilities) ? item.responsibilities : [];

        return {
            raw: item,
            num: item?.num ?? "",
            category: item?.category ?? "",
            title,
            description: item?.description ?? "",
            responsibilities,
            stackNames,
            thumb: item?.thumb,
            liveUrl,
            githubUrl,
        };
    };

    const [projectIndex, setProjectIndex] = useState(0);
    const current = normalizeProject(projectItems[projectIndex] ?? projectItems[0] ?? {});


    const handleSlideChange = (swiper) => {
        setProjectIndex(swiper.activeIndex);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className='min-h-[80vh] flex flex-col justify-center py-12'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col-reverse lg:flex-row lg:gap-[30px]'>

                    {/* details */}
                    <div className='w-full lg:w-[50%]  flex lg:justify-between '>

                        <div className='w-[95%] flex flex-col gap-[30px]  '>

                            {/* outline num */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {current.num}
                            </div>

                            {/* project category */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                {current.category} project
                            </h2>
                            <h3 className='text-accent text-xl'>{current.title}</h3>
                            <p className='text-white/60'>{current.description}</p>

                            {!!current.responsibilities.length && (
                                <ul className='list-disc pl-5 text-white/60 space-y-1'>
                                    {current.responsibilities.slice(0, 5).map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))}
                                </ul>
                            )}

                            {/* stack */}
                            <ul className='grid grid-cols-1 md:grid-cols-4  gap-2'>
                                {
                                    current.stackNames.map((name, index) => {
                                        return (
                                            <li key={index} className='text-sm text-accent'>
                                                {name}
                                                {/* remove the last comma */}
                                                {index !== current.stackNames.length - 1 && ","}
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            {/* border */}
                            <div className='border border-white/20'></div>

                            {/* button */}
                            <div className='flex items-center gap-4'>
                                {/* live project button */}
                                {current.liveUrl ? (
                                    <Link target='_blank' to={current.liveUrl}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                    {/* icon */}
                                                    <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                ) : null}

                                {/* Github project button */}
                                {current.githubUrl ? (
                                    <Link target='_blank' to={current.githubUrl}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                    {/* icon */}
                                                    <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github Repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                ) : null}
                            </div>
                        </div>

                    </div>


                    {/* thumbnail */}
                    <div className='w-full lg:w-[50%] h-full '>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='mb-12 lg:h-[520px]'
                            onSlideChange={handleSlideChange}
                        >
                            {
                                projectItems.map((item, index) => {
                                    const normalized = normalizeProject(item);
                                    return (
                                            <SwiperSlide key={normalized.num || index} className='w-full h-full'>
                                                <Link target='_blank' to={normalized.liveUrl || normalized.githubUrl || "#"} className='h-[460px] lg:h-[520px] relative group flex items-center justify-center bg-pink-50/80 cursor-pointer'>

                                                    {/* overlay */}
                                                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/20 z-10'></div>

                                                    {/* thumbnail */}
                                                    <div className='relative w-full h-full'>
                                                        <img
                                                            src={normalized.thumb}
                                                            className='object-cover'
                                                            alt=""
                                                        />
                                                    </div>
                                                </Link>
                                            </SwiperSlide>
                                    )
                                })
                            }
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none'
                                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[40px] flex justify-center items-center transition-all'
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;