import React from 'react';
import { FaFigma, FaJs, FaLaravel, FaReact } from "react-icons/fa";

export default function MySkills() {
    return (
        <div className='border-b pb-24 mb-40'>
            <h1 className='my-20 text-center text-white text-4xl'>My Skills</h1>
            <div className='flex flex-wrap items-center justify-center gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaReact className='text-7xl text-cyan-400' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaLaravel className='text-7xl text-orange-600' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaFigma className='text-7xl text-slate-100' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJs className='text-7xl text-yellow-400' />
                </div>
            </div>
        </div>
    );
}
