"use client";

import { useState } from "react";

export default function ImageCarouselModal() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    "/img/food.jpg",
    "/img/showcase4.jpg",
    "/img/showcase3.jpg",
  ];

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Open Modal Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Feeding scheme and food distribution
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="relative bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-lg">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute font-bold top-3 right-3  hover:text-gray-700"
            >
              ✕
            </button>

            {/* Carousel Content */}
            <div className="flex flex-col items-center mt-5">
              <img
                src={images[index]}
                alt="carousel"
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* Controls */}
              <div className="flex items-center justify-between w-full mt-4">
                <button
                  onClick={prev}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Prev
                </button>

                <p className="text-sm text-gray-600">
                  {index + 1} / {images.length}
                </p>

                <button
                  onClick={next}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Next
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
