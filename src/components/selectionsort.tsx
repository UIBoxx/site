import React, { useState, useEffect } from "react";
import "../CSS/sort.css";
import { Helmet } from "react-helmet";

function SelectionSortTutorialsDetails() {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const [minIdx, setMinIdx] = useState(-1);

  const sleep = (ms: number) => {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  };

  const selectionSort = async (numbers: number[]) => {
    const len = numbers.length;

    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < len; j++) {
        setCurrentIdx(j);
        setMinIdx(minIndex);

        if (numbers[j] < numbers[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        const temp = numbers[i];
        numbers[i] = numbers[minIndex];
        numbers[minIndex] = temp;

        const numberElements = Array.from(
          document.getElementsByClassName("sortnumber")
        ) as HTMLElement[];

        const currentNumberElement = numberElements[i];
        const minNumberElement = numberElements[minIndex];

        currentNumberElement.style.transform = `translateX(${
          minNumberElement.offsetWidth + 10
        }px)`;
        minNumberElement.style.transform = `translateX(${
          -currentNumberElement.offsetWidth - 10
        }px)`;

        await sleep(2000);

        const tempText = currentNumberElement.innerText;
        currentNumberElement.innerText = minNumberElement.innerText;
        minNumberElement.innerText = tempText;

        currentNumberElement.style.transform = "translateX(0)";
        minNumberElement.style.transform = "translateX(0)";

        await sleep(2000);
      }
    }
  };

  const sortNumbers = () => {
    const inputNumbers = (document.getElementById(
      "inputNumbers"
    ) as HTMLInputElement).value;
    const numbers = inputNumbers.split(",").map(Number);

    selectionSort(numbers);
  };

  useEffect(() => {
    const numberElements = Array.from(
      document.getElementsByClassName("sortnumber")
    ) as HTMLElement[];

    numberElements.forEach((element, index) => {
      if (index === currentIdx) {
        element.style.backgroundColor = "yellow";
      } else if (index === minIdx) {
        element.style.backgroundColor = "green";
      } else {
        element.style.backgroundColor = "";
      }
    });
  }, [currentIdx, minIdx]);

  return (
    <div className="sort-body">
      <Helmet>
        <title>
          Selection Sort Algorithm Tutorial with Visualization and Demo |
          UIBoxx.in
        </title>
        <meta
          name="description"
          content="Learn Selection Sort algorithm with our tutorial. Explore the concepts and implementation of Selection Sort through interactive visualizations and demos. Improve your understanding of sorting algorithms and enhance your problem-solving skills."
        />
        <meta
          name="keywords"
          content="Selection Sort algorithm, Selection Sort tutorial, Selection Sort visualization, Selection Sort demo, sorting algorithm, algorithm tutorial, algorithm visualization, algorithm demo, data structures and algorithms, problem-solving"
        />
      </Helmet>
      <div className="sort-box">
        <h1>Selection Sort Demo</h1>
        <div className="sort-container">
          <div className="sortnumbers" id="sortnumbers"></div>
          <div className="sort-action">
            <input
              type="text"
              id="inputNumbers"
              placeholder="Enter numbers separated by comma"
            />
            <button onClick={sortNumbers}>Sort</button>
          </div>
        </div>
        <div className="sort-desc">
          <details>
            <summary>Introduction</summary>
            <p>
              Selection Sort is a simple sorting algorithm that divides the
              input into a sorted and an unsorted region. It repeatedly finds
              the minimum element from the unsorted region and swaps it with
              the leftmost element of the unsorted region. This process
              continues until the entire list is sorted. Selection Sort has a
              time complexity of O(n^2), making it less efficient than more
              advanced algorithms like Quick Sort or Merge Sort. However, it
              can still be useful for small lists or as an educational tool to
              learn about sorting algorithms.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

export default SelectionSortTutorialsDetails;
