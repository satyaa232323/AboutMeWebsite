import React from 'react'
import { about_me } from '../aboutMe/AboutMe'
export default function About() {
    return (
        <div className='border-b border-neutral-900 pb-4 '>
            <h1 className="my-20 text-center text-4xl text-white">
                About <span className='text-slate-500'>Me</span>
            </h1>
            <div className='flex flex-wrap mx-auto py-20'>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className='flex items-center justify-center'>
                        <img 
                        className='rounded-2xl'
                        src={'Me2.jpg'}
                        width={550}
                        height={550}
                        alt="" 
                        srcset="" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className='flex items-center justify-center'>
                       <p className='my-2 text-base font-normal leading-7 text-gray-400 tracking-tighter'>{about_me}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

