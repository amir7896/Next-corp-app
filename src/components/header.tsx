"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full absolute z-10 text-white bg-gradient-to-r from-purple-800 to-blue-800">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-8">
        {/* Toggle Button for Small Screens */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isOpen ? "hidden" : "block"} text-white`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="text-bold text-3xl flex items-center space-x-2"
        >
          <span>Home</span>
        </Link>

        {/* Navigation Links for Larger Screens */}
        <ul className="hidden sm:flex items-center space-x-6 text-lg">
          <li>
            <Link
              href="/reliability"
              className="hover:underline hover:text-blue-600"
            >
              Reliability
            </Link>
          </li>
          <li>
            <Link
              href="/performance"
              className="hover:underline hover:text-blue-600"
            >
              Performance
            </Link>
          </li>
          <li>
            <Link href="/scale" className="hover:underline hover:text-blue-600">
              Scale
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/signin"
            className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-purple-800"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-purple-800"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Side Navigation for Small Screens */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-r from-purple-800 to-blue-800 text-white shadow-lg p-6 z-30">
            <button
              className="text-white focus:outline-none mb-6"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"} text-white`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="space-y-4 text-lg">
              <li>
                <Link
                  href="/reliability"
                  className="block hover:underline hover:text-blue-300"
                  onClick={() => setIsOpen(false)}
                >
                  Reliability
                </Link>
              </li>
              <li>
                <Link
                  href="/performance"
                  className="block hover:underline hover:text-blue-300"
                  onClick={() => setIsOpen(false)}
                >
                  Performance
                </Link>
              </li>
              <li>
                <Link
                  href="/scale"
                  className="block hover:underline hover:text-blue-300"
                  onClick={() => setIsOpen(false)}
                >
                  Scale
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
