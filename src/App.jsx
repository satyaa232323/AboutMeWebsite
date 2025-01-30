import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/About'
import MySkills from './components/MySkills'
import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      title: "Personal Information",
      content: "My name is Muhammad Attala Atryasatya, and I am a UI/UX and web developer. I have a strong passion for continuous learning and self-improvement."
    },
    {
      title: "Education & Background",
      content: "I school in SMK TELKOM PURWOKERTO. Throughout my academic journey, I have developed expertise in web dev."
    },
    {
      title: "Professional Experience",
      content: "In early 2025, I interned at Export Expert Canberra, which enhanced my skills. I am always eager to take on new challenges."
    },
    {
      title: "Hobbies & Interests",
      content: "In my free time, I enjoy play some games and sometimes i watching a movies. These activities help me maintain a well-balanced and fulfilling lifestyle."
    },
    {
      title: "Skills & Expertise",
      content: "I possess strong skills in programming languages & design tools. My expertise allows me to contribute effectively in various professional settings."
    },
    {
      title: "Future Goals",
      content: "I aspire to advance in my career, develop new skills and contribute to meaningful projects. I believe that persistence and dedication are key to achieving success."
    }
  ];

  return (
    <React.StrictMode>
      <div className='overflow-x-hidden'>
        <div className="absolute top-0 z-[30] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className='px-4 mx-auto'>
            <Navbar />
            <div>
              <Hero />
            </div>
            <div>
              <About />
            </div>
            <div>
              <MySkills />
            </div>
            <div className=''>
              <Accordion items={items} />
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>

  )
}

export default App
