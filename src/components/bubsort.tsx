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
    <div className="sort-body">
      <div className="sort-box">
        <h1>Bubble Sort Demo</h1>
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
          <p>Bubble Sort is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order. It gets its name from how smaller elements "bubble" to the top of the list. This process continues until the entire list is sorted. While easy to understand and implement, Bubble Sort is not efficient for large lists. It involves multiple iterations, comparing and swapping adjacent elements to move the larger elements towards the end. This continues until the list is fully sorted. Bubble Sort has a time complexity of O(n^2), making it less efficient than more advanced algorithms like Quick Sort or Merge Sort. However, it can still be useful for small lists or as an educational tool to learn about sorting algorithms.</p>
        </div>
      </div>
    </div>
  );
}

export default BubbleSortTutorialsDetails;
