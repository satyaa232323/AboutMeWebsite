import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navbar from './components/navbar'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
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

        </div>
      </div>

    </div>
  )
}

export default App
