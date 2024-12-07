import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const positions = [
  {
    title: "Senior Flutter Developer",
    type: "Full-time",
    location: "Remote",
    description: "We're looking for an experienced Flutter developer to join our team and lead complex mobile app development projects.",
    requirements: [
      "5+ years of mobile development experience",
      "3+ years of Flutter development",
      "Strong understanding of state management",
      "Experience with CI/CD pipelines",
    ],
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf8Zd6RU9K9YXPgFUYqL3qUZZrwVmzcYEXh7lI4DILpDzzpPg/viewform"
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Hybrid",
    description: "Join us in creating beautiful and intuitive user interfaces for our mobile applications.",
    requirements: [
      "3+ years of mobile UI/UX design experience",
      "Proficiency in Figma and design tools",
      "Understanding of mobile design patterns",
      "Portfolio of shipped applications",
    ],
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf8Zd6RU9K9YXPgFUYqL3qUZZrwVmzcYEXh7lI4DILpDzzpPg/viewform"
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote",
    description: "Help us build robust and scalable backend services for our mobile applications.",
    requirements: [
      "4+ years of backend development experience",
      "Strong knowledge of REST APIs",
      "Experience with cloud services (AWS/GCP)",
      "Understanding of microservices architecture",
    ],
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf8Zd6RU9K9YXPgFUYqL3qUZZrwVmzcYEXh7lI4DILpDzzpPg/viewform"
  }
];

const Careers = () => {
  return (
    <motion.div 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us build the future of mobile applications with Flutter. We're always looking for talented individuals to join our growing team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">{position.title}</h2>
                  <span className="px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-full">
                    {position.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Requirements:</h3>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <ArrowRight className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{position.location}</span>
                  <a
                    href={position.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Don't see a perfect match?</h2>
          <p className="text-gray-600 mb-6">
            We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8Zd6RU9K9YXPgFUYqL3qUZZrwVmzcYEXh7lI4DILpDzzpPg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Careers;