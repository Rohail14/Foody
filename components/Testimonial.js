import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton , NextButton } from '../components/Emblabutton'

function Testimonial() {

const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

const [emblaRef, embla] = useEmblaCarousel({

      align: "start",
      loop: false,
      skipSnaps: false,
      // Allow the carousel to skip scroll snaps if
      // it's dragged vigorously.
      inViewThreshold: 0.7,
      // percentage of a slide that need's to be visible
      // inorder to be considered in view, 0.7 is 70%.
  });
  
    
const onSelect = useCallback(() => {
      if (!embla) return;
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);


const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);


useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div className='mt-20 md:mt-[120px] lg:mt-[165px]'>
        <div className='bg-[#f8f8f8] w-[90%] md:w-[80%] mx-auto rounded-[20px] lg:flex lg:w-full lg:bg-white'>
            <div className='text-center lg:text-left mx-auto lg:m-0 lg:rounded-[20px] lg:w-[982px] lg:h-[500px] lg:pl-[116px] w-[400px] lg:bg-[#f8f8f8]'>
                <h1 className='font-poppins font-semibold text-[34px] lg:text-[45px] text-[#171717] pt-[40px] lg:mb-[62px]'>
                    What Our Users Say?
                </h1>
                <p className='font-lato font-medium text-[16px] lg:text-[18px] text-[#171717]/90 lg:w-[475px] lg:leading-[35.89px] lg:ml-[5px] mt-[30px]'>
                    We provide you the solution for your every food problem. Get the best quality food at the minimal amount of time.
                    
                </p>
                <p className='font-lato font-medium text-[16px] text-[#171717] lg:text-[18px] mt-[20px] lg:w-[475px] lg:ml-[5px]'>You are too lazy to cook. Oh wait! Foody is here.</p>
                <div className='flex mt-[50px] lg:mt-[76px] lg:w-[475px] justify-between'>
                    <div>
                        <h1 className='text-center text-[#FF6A26] font-lato font-bold text-[28px]'>4.7k +</h1>
                        <p className='font-lato text-[14px] text-[#171717]/90'>Happy Customers</p>
                    </div>
                    <div>
                        <h1 className='text-center text-[#FF6A26] font-lato font-bold text-[28px]'>40+</h1>
                        <p className='font-lato text-[14px] text-[#171717]/90'>Food Menu</p>
                    </div>
                </div>
            </div>
            <div className='mt-20 ml-[40px] md:ml-[90px] pb-8 lg:overflow-hidden  lg:ml-[-180px]' ref={emblaRef}>
                <div className=' w-[100%] pb-10 flex'>
                    <div className='bg-black w-[260px] h-[280px] lg:w-[300px] lg:h-[300px] rounded-[15px] p-6 relative block flex-none mx-10 '>
                            <div className='flex'>
                                <img className='rounded-full w-[55px] h-[55px] object-cover mr-4' src='user-1.jpg'/>
                                <img className='mr-2' src='star.svg'/>
                                <p className='text-[#f8f8f8] my-auto'>4.7</p>
                            </div>
                            <h1 className='text-[#f8f8f8] mt-[22px] font-poppins'>Pedro Gustavo</h1>
                            <p className='text-[#f8f8f8] font-lato font-medium text-[14px] mt-[39px]'><em>“ This is the best food service I have ever used. Their delivery is on time and food is just awesome. I recommed everyone to use Foody. YUMM!!”</em></p>
                    </div>
                    <div className='bg-black w-[260px] h-[280px] lg:w-[300px] lg:h-[300px] rounded-[15px] p-6 relative block flex-none mx-10'>
                            <div className='flex'>
                                <img className='rounded-full w-[55px] h-[55px] object-cover mr-4' src='user-2.jpg'/>
                                <img className='mr-2' src='star.svg'/>
                                <p className='text-[#f8f8f8] my-auto'>4.9</p>
                            </div>
                            <h1 className='text-[#f8f8f8] mt-[22px] font-poppins'>Emire Chan</h1>
                            <p className='text-[#f8f8f8] font-lato font-medium text-[14px] mt-[39px]'><em>“ I just love this app!...I order almost on every weekend and their food just awesome. Me and my wife are in love with their foods.”</em></p>
                    </div>
                </div>
                
                <div className='hidden lg:block lg:mb-0  text-right lg:mt-[20px] lg:pr-8'>
                            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial