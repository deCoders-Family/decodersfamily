import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: "Flutter Intern",
      type: "Full-time",
      location: "Remote",
      description: "Kickstart your career in mobile development with our Flutter internship program.",
      requirements: [
        "Strong knowledge of Dart programming language",
        "Familiarity with Flutter framework",
        "Passion for learning and building mobile apps",
        "Enrolled in a computer science program",
      ]
    },
    {
      title: "UI/UX Designer Intern",
      type: "Full-time",
      location: "Hybrid",
      description: "Join our design team to create beautiful and intuitive user interfaces for mobile applications.",
      requirements: [
        "Experience with design tools (Figma/Sketch)",
        "Understanding of mobile design patterns",
        "Strong portfolio of UI/UX projects",
        "Enrolled in a design program",
      ]
    }
  ];

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

        {/* Updated Grid Container */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto">
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
                  <button className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 focus:outline-none">
                    Apply Now
                  </button>
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
            href="mailto:careers@decodersfamily.com"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Careers;
