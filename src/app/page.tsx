"use client";

import { motion } from "framer-motion";
import homeImg from "../../public/home.jpg";

export default function Home() {
  const images = [homeImg, homeImg, homeImg, homeImg]; // Duplicate images for the carousel

  return (
    <div className="bg-black text-white min-h-screen overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center py-16 px-4"
      >
        {/* Animated Title */}
        <motion.h1
          className="text-4xl font-bold text-white mt-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Professional Cloud Hosting
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg text-gray-400 mt-4 text-center max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Experience the best hosting solutions tailored for your business.
        </motion.p>

        {/* Horizontal Scrolling Cards */}
        <div className="overflow-hidden w-full mt-12">
          <motion.div
            className="flex space-x-8 w-max"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="w-64 h-40 flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={img.src}
                  alt={`carousel ${index}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Section Below */}
      <div className="py-16 px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow-lg text-center"
            >
              <img
                src={img.src}
                alt={`feature ${index}`}
                className="w-full h-40 rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-white">
                Feature Title {index + 1}
              </h3>
              <p className="text-gray-400 mt-2">
                Brief description of the feature. Showcase the most important
                details here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
