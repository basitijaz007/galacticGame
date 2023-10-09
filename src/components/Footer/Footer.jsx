import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">OUR ADDRESS</h4>
            <p className="text-gray-300">12345 Porto Blvd.</p>
            <p className="text-gray-300">Suite 1500</p>
            <p className="text-gray-300">Los Angeles, California 90000</p>
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">OUR CONTACTS</h4>
            <div className="mb-4">
              <p className="text-gray-300 ">SUPPORT</p>
              <a
                href="tel:+1234567890"
                className="text-3xl text-white font-bold"
              >
                800-123-4567
              </a>
            </div>
            <div>
              <p className="text-gray-300">SALES</p>
              <a href="tel:+1234567890" className="text-white text-3xl font-bold">
                800-123-4568
              </a>
            </div>
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">USEFUL LINKS</h4>
            <ul>
              <li>
                <a href="demo-it-services-services.html" className="text-lg text-gray-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-300">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-300">
                  Services Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">OUR SERVICES</h4>
            <ul>
              <li>
                <a
                  href="demo-it-services-services-detail.html"
                  className="text-lg text-gray-300"
                >
                  Cloud Services
                </a>
              </li>
              <li>
                <a
                  href="demo-it-services-services-detail.html"
                  className="text-lg text-gray-300"
                >
                  Tech Support
                </a>
              </li>
              <li>
                <a
                  href="demo-it-services-services-detail.html"
                  className="text-lg text-gray-300"
                >
                  Data Security
                </a>
              </li>
              <li>
                <a
                  href="demo-it-services-services-detail.html"
                  className="text-lg text-gray-300"
                >
                  Software Dev
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-700">
        <div className="container mx-auto">
          <hr className="border-t border-blue-800 opacity-50" />
          <div className="flex justify-between items-center py-6">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <a href="demo-it-services.html">
                <img
                  alt="Porto"
                  width="115"
                  height="30"
                  src="http://127.0.0.1:5500/img/demos/it-services/logo.png"
                />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg opacity-75">
                Porto IT Services. © 2023. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
