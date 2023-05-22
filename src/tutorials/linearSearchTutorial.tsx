import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../CSS/tutorial.css";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function LinearSearchTutorialsDetails() {
  const [result, setResult] = useState("");

  async function linearSearch() {
    const targetInput = document.getElementById("target") as HTMLInputElement;
    const target = targetInput?.value ? parseInt(targetInput.value) : NaN;
    let found = false;

    for (let i = 0; i < 40; i++) {
      await delay(1000);

      const elements = document.querySelectorAll(".number");
      elements.forEach((elem) => {
        elem.classList.remove("left");
        elem.classList.remove("right");
        elem.classList.remove("found");
      });

      const currentElem = document.querySelectorAll(".number")[i];
      currentElem.classList.add("left");

      if (target === i + 1) {
        found = true;
        setResult(`Found ${target} at index ${i}`);
        currentElem.classList.remove("left");
        currentElem.classList.add("found");
        break;
      }
    }

    if (!found) {
      setResult(`Target ${target} not found`);
    }
  }

  return (
    <div className="search-tutorial-body">
      <Helmet>
        <title>
        Linear Search Algorithm Tutorial with Visualization and Demo | UIBoxx.in
        </title>
        <meta
          name="description"
          content="Learn Linear Search algorithm with our tutorial. Explore the concepts and implementation of Linear Search through interactive visualizations and demos. Enhance your problem-solving skills and understand the basics of searching algorithms."
        />
        <meta
          name="keywords"
          content="Linear Search algorithm, Linear Search tutorial, Linear Search visualization, Linear Search demo, algorithm tutorial, algorithm visualization, algorithm demo, data structures and algorithms, searching algorithms, problem-solving"
        />
      </Helmet>
      <div className="demo-search-card">
        <h1>How Linear Search Works?</h1>
        
        <div className="numbers">
          {[...Array(40)].map((_, index) => (
            <div key={index + 1} className="number">
              {index + 1}
            </div>
          ))}
        </div>

        <div className="action">
          <input type="text" id="target" placeholder="Enter target number" />
          <button onClick={linearSearch}>Search</button>
        </div>

        <div id="result">{result}</div>
      </div>

      <div className="intro">
        <details>
        <summary>Introduction</summary>
        <p>
          Linear search is a simple searching algorithm that sequentially checks
          each element in a list or array until it finds the target value or
          reaches the end of the list. It starts from the beginning and compares
          each element with the target value. If a match is found, the search is
          successful, and the index of the matching element is returned. If the
          target value is not found after checking all elements, the search is
          considered unsuccessful. Linear search is straightforward but may not
          be efficient for large datasets as it has a time complexity of O(n),
          where n is the number of elements in the list.
        </p>
        </details>
      </div>

      <div className="algorithm">
        <details>
          <summary>Linear Search Algorithm</summary>
          <div id="search-steps">
            <ol>
              <li>Start at the beginning of the list.</li>
              <li>Compare the target value with the current element.</li>
              <li>
                If the target value matches the current element, return the
                index and exit.
              </li>
              <li>
                If the target value does not match the current element, move to
                the next element.
              </li>
              <li>
                If there are no more elements to check, the target value is not
                present in the list.
              </li>
            </ol>
          </div>
        </details>
      </div>
    </div>
  );
}

export default LinearSearchTutorialsDetails;
