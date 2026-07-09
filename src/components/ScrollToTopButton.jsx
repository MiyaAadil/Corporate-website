import React, { useEffect, useState } from 'react'
import { ChevronUp  } from 'lucide-react';

const ScrollToTopButton = () => {
    const [showButton, setShowbutton] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            setShowbutton(window.scrollY > 300)
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


  return (
    <div>
      <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 bg-white border border-gray-300 p-3 rounded-full shadow-lg hover:bg-gray-300 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer dark:bg-gray-200 dark:text-black ${
                showButton
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5 pointer-events-none"
            }`}
            >
            <ChevronUp  size={22} />
      </button>
    </div>
  )
}

export default ScrollToTopButton
