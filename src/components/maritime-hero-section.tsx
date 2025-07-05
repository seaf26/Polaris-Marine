import { motion } from "motion/react"
import img1 from "../assets/IMG-20250626-WA0018.jpg"
import img2 from "../assets/IMG-20250626-WA0019.jpg"
import img3 from "../assets/IMG-20250626-WA0020.jpg"
import img4 from "../assets/IMG-20250704-WA0027.jpg"
import img5 from "../assets/IMG-20250704-WA0028.jpg"
import img6 from "../assets/IMG-20250704-WA0029.jpg"
import img7 from "../assets/IMG-20250704-WA0030.jpg"
import img8 from "../assets/IMG-20250704-WA0031.jpg"
import img9 from "../assets/IMG-20250704-WA0032.jpg"
import img10 from "../assets/IMG-20250704-WA0033.jpg"

import { useState, useEffect } from "react";
// import Aurora from './Aurora';
// import Auroraa from './Auroraa';
// import AuroraRight from "./AuroraRight";
import { useTranslation } from 'react-i18next';

const images = [ img5, img6, img7, img8, img9, img10,img1, img2, img3, img4];

export default function MaritimeHeroSection() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const { t, i18n } = useTranslation();

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
        <section id="home">
        <>
        
{/* {            <div className="absolute z-0 h-[100vh] right-0 max-[1379px]:hidden">
                <AuroraRight
                    colorStops={["#2563eb", "#38bdf8", "#60a5fa", "#1e3a8a", "#0ea5e9"]}
                    speed={1.5}
                />
            </div>} */}

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
                        {t('maritimeHeroTitle').split(" ").map((word, index) => (
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
                    {/* Redesigned Slogan UI with RTL support */}
                    <div className="flex justify-center mt-6">
                      <div
                        className="relative flex items-center bg-white/30 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-white/40 max-w-2xl mx-auto"
                        dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                      >
                        {i18n.language === 'ar' ? null : (
                          <span className="mr-4 hidden md:inline-block">
                            {/* Icon */}
                            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M3 12h18M12 3v18" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                        <div className={i18n.language === 'ar' ? 'text-right md:text-right' : 'text-left md:text-left'}>
                          <span className="block text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent">
                            {t('slogan').split('—')[0]}
                          </span>
                          <span className="block text-lg md:text-xl lg:text-2xl font-semibold text-white/90 italic mt-1 tracking-wide">
                            —{t('slogan').split('—')[1]}
                          </span>
                        </div>
                        {i18n.language === 'ar' ? (
                          <span className="ml-4 hidden md:inline-block">
                            {/* Icon */}
                            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M3 12h18M12 3v18" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        className="relative z-10 mx-auto max-w-3xl py-4 text-center text-lg font-bold text-blue-100"
                    >
                        {t('maritimeHeroDesc')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1 }}
                        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                        >
                            <a href="#about">
                            <button className="w-60 transform rounded-lg bg-white text-blue-700 font-semibold px-6 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-100 shadow-md">
                                {t('buildWithUs')}
                            </button>
                            </a>
                        <a href="#contact">
                        <button className="w-60 transform rounded-lg border border-blue-200 bg-blue-50 text-blue-700 font-semibold px-6 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white shadow-md">
                            {t('contactUs')}
                        </button>
                        </a>
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
                                        className={`w-6 h-6 rounded-full transition-all duration-300 focus:outline-none mx-1 ${idx === current ? 'bg-blue-700' : 'bg-blue-200'
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* <div className="absolute z-0 h-[100vh] top-0 -left-44 max-[1379px]:hidden">
                <Auroraa
                    colorStops={["#2563eb", "#38bdf8", "#60a5fa", "#1e3a8a", "#0ea5e9"]}
                    amplitude={0.5}
                    speed={1.5}
                />
            </div> */}
           
        </>
        </section>

    )
}

<style>{`
@keyframes glass-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.before\:animate-glass-shimmer::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%);
  opacity: 0.7;
  filter: blur(4px);
  animation: glass-shimmer 2.5s linear infinite;
}
`}</style>




