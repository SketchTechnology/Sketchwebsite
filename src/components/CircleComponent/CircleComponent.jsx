import React, { useState, useEffect } from 'react';
import './CursorCircle.css'; // Import CSS file for styling

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);
  const [circleSize, setCircleSize] = useState(20); // Initial circle size
  const [circleColor, setCircleColor] = useState('rgba(0,0,0,0.4)'); // Initial circle color

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      setHoveredElement(tagName);
      // Check if hovered element is anchor tag or button
      if (tagName === 'a' || tagName === 'img'|| tagName === 'button' ||e.target.classList.contains('collapseBar')) {
        // Set larger circle size and change color to white
        setCircleSize(40); // You can adjust the size as needed
        setCircleColor('rgba(255,255,255,0.4)');
        // Change font color of hovered element to black
        
      } else {
        // Set default circle size and color
        setCircleSize(20);
        setCircleColor('rgba(0,0,0,0.4)');
      }
    };

    const handleMouseOut = (e) => {
      setHoveredElement(null);
      // Set default circle size and color when mouse leaves element
      setCircleSize(20);
      setCircleColor('black');
      // Restore default font color of hovered element
      
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      // Cleanup: Remove event listeners when component unmounts
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className={`cursor-circle ${hoveredElement ? 'hovered' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px`, width: `${circleSize}px`, height: `${circleSize}px`, backgroundColor: circleColor }}></div>
    </>
  );
};

export default CursorCircle;
