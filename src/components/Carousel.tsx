"use client";

import React, { useState, useRef, useEffect } from 'react';
import CustomFooter from './Footer';
import CustomHeader from './Header';
import './Carousel.css'; 

// Local videos for the carousel
const videos = [
  { id: 1, url: "/1.mp4", title: "Whispers of Ipsum" },
  { id: 2, url: "/2.mp4", title: "Forest of Lorem Ipsum" },
  { id: 3, url: "/3.mp4", title: "Calm of the Lorem Ipsum" },
  { id: 4, url: "/4.mp4", title: "The Ipsum Tide" },
  { id: 5, url: "/5.mp4", title: "Echoes of Ipsum" },
  { id: 6, url: "/6.mp4", title: "Farmers of Ipsum" },
  { id: 7, url: "/7.mp4", title: "Winter of Lorem Ipsum" },
  { id: 8, url: "/8.mp4", title: "Waves of Lorem Ipsum" },
  { id: 9, url: "/9.mp4", title: "Animal of Ipsum" },
  { id: 10, url: "/10.mp4", title: "Flight of Ipsum" },
  { id: 11, url: "/11.mp4", title: "Diving of Ipsum" },
  { id: 12, url: "/12.mp4", title: "Peace of Lorem Ipsum" },
  { id: 13, url: "/13.mp4", title: "Hills of Lorem Ipsum" },
  { id: 14, url: "/14.mp4", title: "Lorem Ipsum in the Wilderness" },
  { id: 15, url: "/15.mp4", title: "Boat of Ipsum" }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // References to video elements
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]); // References to container elements
  const videosLength = videos.length;

  // Handle the autoplay and scrolling behavior**
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex % videosLength]; // Use modulo for looping
    const currentContainer = containerRefs.current[currentIndex % videosLength];

    // Autoplay the current video
    if (currentVideo && currentVideo.play) {
      currentVideo.play().catch((error) =>
        console.log("Autoplay prevented:", error)
      );
    }

    // Scroll the current video into view smoothly without affecting vertical scroll
    if (currentContainer) {
      currentContainer.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest' // Ensure only horizontal scrolling happens
      });
    }
  }, [currentIndex, videosLength]);

  // Handle next button click
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default button behavior
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videosLength); // Loop to the start when reaching the end
  };

  // Handle previous button click
  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default button behavior
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videosLength) % videosLength); // Loop back to the last video
  };

  // Pause all non-active videos
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && video.pause && index !== currentIndex % videosLength) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentIndex, videosLength]);

  return (
    <>
      <CustomHeader />

      <div className="carousel-wrapper">
        {/* Title and Arrows on the same line */}
        <div className="title-and-arrows-wrapper">
          <h2 className="title">A day in the life</h2>

          <div className="arrows-wrapper">
            <button className="arrow-button" onClick={handlePrev}>←</button>
            <button className="arrow-button" onClick={handleNext}>→</button>
          </div>
        </div>

        <div className="videos-container">
  {videos.map((video, index) => (
    <div
      className={`video-container ${currentIndex % videosLength === index ? 'active' : 'blurred'}`} 
      key={index} 
      ref={(el) => {
        containerRefs.current[index] = el;
      }}
    >
      <video
        ref={(el) => {
          videoRefs.current[index] = el;
        }}
        src={video.url}
        muted
        controls={currentIndex % videosLength === index} // Enable controls only for the active video
        style={{ pointerEvents: currentIndex % videosLength === index ? 'auto' : 'none' }} // Disable controls for blurred videos
      ></video>
      <p>{video.title}</p>
    </div>
  ))}
</div>
      </div>

      <CustomFooter />
    </>
  );
};

export default Carousel;