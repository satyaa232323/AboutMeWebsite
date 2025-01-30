import React from 'react';
import { hero_content } from '../aboutMe/AboutMe';
import { delay, motion } from 'framer-motion'; // Import Framer Motion


const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay},
    }
});
export default function Hero() {
  return (
    <div className="py-7">
      <section className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-10 gap-x-6 gap-y-8 lg:max-w-none mb-40">
            <motion.div
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className="self-center lg:col-span-4"
            >
              <h1 className="text-3xl font-thin text-white sm:text-4xl xl:text-5xl">
                Hey 👋 I am Muhammad Attala Aryasatya, You can Call me Satya.
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500 tracking-tighter">
                {hero_content}
              </p>
              <div className="relative inline-flex mt-9 group">
                <div
                  className="absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                </div>
               
              </div>
            </motion.div>
            <motion.div
              initial={{x: 100, opacity: 0}}
              animate={{ x: 0, opacity:1}}
              transition={{ duration: 1, delay: 1.2}}
              className="self-end lg:col-span-5"
            >
              <img className="mx-auto border-0 rounded-2xl" 
                src={'Me.png'} 
                alt="my photo"
                width={400}
                height={400}/>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


