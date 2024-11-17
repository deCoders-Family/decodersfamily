import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <motion.div 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">Last updated: March 1, 2024</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
          <p className="text-gray-600 mb-4">
            Decoders Family provides Flutter app development services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Mobile application development</li>
            <li>UI/UX design</li>
            <li>Technical consultation</li>
            <li>Maintenance and support</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All intellectual property rights in relation to our services, including copyrights, trademarks, and trade secrets, are owned by Decoders Family or its licensors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            Decoders Family shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact</h2>
          <p className="text-gray-600">
            For any questions regarding these Terms, please contact us at{' '}
            <a href="mailto:legal@decodersfamily.com" className="text-purple-600 hover:text-purple-700">
              legal@decodersfamily.com
            </a>
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default Terms;