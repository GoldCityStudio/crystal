'use client';

import { ArrowRightIcon } from './icons';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            MID YEAR SALE
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            UP TO 15% OFF
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover our premium collection of healing crystals and spiritual jewelry. 
            Each piece is carefully selected for its beauty and energy properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 flex items-center justify-center">
              Shop Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
    </section>
  );
} 