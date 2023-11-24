import React, { useRef, useEffect, useState } from 'react';

const ImageMerger = ({ imgSrc, frame }) => {
  const canvasRef = useRef(null);
  const [image1Pos, setImage1Pos] = useState({ x: 0, y: 0 });
  const [image2Pos, setImage2Pos] = useState({ x: 0, y: 0 });

  const image1 = new Image();
  const image2 = new Image();

  image1.src = imgSrc;
  image2.src = frame;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Wait for both images to load
    Promise.all([image1, image2].map(img => new Promise(resolve => img.onload = resolve)))
      .then(() => {
        // Set canvas size to match the images
        canvas.width = Math.max(image1.width, image2.width);
        canvas.height = Math.max(image1.height, image2.height);

        // Draw images onto the canvas at their respective positions
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image1, image1Pos.x, image1Pos.y);
        context.drawImage(image2, image2Pos.x, image2Pos.y);
      });
  }, [image1, image2, image1Pos, image2Pos]);

  const handleImageDoubleClick = (e) => {
    const mouseX = e.clientX - canvasRef.current.getBoundingClientRect().left;
    const mouseY = e.clientY - canvasRef.current.getBoundingClientRect().top;

    // Check if the mouse is within the bounds of the image1
    if (
      mouseX >= image1Pos.x &&
      mouseX <= image1Pos.x + image1.width &&
      mouseY >= image1Pos.y &&
      mouseY <= image1Pos.y + image1.height
    ) {
      setImage1Pos({
        x: mouseX - image1.width / 2,
        y: mouseY - image1.height / 2,
      });
    }

    // Check if the mouse is within the bounds of the image2
    if (
      mouseX >= image2Pos.x &&
      mouseX <= image2Pos.x + image2.width &&
      mouseY >= image2Pos.y &&
      mouseY <= image2Pos.y + image2.height
    ) {
      setImage2Pos({
        x: mouseX - image2.width / 2,
        y: mouseY - image2.height / 2,
      });
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        onDoubleClick={handleImageDoubleClick}
        style={{ border: '1px solid #000' }}
      />
      
    </>
  );
};

export default ImageMerger;
