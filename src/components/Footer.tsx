import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Decoders Family
            </span>
            <p className="mt-4 text-sm text-gray-400">
              Transforming ideas into exceptional Flutter applications. Building the future of mobile experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">Portfolio</a>
                </li>
                <li>
                  <a href="#team" className="text-gray-400 hover:text-purple-400 transition-colors">Team</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full rounded-l-md bg-gray-800 border-gray-700 text-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-r-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Decoders Family. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;