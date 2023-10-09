import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll event and show/hide the button
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling
    });
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full cursor-pointer transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="w-6 h-6" />
    </div>
  );
}

export default ScrollToTopButton;
