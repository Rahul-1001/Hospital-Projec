import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-600">Prescripto</h2>
          <p className="text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
        </div>

        {/* Middle Section (Company Links) */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-700">Company</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">About us</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Delivery</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-900">Privacy policy</a></li>
          </ul>
        </div>

        {/* Right Section (Contact) */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-700">Get in Touch</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-500">+0-000-000-000</li>
            <li className="text-gray-500">greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-8 pt-4">
        <p className="text-center text-gray-500 text-sm">
          Copyright 2024 © Shubham && Rahul.dev - All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
