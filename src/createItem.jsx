import { useState } from "react";

export default function CreateItem({ handleSaveClick }) {
  const [item, setItem] = useState({
    number: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setItem(prevItem => ({
      ...prevItem,
      [name]: value,
    }));
  }

  function handleSave(e) {
    e.preventDefault(); // Prevent default form submission
    handleSaveClick(item);
    // Optionally, reset the form after saving
    setItem({
      number: "",
      content: ""
    });
  }

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="w-full h-20 bg-orange-500 flex items-center justify-center">
        <h1 className="font-mono text-lg text-gray-800 text-center me-2">
          What do you need for your trip?
        </h1>
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/retro/32/filled-like.png"
          alt="filled-like"
        />
        {/* Form container */}
        <div className="ms-3 flex items-center w-full max-w-lg">
          <form onSubmit={handleSave} className="flex items-center gap-3 w-full">
            {/* Select dropdown */}
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                name="number"
                value={item.number}
                onChange={handleChange}
                required
              >
                <option value="">Select a number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 10l5 5 5-5"
                  />
                </svg>
              </div>
            </div>
            {/* End of select dropdown */}

            {/* Input field */}
            <div>
              <input
                type="text"
                className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="item"
                placeholder="Item"
                value={item.content}
                name="content"
                onChange={handleChange}
                required
              />
            </div>
            {/* End of input field */}

            <button
              type="submit"
              className="bg-orange-700 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full"
            >
              Save
            </button>
          </form>
        </div>
        {/* End of form container */}
      </div>
    </div>
  );
}
