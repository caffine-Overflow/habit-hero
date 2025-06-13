"use client";
import React from "react";

export default function QuizQuestion({
  question,
  options,
  selected,
  onSelect,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option, index) => {
          const isSelected = selected === index;
          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-colors duration-200 ${
                isSelected
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-800 border-gray-300 hover:border-blue-400"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
