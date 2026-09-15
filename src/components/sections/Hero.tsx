'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: "https://wabflow.b-cdn.net/paniit/landing/image_2026-09-15_120838444.png",
    alt: "PanIIT Andhra Pradesh Summit 2026 - Banner Slide 1",
  },
  {
    id: 2,
    image: "https://wabflow.b-cdn.net/paniit/landing/image_2026-09-15_120838444.png",
    alt: "PanIIT Andhra Pradesh Summit 2026 - Banner Slide 2",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full pt-[80px] sm:pt-[90px] lg:pt-[205px] bg-white flex flex-col justify-between overflow-hidden" id="hero">
      
      {/* FULL WIDTH BANNER CAROUSEL - Exact 16:9 ratio */}
      <div 
        className="w-full aspect-[16/9] relative overflow-hidden bg-slate-900 shadow-sm group select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000 || offset.x < -60) {
                nextSlide();
              } else if (swipe > 10000 || offset.x > 60) {
                prevSlide();
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            <img
              src={SLIDES[currentIndex].image}
              alt={SLIDES[currentIndex].alt}
              className="w-full h-full object-cover pointer-events-none"
              loading={currentIndex === 0 ? "eager" : "lazy"}
              // @ts-expect-error fetchpriority attribute
              fetchpriority={currentIndex === 0 ? "high" : "auto"}
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg opacity-80 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg opacity-80 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 sm:bottom-6 inset-x-0 z-20 flex items-center justify-center gap-2">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full h-2 sm:h-2.5 ${
                idx === currentIndex
                  ? 'w-7 sm:w-9 bg-[#DD1D21] shadow-md'
                  : 'w-2 sm:w-2.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter Badge */}
        <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-20 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {currentIndex + 1} / {SLIDES.length}
        </div>
      </div>
        
      {/* BOTTOM ROW - Event Details menu style */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="w-full bg-white backdrop-blur-md py-8 px-4 mt-8"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col text-center md:text-left">
            <h3 className="font-black text-[#06206A] text-lg uppercase tracking-wide">Date & Time</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-[#06206A]">
              <Calendar size={20} className="text-[#DD1D21]" />
              <span className="font-bold">3rd October, 2026</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-[#06206A]/20"></div>

          <div className="flex flex-col text-center md:text-left flex-1 max-w-lg">
            <h3 className="font-black text-[#06206A] text-lg uppercase tracking-wide">Venue</h3>
            <a 
              href="https://www.google.com/maps/dir//Dr.+B.+R.+Ambedkar'+Kala+Vedika,+GJ5J%2B8P2,+Buckinghampeta,+Vijayawada,+Andhra+Pradesh+520002/@19.1443224,72.9106087,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a35f100214ca94f:0xed340268dedead72!2m2!1d80.6317745!2d16.5082645"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center md:justify-start gap-2 mt-2 text-[#06206A] hover:text-[#DD1D21] transition-colors"
            >
              <MapPin size={20} className="text-[#DD1D21] group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="font-bold leading-tight">
                Dr. B. R. Ambedkar Kala Vedika, Vijayawada, AP
                <span className="block text-xs uppercase tracking-wider text-[#DD1D21] mt-1 opacity-80 group-hover:opacity-100">Get Directions &rarr;</span>
              </span>
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
