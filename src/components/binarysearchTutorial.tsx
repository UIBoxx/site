import React, { useState } from 'react';
import "../CSS/tutorial.css";

function delay(ms:number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function BinarySearchTutorialsDetails() {
  const [result, setResult] = useState('');

  async function binarySearch() {
    const targetInput = document.getElementById('target') as HTMLInputElement;
    const target = targetInput?.value ? parseInt(targetInput.value) : NaN;
    let left = 0;
    let right = 39;
    let found = false;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      // Delay for 1 second to show the progress
      await delay(1000);

      // Remove color highlighting from previous elements
      const elements = document.querySelectorAll('.number');
      elements.forEach((elem) => {
        elem.classList.remove('left');
        elem.classList.remove('right');
        elem.classList.remove('found');
      });

      const midElem = document.querySelectorAll('.number')[mid];
      midElem.classList.add('left');
      midElem.classList.add('right');

      if (target === mid + 1) {
        found = true;
        setResult(`Found ${target} at index ${mid}`);
        midElem.classList.remove('left');
        midElem.classList.remove('right');
        midElem.classList.add('found');
        break;
      }

      if (target < mid + 1) {
        // Highlight left half of array
        for (let i = left; i < mid; i++) {
          const elem = document.querySelectorAll('.number')[i];
          elem.classList.remove('right');
          elem.classList.remove('found');
          elem.classList.add('left');
        }
        right = mid - 1;
      } else {
        // Highlight right half of array
        for (let i = mid + 1; i <= right; i++) {
          const elem = document.querySelectorAll('.number')[i];
          elem.classList.remove('left');
          elem.classList.remove('found');
          elem.classList.add('right');
        }
        left = mid + 1;
      }
    }

    if (!found) {
      setResult(`Target ${target} not found`);
    }
  }


  return (
    <div className="search-tutorial-body">
      <div className="demo-search-card">
        <h1>How Binary Search Works?</h1>

        <div className="numbers">
          {[...Array(40)].map((_, index) => (
            <div key={index + 1} className="number">{index + 1}</div>
          ))}
        </div>

        <div className="action">
          <input type="text" id="target" placeholder="Enter target number" />
          <button onClick={binarySearch}>Search</button>
        </div>

        <div id="result">{result}</div>
      </div>

      <div className="algorithm">
        <h1>Binary Search Algorithm</h1>
        <div id="search-steps">
          <ol>
            <li>Initialization: Start with a sorted array and define the target value you want to search for.</li>
            <li>Set boundaries: Initialize two variables, <code>left</code> and <code>right</code>, to represent the leftmost and rightmost indices of the search space. Initially, <code>left = 0</code> and <code>right = length of array - 1</code>.</li>
            <li>Find the middle: Calculate the middle index of the search space using the formula <code>mid = Math.floor((left + right) / 2)</code>.</li>
            <li>Compare with the middle element:
              <ul>
                <li>If the target value is equal to the middle element, the search is successful, and you can return the index of the middle element.</li>
                <li>If the target value is less than the middle element, update <code>right = mid - 1</code> to narrow down the search space to the left half of the array.</li>
                <li>If the target value is greater than the middle element, update <code>left = mid + 1</code> to narrow down the search space to the right half of the array.</li>
              </ul>
            </li>
            <li>
              Repeat until found or search space is empty: Repeat steps 3 and 4
              until the target value is found or <code>left {">"} right</code>.
            </li>
            <li>
              Termination: If the target value is found, return the index of the
              found element. If the search space is empty and the target value
              is not found, the search is unsuccessful.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BinarySearchTutorialsDetails;
