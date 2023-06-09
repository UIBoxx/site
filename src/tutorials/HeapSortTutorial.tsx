import React, { useState, useEffect } from "react";
import "../CSS/sort.css";
import { Helmet } from "react-helmet";


function HeapSortTutorialsDetails() {
  const [result, setResult] = useState("");

  const sleep = (ms: number) => {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  };

  const heapify = async (arr: number[], n: number, i: number) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      const temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      const numberElements = document.getElementsByClassName(
        "sortnumber"
      ) as HTMLCollectionOf<HTMLElement>;
      const currentNumberElement = numberElements[i];
      const largestNumberElement = numberElements[largest];

      currentNumberElement.style.transform = `translateX(${
        largestNumberElement.offsetWidth + 10
      }px)`;
      largestNumberElement.style.transform = `translateX(${
        -currentNumberElement.offsetWidth - 10
      }px)`;

      await sleep(2000);

      const tempText = currentNumberElement.innerText;
      currentNumberElement.innerText = largestNumberElement.innerText;
      largestNumberElement.innerText = tempText;

      currentNumberElement.style.transform = "translateX(0)";
      largestNumberElement.style.transform = "translateX(0)";

      await sleep(2000);

      await heapify(arr, n, largest);
    }
  };

  const heapSort = async (arr: number[]) => {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      const temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      const numberElements = document.getElementsByClassName(
        "sortnumber"
      ) as HTMLCollectionOf<HTMLElement>;
      const firstNumberElement = numberElements[0];
      const ithNumberElement = numberElements[i];

      firstNumberElement.style.transform = `translateX(${
        ithNumberElement.offsetWidth + 10
      }px)`;
      ithNumberElement.style.transform = `translateX(${
        -firstNumberElement.offsetWidth - 10
      }px)`;

      await sleep(2000);

      const tempText = firstNumberElement.innerText;
      firstNumberElement.innerText = ithNumberElement.innerText;
      ithNumberElement.innerText = tempText;

      firstNumberElement.style.transform = "translateX(0)";
      ithNumberElement.style.transform = "translateX(0)";

      await sleep(2000);

      await heapify(arr, i, 0);
    }
    const numberElements = document.getElementsByClassName("sortnumber");
    for (let i = 0; i < numberElements.length; i++) {
      const element = numberElements[i] as HTMLElement;
      element.style.backgroundColor = "orange";
    }
  };

  const sortNumbers = () => {
    const inputNumbers = (
      document.getElementById("inputNumbers") as HTMLInputElement
    ).value;
    const numbers = inputNumbers.split(",").map(Number);

    const numbersContainer = document.getElementById("sortnumbers");
    if (numbersContainer) {
      numbersContainer.innerHTML = "";

      numbers.forEach((number) => {
        const numberElement = document.createElement("div");
        numberElement.classList.add("sortnumber");
        numberElement.innerText = String(number);
        numbersContainer.appendChild(numberElement);
      });
    }

    heapSort(numbers);
  };

  return (
      <div className="sort-body">
        <Helmet>
        <title>
        Heap Sort Algorithm Tutorial with Visualization and Demo | UIBoxx.in
        </title>
        <meta
          name="description"
          content="Learn Heap Sort algorithm with our tutorial. Gain a comprehensive understanding of Heap Sort and its implementation through interactive visualizations and demos. Enhance your sorting algorithm knowledge and problem-solving skills."
        />
        <meta
          name="keywords"
          content="Heap Sort algorithm, Heap Sort tutorial, Heap Sort visualization, Heap Sort demo, sorting algorithm, algorithm tutorial, algorithm visualization, algorithm demo, data structures and algorithms, problem-solving"
        />
      </Helmet>
      <div className="sort-box">
        <h1>Heap Sort Demo</h1>
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
            Heap sort is a comparison-based sorting algorithm that utilizes the
            concept of a binary heap data structure. It works by first building
            a max heap from the given array and then repeatedly extracting the
            maximum element from the heap and placing it at the end of the
            sorted portion of the array. The process continues until the entire
            array is sorted. <br></br> The key idea behind heap sort is that the largest
            element of the unsorted portion of the array is always at the root
            of the heap. By swapping it with the last element of the unsorted
            portion and reducing the heap size, we gradually build the sorted
            portion of the array from right to left. The process of maintaining
            the max heap property during each swap ensures that the next largest
            element is always selected. Heap sort has a time complexity of O(n
            log n) in all cases, making it efficient for large data sets.
          </p>
        </details>
        </div>
      </div>
    </div>
  );
}

export default HeapSortTutorialsDetails;
