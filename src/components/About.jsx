import React from 'react';
import { about_me } from '../aboutMe/AboutMe';
import { motion } from 'framer-motion'; // Import Framer Motion

export default function About() {
    return (
        <div className='border-b pb-4 mb-20'>
            <h1 className="my-20 text-center text-4xl text-white">
                About <span className='text-slate-500'>Me</span>
            </h1>
            <div className='flex flex-wrap mx-auto py-20 px-4 sm:px-6 lg:px-8 max-w-7xl'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className='flex items-center justify-center'>
                        <img
                            className='rounded-2xl'
                            src={'Me2.jpg'}
                            width={550}
                            height={550}
                            alt=""
                            srcSet="" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className='flex items-center justify-center'>
                        <p className='my-2 text-base font-normal leading-7 text-gray-400 tracking-tighter'>{about_me}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

