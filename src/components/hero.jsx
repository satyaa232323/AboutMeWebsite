import React from 'react'
import { hero_content } from '../aboutMe/AboutMe'
export default function Hero(){
    return (
        <div className="py-7">
            <section className="">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid max-w-md grid-cols-1  mx-auto lg:grid-cols-10 gap-x-6 gap-y-8 lg:max-w-none mb-40">
                        <div className="self-center lg:col-span-4">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
                                Hey 👋 I am Muhammad Attala Aryasatya, You can Call me Satya.
                            </h1>
                            <p className="mt-5 text-base font-normal leading-7 text-gray-500 tracking-tighter">
                               {hero_content}
                            </p>
                            <div className="relative inline-flex mt-9 group">
                                <div
                                    className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                                </div>

                                <a href="#" title=""
                                    className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                    role="button">
                                    Read Exclusive Blog
                                </a>
                            </div>
                        </div>
                        <div className="self-end lg:col-span-5">
                            <img className="mx-auto border-0 rounded-2xl " 
                            src={'Me.png'} 
                            alt="my photo"
                            width={400}
                            height={400}/>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-black'>Hello</h2>
                    </div>
                </div>
            </section>
        </div>
    )

}


