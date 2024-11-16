import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Palette, Gauge, Cloud, Shield, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Cross-Platform Development',
    description: 'Build once, deploy everywhere with Flutter. Native performance for iOS and Android.',
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: 'Performance Optimization',
    description: 'Smooth, responsive apps that perform flawlessly on any device.',
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Backend Integration',
    description: 'Seamless API integration and robust cloud infrastructure solutions.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'App Security',
    description: 'Enterprise-grade security measures to protect user data and privacy.',
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'Maintenance & Support',
    description: 'Ongoing support and updates to keep your app running perfectly.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive Flutter development solutions tailored to your needs
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;