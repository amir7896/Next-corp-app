import { motion } from "framer-motion";
import Image from "next/image";
import homeImg from "../../public/home.jpg";

export default function Home() {
  const images = [homeImg, homeImg, homeImg, homeImg]; // Carousel Images

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
                <Image
                  src={img}
                  alt={`carousel ${index}`}
                  width={256} // Width of the card
                  height={160} // Height of the card
                  objectFit="cover" // Ensures proper scaling
                  className="rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
