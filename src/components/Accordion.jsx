import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa'; // Import the arrow icon
import { motion } from 'framer-motion'; // Import Framer Motion

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion border-b pb-4 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {items.map((item, index) => (
        <div key={index} className="border-b border-neutral-800">
          <button
            className="w-full flex justify-between items-center text-left p-4 text-white focus:outline-none"
            onClick={() => handleClick(index)}
          >
            {item.title}
            <div className="flex items-center">
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
         
            </div>
          </button>
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: activeIndex === index ? '100vh' : 0, opacity: activeIndex === index ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4 text-white">{item.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
