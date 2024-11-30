import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap -m-6">
          {/* Logo & Copyright Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-4/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-6 inline-flex items-center">
                <Logo width="120px" />
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  &copy; 2023 DevUI. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-4/12">
            <div className="h-full">
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
