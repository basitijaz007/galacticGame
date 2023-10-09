import React, { useEffect } from "react";

const Circle = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
          const circle = document.querySelector('.circle');
          if (circle) {
            const { clientX, clientY } = event;
            circle.style.transform = `translate(${clientX}px, ${clientY}px)`;
          }
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          // Clean up the event listener when the component unmounts
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
  return (
    <>
      <div className="circle transition-all duration-1000 ease-in absolute left-0 w-[10px] h-[10px] bg-black rounded-full z-50"></div>
    </>
  );
};

export default Circle;
