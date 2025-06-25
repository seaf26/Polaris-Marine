import { motion } from "motion/react"
import img from "../assets/pexels-wolfgang-weiser-467045605-32119532.jpg"
import img2 from "../assets/pexels-wolfgang-weiser-467045605-32119533.jpg"
import img3 from "../assets/pexels-tomfisk-3840447.jpg"
import { useState, useEffect } from "react";

const images = [img, img2, img3];

export default function MaritimeHeroSection() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400); // fade out before changing
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 rounded-3xl shadow-2xl px-2 md:px-8 py-10 md:py-20">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-blue-300">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-blue-300">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-blue-300">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>
      <div className="px-4 py-4 md:py-10 w-full">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl drop-shadow-lg">
          {"Navigate Global Trade with Confidence".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-blue-100"
        >
          Connect continents through maritime commerce. Our fleet delivers cargo across the seven seas with unmatched
          reliability, efficiency, and environmental responsibility.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-white text-blue-700 font-semibold px-6 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-100 shadow-md">
            Build With Us
          </button>
          <button className="w-60 transform rounded-lg border border-blue-200 bg-blue-50 text-blue-700 font-semibold px-6 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white shadow-md">
            Contact Us
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-3xl border border-blue-200 bg-white p-4 shadow-lg"
        >
          <div className="w-full overflow-hidden rounded-xl border border-blue-200 relative">
            <img
              src={images[current]}
              alt="Container ship navigating through ocean waters at sunset"
              className={`aspect-[16/9] h-auto w-full object-cover transition-all duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
              height={600}
              width={1000}
            />
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setCurrent(idx); setFade(false); setTimeout(() => setFade(true), 400); }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                    idx === current ? 'bg-blue-700' : 'bg-blue-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}




