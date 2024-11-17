import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What technologies do you use for app development?",
      answer: "We primarily use Flutter for cross-platform mobile app development, along with other modern technologies like Firebase, REST APIs, and various backend solutions depending on project requirements."
    },
    {
      question: "How long does it take to develop an app?",
      answer: "Development time varies based on project complexity. A simple app might take 2-3 months, while more complex applications can take 4-6 months or longer. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your app continues to perform optimally. This includes bug fixes, updates, and feature enhancements."
    },
    {
      question: "What platforms can you develop for?",
      answer: "Using Flutter, we can develop apps for iOS, Android, and web platforms from a single codebase, ensuring consistent performance and user experience across all devices."
    },
    {
      question: "How do you handle app store submissions?",
      answer: "We manage the entire app store submission process for both Apple App Store and Google Play Store, including preparation of required assets, documentation, and compliance with store guidelines."
    }
  ];

  return (
    <motion.div 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="h-5 w-5 text-purple-600" />
              ) : (
                <Plus className="h-5 w-5 text-purple-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;