import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Grocery from '../components/Grocery'
import Testimonial from '../components/Testimonial'
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'
import dbConnect, { convertDocToObj } from '../utils/connectMongo'
import Food from '../models/Food'
import { Foods } from '../typings'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton , NextButton } from '../components/Emblabutton'

interface Props {
  foods:[Foods]
}

const Home: NextPage<Props> = (props) => {

  const {foods} = props;
  const [index, setIndex] = useState(0);

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
    <div className="">
      <Head>
        <title>Foody</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>
      <About/>
    
    
      <div className='lg:flex lg:flex-col lg:items-center'>
          <div className='text-center lg:pt-[80px] lg:mb-[109px]'>
              <h3 className='font-poppins text-[14px] mt-[60px] mb-[21px] lg:text-[20px] text-[#171717]/60 font-medium lg:mb-[21px] lg:mt-0'>OUR MENU</h3>
              <h1 className='font-poppins mx-auto text-[#171717] text-[34px] leading-10 w-[300px] font-semibold mb-[80px] lg:text-[49px] lg:w-[400px] lg:leading-[63.21px] lg:mb-0'>Look at our Delicious Menu</h1>
          </div>
          <div className='lg:mb-[160px]'>
              <div className='w-[90%] mx-auto rounded-[40px] lg:mx-0 lg:w-[1200px] lg:h-[516px] lg:shadow-md bg-[#f8f8f8] lg:rounded-[20px] lg:flex'>
                  <div className='lg:py-[43px] lg:pl-[36px]'>
                      <div className='flex overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent lg:scrollbar-thumb-transparent lg:scrollbar-track-white lg:hover:scrollbar-thumb-black bg-black rounded-t-[40px] lg:rounded-none px-[40px] py-4 lg:bg-transparent lg:p-0 lg:block lg:w-[307px] lg:h-[430px] lg:overflow-y-scroll lg:overflow-x-hidden'>
                        
                        {foods.map((food) => (

                            <div key={food._id} id={foods.indexOf(food).toString()} className = 'mr-16 lg:mr-0 lg:space-x-0 lg:flex lg:my-[34px] lg:w-[80%] lg:py-2 lg:pl-1 lg:hover:bg-black lg:hover:rounded-[20px] lg:hover:text-[#fff] group transition-all duration-100 ease-in-out' onClick={() => {
                              setIndex(foods.indexOf(food));
                              // const docId = foods.indexOf(food).toString();
                              // const myDoc = document.getElementById(docId);
                              // myDoc.style.backgroundColor = 'red';
                              }}>
                              <img className='w-[40px] h-[40px] object-cover rounded-full cursor-pointer' src={food.img}/>
                              <p className='mt-2 mb-2 text-center text-white lg:m-0 lg:pl-[19px] font-lato lg:text-[18px] lg:text-[#171717] font-medium lg:my-[auto] cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out'>{food.name}</p>
                            </div>
                        ))}
                          
                      </div>
                  </div>
                  <div className='flex flex-col w-[100%] overflow-hidden' ref={emblaRef}>
                        <div className=' ml-[100px] lg:ml-[60px] flex lg:pr-[90px] lg:mt-[25px]'>

                            {foods[index].menu.map((item) => (
                                <div key={item._id} className='w-[279px] h-[309px] mt-[59px] mx-[10%] mb-[100px] text-center lg:text-left lg:mb-0 lg:w-[279px] lg:h-[309px] bg-white rounded-[20px] lg:mt-[53px] shadow-lg relative block flex-none lg:mx-10'>
                                  <img className='w-full h-[200px] lg:w-full lg:h-[200px] rounded-t-[20px] object-cover' src={item.img}/>
                                  <h2 className='font-lato font-bold text-[18px]  mt-[10px] lg:text-[18px] lg:ml-[20px] lg:mt-[10px]'>{item.name}</h2>
                                  <h2 className='font-lato font-extrabold mt-[7px] text-[17px] lg:text-[17px] lg:ml-[20px] lg:mt-[7px]'><span className='text-[10px] lg:text-[10px]'>$</span> {item.price} </h2>
                                  <p className='font-lato font-regular mt-[10px] text-[10px] text-[#ff6a26] lg:ml-[20px] lg:mt-[10px] underline cursor-pointer lg:w-[62px]'>Order Now</p>
                                </div>
                            ))}
                              
                        </div>

                        <div className='hidden lg:block mt-[30px] mb-[50px] lg:mb-0  text-right lg:mt-[70px] lg:pr-8'>
                            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                        </div>
                  </div>
              </div>
          </div>

      </div>

      <Grocery/>
      <Testimonial/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default Home

export async function getServerSideProps(){
  await dbConnect();
  const foods = await Food.find({}).lean();

  
  return {
    props: {
       foods : foods.map(convertDocToObj), 
    },
  };
}

