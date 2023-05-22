import "../CSS/tutorial.css";
import { Helmet } from "react-helmet";


import React, { useRef, useState } from "react";

function StackTutorial() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [itemCount, setItemCount] = useState(0);
  const [popping, setPopping] = useState(false);

  function pushItem() {
    const item = document.createElement("div");
    item.className = "stack-item";
    item.innerText = (itemCount + 1).toString();

    if (containerRef.current) {
      containerRef.current.appendChild(item);
      setItemCount((prevCount) => prevCount + 1);

      // Trigger reflow to ensure the animation starts
      item.getBoundingClientRect();
      item.style.transform = "translateY(0)";
    }
  }

  function popItem() {
    if (itemCount > 0 && !popping && containerRef.current) {
      setPopping(true);
      const item = containerRef.current.lastChild as HTMLElement;
      if (item) {
        item.style.transform = "translateY(-100%)";
        item.addEventListener("transitionend", () => {
          if (
            containerRef.current &&
            item.parentNode === containerRef.current
          ) {
            containerRef.current.removeChild(item);
            setItemCount((prevCount) => prevCount - 1);
            setPopping(false);
          }
        });
      }
    }
  }
  return (
    <div className="stack-body">
      <Helmet>
        <title>
        Stack Concept in DSA Tutorial with Visualization and Demo | UIBoxx.in
        </title>
        <meta
          name="description"
          content="Learn about the Stack concept in DSA with our tutorial. Understand the fundamentals of Stack data structure and its operations through interactive visualizations and demos. Enhance your problem-solving skills and algorithmic understanding."
        />
        <meta
          name="keywords"
          content="Stack concept in DSA, Stack data structure, Stack tutorial, Stack visualization, Stack demo, algorithm tutorial, data structures and algorithms, problem-solving, algorithmic understanding"
        />
      </Helmet>
      <div className="stack-card">
        <h1>Stack Visual Representation</h1>
        <div className="stack-demo">
          <div className="stack-container" ref={containerRef}></div>

          <button onClick={pushItem}>Push</button>
          <button onClick={popItem}>Pop</button>
        </div>
        <div className="intro">
          <details>
            <summary>Introduction</summary>
            <p>A stack is a fundamental data structure in computer science that follows the Last-In-First-Out (LIFO) principle. It can be visualized as a stack of items where new items are added on top, called the push operation, and existing items are removed from the top, called the pop operation. This visual representation resembles a stack of items, where you can only access the topmost item. The stack data structure is commonly used in scenarios where the most recently added item is the most relevant or needs to be accessed first. It is widely used in programming for tasks like managing function calls, tracking program execution, and implementing undo/redo functionality. By adhering to the LIFO principle, a stack allows efficient insertion and removal of items, making it a crucial tool in various algorithms and applications.</p>
          </details>
        </div>
      </div>
    </div>
  );
}

export default StackTutorial;
