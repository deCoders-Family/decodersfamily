import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: 'Discovery',
    description: 'We analyze your requirements and create a detailed project roadmap.',
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Development',
    description: 'Our team builds your app using Flutter\'s latest features.',
  },
  {
    icon: <TestTube className="h-8 w-8" />,
    title: 'Testing',
    description: 'Rigorous testing ensures your app works flawlessly.',
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'Deployment',
    description: 'We handle the app store submission and launch process.',
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Process</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to turning your vision into reality
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gray-200 -translate-y-1/2" />
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white relative z-10 flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-center text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;