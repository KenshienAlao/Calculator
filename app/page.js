"use client";
import React from "react";
import useCalculator from "./hooks/useCalculator";

export default function Home() {
  const {
    expression,
    handleButtonClick,
    calculate,
    clear,
    deleteLast,
  } = useCalculator();

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 p-4 font-inter">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden p-6">
        <div className="space-y-6">
          {/* monitor */}
          <div className="h-28 bg-slate-950/50 rounded-2xl border border-slate-800 p-6 flex flex-col justify-end items-end shadow-inner">
            <h1 className="text-5xl font-semibold text-slate-100 tracking-tight">
              {expression || 0}
            </h1>
          </div>

          {/* buttons */}
          <div className="grid grid-cols-4 gap-4">
            <button
              onClick={clear}
              className="col-span-2 h-16 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 rounded-2xl font-bold text-xl transition-all active:scale-95 border border-rose-500/20"
            >
              AC
            </button>
            <button
              onClick={deleteLast}
              className="h-16 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl flex items-center justify-center transition-all active:scale-95 border border-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="size-7"
                fill="currentColor"
              >
                <path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
              </svg>
            </button>
            <button
              onClick={() => handleButtonClick("/")}
              className="h-16 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-2xl transition-all active:scale-95 shadow-lg shadow-indigo-900/40"
            >
              ÷
            </button>

            {["7", "8", "9"].map((num) => (
              <button
                key={num}
                onClick={() => handleButtonClick(num)}
                className="h-16 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-2xl font-semibold text-2xl transition-all active:scale-95 border border-slate-700"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleButtonClick("*")}
              className="h-16 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-2xl transition-all active:scale-95 shadow-lg shadow-indigo-900/40"
            >
              ×
            </button>

            {["4", "5", "6"].map((num) => (
              <button
                key={num}
                onClick={() => handleButtonClick(num)}
                className="h-16 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-2xl font-semibold text-2xl transition-all active:scale-95 border border-slate-700"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleButtonClick("-")}
              className="h-16 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-2xl transition-all active:scale-95 shadow-lg shadow-indigo-900/40"
            >
              −
            </button>

            {["1", "2", "3"].map((num) => (
              <button
                key={num}
                onClick={() => handleButtonClick(num)}
                className="h-16 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-2xl font-semibold text-2xl transition-all active:scale-95 border border-slate-700"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleButtonClick("+")}
              className="h-16 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-2xl transition-all active:scale-95 shadow-lg shadow-indigo-900/40"
            >
              +
            </button>

            <button
              onClick={() => handleButtonClick(".")}
              className="h-16 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-2xl font-semibold text-2xl transition-all active:scale-95 border border-slate-700"
            >
              .
            </button>
            <button
              onClick={() => handleButtonClick("0")}
              className="h-16 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-2xl font-semibold text-2xl transition-all active:scale-95 border border-slate-700"
            >
              0
            </button>
            <button
              onClick={() => calculate()}
              className="col-span-2 h-16 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-2xl transition-all active:scale-95 shadow-lg shadow-emerald-900/40"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
