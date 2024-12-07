import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Md. Shamsuzzaman',
    role: 'Lead Flutter Developer',
    image: 'https://i.pinimg.com/originals/da/19/26/da19269e0b293581937da7e295d21612.jpg?auto=format&fit=crop&q=80',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Mohaiminul Islam',
    role: 'UI/UX Designer',
    image: 'https://mohaiminulislam.netlify.app/images/profile.jpg?auto=format&fit=crop&q=80',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
  },


];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals behind our successful Flutter applications
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-purple-600">{member.role}</p>
                <div className="mt-4 flex space-x-4">
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-600">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-gray-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-gray-600">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;