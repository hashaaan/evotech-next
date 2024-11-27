"use client";

import Link from "next/link";
import { type ReactNode, useState } from "react";

export default function JavaScript() {
  // State for various examples
  const [stringInput, setStringInput] = useState("");
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const numbers = [5, 3, 8, 1, 9, 2];
  const [filteredNumbers, setFilteredNumbers] = useState<number[]>([]);

  const items = ["Apple", "Banana", "Cherry"];
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const [iteratedList, setIteratedList] = useState<ReactNode[]>([]);

  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);

  const [jsonData, setJsonData] = useState<object | null>(null);

  const [setInput, setSetInput] = useState("");
  const [uniqueValues, setUniqueValues] = useState<Set<string>>(new Set());

  // JavaScript event handlers

  // 1. Convert string input to uppercase
  const handleStringToUpper = () => {
    setStringInput((prev) => prev.toUpperCase());
  };

  // 2. Convert string input to lowercase
  const handleStringToLower = () => {
    setStringInput((prev) => prev.toLowerCase());
  };

  // 3. Generate a random number between 1 and 100
  const handleRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNum);
  };

  // 4. Add a new task to the task list
  const handleAddTask = () => {
    if (taskInput) {
      setTasks((prev) => [...prev, taskInput]);
    }
  };

  // 5. Filter even numbers from the numbers array
  const handleFilterNumbers = () => {
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    setFilteredNumbers(evenNumbers);
  };

  // 6. Search for an item in the items array
  const handleSearch = () => {
    const searchText = searchInput.toLowerCase();
    const foundItem = items.find((item) => item.toLowerCase() === searchText);
    setSearchResult(foundItem ? `Found: ${foundItem}` : "Item not found");
  };

  // 7. Sort the numbers array
  const handleSortArray = () => {
    const sorted = [...numbers].sort((a, b) => a - b);
    setSortedNumbers(sorted);
  };

  // 8. Iterate through items array and display them
  const handleIterateArray = () => {
    // Use map() to create a list of items
    const itemList = items.map((item, index) => <li key={index}>{item}</li>);

    setIteratedList(itemList);
  };

  // 9. Fetch JSON data and display it
  const handleFetchJSON = async () => {
    try {
      // Fetch sample JSON data (you can use any public API URL)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      // Log the error
      console.error("Failed to fetch JSON", error);
      setJsonData(null);
    }
  };

  // 10. Add unique values to a Set
  const handleAddToSet = () => {
    if (setInput) {
      // Add the input value to the Set (only unique values will be added)
      const updatedSet = new Set(uniqueValues);
      updatedSet.add(setInput);

      // Update the state with unique values
      setUniqueValues(updatedSet);

      // one line code using previous state value
      // setUniqueValues((prev) => new Set(prev).add(setInput));
    }
  };

  return (
    <main className="container mx-auto py-5 px-14 w-full">
      <h1 className="text-slate-800 font-bold font-mono text-3xl">
        JavaScript Fundamentals
      </h1>

      {/* 1. JavaScript Strings Section */}
      <section id="strings" className="mt-10">
        <Link href="#strings">
          <h2 className="text-2xl font-semibold mb-5">1. JavaScript Strings</h2>
        </Link>

        {/* <p className="mb-4 text-gray-600">Enter a string to manipulate:</p> */}

        <input
          type="text"
          onChange={(e) => setStringInput(e.target.value)}
          className="border px-4 py-2 rounded-md"
          placeholder="Type something..."
        />

        <div className="mt-4 space-x-2">
          <button
            onClick={() => handleStringToUpper()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Uppercase
          </button>
          <button
            onClick={() => handleStringToLower()}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Lowercase
          </button>
        </div>

        <p className="mt-4 text-lg text-blue-600">{stringInput}</p>
      </section>

      {/* 2. JavaScript Numbers and Methods Section */}
      <section id="numbers" className="mt-10">
        <Link href="#numbers">
          <h2 className="text-2xl font-semibold mb-5">
            2. JavaScript Numbers and Methods
          </h2>
        </Link>

        {/* <p className="mb-4 text-gray-600">Calculate a random number:</p> */}

        <button
          onClick={() => handleRandomNumber()}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Generate Random Number
        </button>

        <p className="mt-4 text-lg">
          Random Number: <span className="text-blue-600">{randomNumber}</span>
        </p>
      </section>

      {/* 3. JavaScript Arrays Section */}
      <section id="arrays" className="mt-10">
        <Link href="#arrays">
          <h2 className="text-2xl font-semibold mb-5">3. JavaScript Arrays</h2>
        </Link>

        {/* <p className="mb-4 text-gray-600">Manage your task list:</p> */}

        <input
          type="text"
          onChange={(e) => setTaskInput(e.target.value)}
          className="border px-4 py-2 rounded-md"
          placeholder="Add a task..."
        />

        <button
          onClick={() => handleAddTask()}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 ml-2"
        >
          Add Task
        </button>

        <div className="flex flex-col items-start text-left">
          <ul className="mt-4 list-disc list-inside text-blue-600">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. JavaScript Array Filter Section */}
      <section id="array-filter" className="mt-10">
        <Link href="#array-filter">
          <h2 className="text-2xl font-semibold mb-5">
            4. JavaScript Array Filter
          </h2>
        </Link>

        <p className="mb-4 text-gray-600">
          Number Array: {`[${numbers.join(", ")}]`}
        </p>

        <button
          onClick={() => handleFilterNumbers()}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Filter Even Numbers
        </button>

        <p className="mt-4 text-lg">
          Even Numbers:{" "}
          <span className="text-blue-600">{filteredNumbers.join(", ")}</span>
        </p>
      </section>

      {/* 5. JavaScript Array Search Section */}
      <section id="array-search" className="mt-10">
        <Link href="#array-search">
          <h2 className="text-2xl font-semibold mb-5">
            5. JavaScript Array Search
          </h2>
        </Link>

        <p className="mb-4 text-gray-600">
          Items Array: {`[${items.join(", ")}]`}
        </p>

        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          className="border px-4 py-2 rounded-md"
          placeholder="Search an item..."
        />

        <button
          onClick={() => handleSearch()}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 ml-2"
        >
          Search
        </button>

        <p className="mt-4 text-lg text-blue-600">{searchResult}</p>
      </section>

      {/* 6. JavaScript Arrays Sort Section */}
      <section id="array-sort" className="mt-10">
        <h2 className="text-2xl font-semibold mb-5">
          6. JavaScript Array Sort
        </h2>

        <p className="mb-4 text-gray-600">
          Number Array: {`[${numbers.join(", ")}]`}
        </p>

        <button
          onClick={() => handleSortArray()}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Sort Numbers
        </button>

        <p className="mt-4 text-lg">
          Sorted Numbers:{" "}
          <span className="text-blue-600">{sortedNumbers.join(", ")}</span>
        </p>
      </section>

      {/* JavaScript Arrays Iteration Section */}
      <section id="array-iteration" className="mt-10">
        <h2 className="text-2xl font-semibold mb-5">
          7. JavaScript Arrays Iteration
        </h2>

        <button
          onClick={() => handleIterateArray()}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Display Items
        </button>

        <ul className="mt-4 list-disc list-inside">{iteratedList}</ul>
      </section>

      {/* JavaScript JSON Section */}
      <section id="json" className="mt-10">
        <h2 className="text-2xl font-semibold mb-5">8. JavaScript JSON</h2>

        <button
          onClick={() => handleFetchJSON()}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Fetch and Display JSON
        </button>

        <pre className="mt-4 p-4 bg-gray-200 rounded">
          {jsonData ? JSON.stringify(jsonData, null, 2) : ""}
        </pre>
      </section>

      {/* JavaScript Set Section */}
      <section id="set" className="mt-10">
        <h2 className="text-2xl font-semibold mb-5">9. JavaScript Set</h2>
        <input
          type="text"
          onChange={(e) => setSetInput(e.target.value)}
          className="border px-4 py-2 rounded-md"
          placeholder="Enter unique values..."
        />
        <button
          onClick={() => handleAddToSet()}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2"
        >
          Add to Set
        </button>
        <p className="mt-4 text-lg" id="setOutput">
          {`Unique Values: ${Array.from(uniqueValues).join(", ")}`}
        </p>
      </section>
    </main>
  );
}
