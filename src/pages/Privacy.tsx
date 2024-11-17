import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <motion.div 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">Last updated: March 1, 2024</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Contact information (name, email, phone number)</li>
            <li>Project requirements and specifications</li>
            <li>Communication preferences</li>
            <li>Usage data and analytics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Provide and improve our services</li>
            <li>Communicate with you about your projects</li>
            <li>Send updates and marketing communications</li>
            <li>Analyze and enhance our website performance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about our Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@decodersfamily.com" className="text-purple-600 hover:text-purple-700">
              privacy@decodersfamily.com
            </a>
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default Privacy;