import React, { useState } from 'react';
import '../CSS/tutorial.css';

function delay(ms:number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function LinearSearchTutorialsDetails() {
  const [result, setResult] = useState('');

  async function linearSearch() {
    const targetInput = document.getElementById('target') as HTMLInputElement;
    const target = targetInput?.value ? parseInt(targetInput.value) : NaN;
    let found = false;

    for (let i = 0; i < 40; i++) {
      await delay(1000);

      const elements = document.querySelectorAll('.number');
      elements.forEach((elem) => {
        elem.classList.remove('left');
        elem.classList.remove('right');
        elem.classList.remove('found');
      });

      const currentElem = document.querySelectorAll('.number')[i];
      currentElem.classList.add('left');

      if (target === i + 1) {
        found = true;
        setResult(`Found ${target} at index ${i}`);
        currentElem.classList.remove('left');
        currentElem.classList.add('found');
        break;
      }
    }

    if (!found) {
      setResult(`Target ${target} not found`);
    }
  }

  return (
    <div className="search-tutorial-body">
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

      <div className="algorithm">
        <h1>Linear Search Algorithm</h1>
        <div id="search-steps">
        <ol>
          <li>Start at the beginning of the list.</li>
          <li>Compare the target value with the current element.</li>
          <li>If the target value matches the current element, return the index and exit.</li>
          <li>If the target value does not match the current element, move to the next element.</li>
          <li>If there are no more elements to check, the target value is not present in the list.</li>
        </ol>
        </div>
      </div>
    </div>
  );
}

export default LinearSearchTutorialsDetails;
