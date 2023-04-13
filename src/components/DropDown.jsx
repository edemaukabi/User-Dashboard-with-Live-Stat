import React, { useState } from 'react';

const yearList = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);

export const  Dropdown = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  }

  return (
    <div className="relative">
      <select
        className="block appearance-none text-sm mr-8 mb-2 w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedYear}
        onChange={handleYearChange}
      >
        <option value="second" selected>Year</option>
        {yearList.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
        </svg>
      </div>
    </div>
  );
}