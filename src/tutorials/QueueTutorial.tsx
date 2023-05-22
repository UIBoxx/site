import "../CSS/tutorial.css";
import { Helmet } from "react-helmet";


import React, { useRef, useState } from 'react';

function QueueTutorial() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [itemCount, setItemCount] = useState(0);
  const [popping, setPopping] = useState(false);

  function enqueueItem() {
    const item = document.createElement('div');
    item.className = 'queue-item';
    item.innerText = (itemCount + 1).toString();

    if (containerRef.current) {
      containerRef.current.appendChild(item);
      setItemCount((prevCount) => prevCount + 1);

      // Trigger reflow to ensure the animation starts
      item.getBoundingClientRect();
      item.style.transform = 'translateX(0)';
    }
  }

  function dequeueItem() {
    if (itemCount > 0 && !popping && containerRef.current) {
      setPopping(true);
      const item = containerRef.current.firstChild as HTMLElement;
      if (item) {
        item.style.transform = 'translateX(100%)';
        item.addEventListener('transitionend', () => {
          if (containerRef.current && item.parentNode === containerRef.current) {
            containerRef.current.removeChild(item);
            setItemCount((prevCount) => prevCount - 1);
            setPopping(false);
          }
        });
      }
    }
  }

  return (
    <div className="queue-body">
      <Helmet>
        <title>
        Queue Concept in DSA Tutorial with Visualization and Demo | UIBoxx.in
        </title>
        <meta
          name="description"
          content="Learn about the Queue concept in DSA with our tutorial. Explore the fundamentals of Queue data structure and its operations through interactive visualizations and demos. Enhance your problem-solving skills and algorithmic understanding."
        />
        <meta
          name="keywords"
          content="Queue concept in DSA, Queue data structure, Queue tutorial, Queue visualization, Queue demo, algorithm tutorial, data structures and algorithms, problem-solving, algorithmic understanding"
        />
      </Helmet>
      <div className="queue-card">
        <h1>Queue Visual Representation</h1>
        <div className="queue-demo">
          <div className="queue-container" ref={containerRef}></div>

          <button onClick={enqueueItem}>Enqueue</button>
          <button onClick={dequeueItem}>Dequeue</button>
        </div>
        <div className="intro">
            <details>
                <summary>Introduction</summary>
                <p>A queue is a fundamental data structure in computer science that follows the First-In-First-Out (FIFO) principle. It can be visualized as a line of items where new items are added at one end, called the rear or enqueue operation, and existing items are removed from the other end, called the front or dequeue operation.This structure resembles a real-world queue or line, where people wait in an orderly manner. Just like people join the queue at the rear and leave from the front, elements in a queue follow the same pattern. This visual representation helps in understanding how a queue operates. <br></br>The queue data structure is commonly used in scenarios where the order of processing or access needs to be preserved, such as handling tasks in a job scheduling system or managing requests in network communication. By maintaining the order of items, a queue enables efficient processing, ensuring that the first item added is the first one to be processed or accessed, making it a crucial tool for various algorithms and applications.</p>
            </details>
        </div>
      </div>
    </div>
  );
}

export default QueueTutorial;
