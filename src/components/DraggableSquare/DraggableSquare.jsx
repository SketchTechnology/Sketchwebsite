import React, { useState, useEffect } from 'react';
import './DraggableSquare.css';

const DraggableSquare = () => {
  const [positions, setPositions] = useState([
    { x: 0, y: -100 },
    { x: 0, y: -200 }
  ]);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    handleBoxResize();
    window.addEventListener('resize', handleBoxResize);
    // Animate the squares to their final positions after a short delay
    const animationTimeout = setTimeout(() => {
      setPositions([
        { x: 0, y: 0 },
        { x: 0, y: 100 }
      ]);
    }, 500);
    return () => {
      window.removeEventListener('resize', handleBoxResize);
      clearTimeout(animationTimeout);
    };
  }, []);

  const handleBoxResize = () => {
    const box = document.getElementById('box');
    setBoxSize({
      width: box.clientWidth,
      height: box.clientHeight
    });
  };

  const handleMouseDown = (index, event) => {
    event.preventDefault();
    setIsDragging(true);
    setActiveIndex(index);
    const { offsetX, offsetY } = event.nativeEvent;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setActiveIndex(null);
  };

  const handleMouseMove = (event) => {
    if (isDragging && activeIndex !== null) {
      const updatedPositions = [...positions];
      updatedPositions[activeIndex] = {
        x: event.clientX - boxSize.width / 2 - offset.x,
        y: event.clientY - boxSize.height / 2 - offset.y
      };
      setPositions(updatedPositions);
    }
  };

  return (
    <div
      className="box-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div id="box" className="box" onClick={handleBoxResize}>
        {positions.map((position, index) => (
          <div
            key={index}
            className="square"
            style={{ top: position.y, left: position.x }}
            onMouseDown={(event) => handleMouseDown(index, event)}
          >
            hello
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraggableSquare;
