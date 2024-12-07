import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Ideas Into</span>
              <span className="block text-purple-600">
                Beautiful Flutter Apps
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We're a passionate team of Flutter developers creating exceptional
              cross-platform mobile experiences that delight users and drive
              business growth.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#portfolio"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 border-purple-100 md:py-4 md:text-lg md:px-10"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80"
                  alt="Mobile app development"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20"></div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 flex space-x-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
