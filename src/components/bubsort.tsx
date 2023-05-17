import React, { useState } from "react";
import "../CSS/sort.css";

function BubbleSortTutorialsDetails() {
  const [result, setResult] = useState("");

  const sleep = (ms: number) => {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  };

  const bubbleSort = async (numbers: number[]) => {
    let len = numbers.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
        const currentNumber = numbers[i];
        const nextNumber = numbers[i + 1];

        if (currentNumber > nextNumber) {
          numbers[i] = nextNumber;
          numbers[i + 1] = currentNumber;

          const numberElements = document.getElementsByClassName(
            "sortnumber"
          ) as HTMLCollectionOf<HTMLElement>;
          const currentNumberElement = numberElements[i];
          const nextNumberElement = numberElements[i + 1];

          currentNumberElement.style.transform = `translateX(${
            nextNumberElement.offsetWidth + 10
          }px)`;

          await sleep(2000);

          const temp = currentNumberElement.innerText;
          currentNumberElement.innerText = nextNumberElement.innerText;
          nextNumberElement.innerText = temp;

          currentNumberElement.style.transform = "translateX(0)";
          nextNumberElement.style.transform = "translateX(0)";

          swapped = true;

          await sleep(2000);
        }
      }

      len--;
    } while (swapped);
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

    bubbleSort(numbers);
  };

  return (
    <div className="sort-container">
      <div className="container-head">
        <h1>Bubble Sort Demo</h1>
        <div className="sortnumbers" id="sortnumbers">
          {/* Numbers will be dynamically added here */}
        </div>
        <div>
          <input
            type="text"
            id="inputNumbers"
            placeholder="Enter numbers separated by comma"
          />
          <button onClick={sortNumbers}>Sort</button>
        </div>
        <div id="result">{result}</div>
      </div>
      <div className="sort-container-body">
          <p>
            Bubble Sort is a simple comparison-based sorting algorithm that
            repeatedly steps through the list of elements to be sorted. It
            compares adjacent elements and swaps them if they are in the wrong
            order. The algorithm gets its name from the way smaller elements
            "bubble" to the top of the list in each iteration. This process
            continues until the entire list is sorted. Bubble Sort is easy to
            understand and implement, but it is not very efficient for large
            lists. The working of Bubble Sort involves iterating through the
            list multiple times. In each iteration, adjacent elements are
            compared and swapped if necessary to bring the larger element
            towards the end of the list. This process is repeated until the list
            is fully sorted, and no more swaps are required. The algorithm
            ensures that after each pass, the largest unsorted element "bubbles"
            up to its correct position. The number of iterations required is
            equal to the number of elements in the list minus one. Bubble Sort
            has a time complexity of O(n^2) in the average and worst cases,
            making it less efficient compared to more advanced sorting
            algorithms such as Quick Sort or Merge Sort. However, it is still
            useful for small lists or as an educational tool to understand the
            basics of sorting algorithms.
          </p>
      </div>
    </div>
  );
}

export default BubbleSortTutorialsDetails;
