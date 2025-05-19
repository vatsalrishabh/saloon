"use client";
import React from "react";
import Image from "next/image";
import aboutimg from "../../public/assets/aboutpg.avif";

const FirstAbout = () => {
  return (
    <div className="First-About bg-gray-50 p-8">
      {/* Top Heading */}
      <div className="top-heading flex justify-center p-6">
        <h1 className="text-5xl font-extrabold text-pink-600 font-serif tracking-wide">
          APUSALON
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="bot-heading grid lg:grid-cols-3 gap-8">
        {/* Image Section */}
        <div className="image-container relative group">
          <Image
            src={aboutimg}
            alt="ApuSalon Interior"
            width={500}
            height={500}
            className="rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-pink-600 bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>

        {/* Text Content 1 */}
        <div className="content space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 font-serif">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At ApuSalon, we aim to redefine grooming experiences with style,
            precision, and personal care. Located in the heart of Bangalore, we
            bring salon-quality services to our community with unmatched comfort
            and professionalism.
          </p>
          <button className="px-6 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:ring focus:ring-pink-300 transform transition hover:-translate-y-1">
            Learn More
          </button>
        </div>

        {/* Text Content 2 */}
        <div className="content space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 font-serif">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From stylish haircuts and beard grooming to facials and hair spa,
            ApuSalon offers a full range of grooming services for men and women.
            Book your slot online and enjoy professional care tailored to your
            preferences.
          </p>
          <button className="px-6 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:ring focus:ring-pink-300 transform transition hover:-translate-y-1">
            Explore Services
          </button>
        </div>
      </div>

      {/* Additional Section */}
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 font-serif">
          Why Choose ApuSalon?
        </h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          With years of experience and a passion for grooming excellence,
          ApuSalon delivers quality, hygiene, and personalized service that our
          clients in Bangalore trust. Step into our salon for a fresh look and a
          relaxing experience.
        </p>
        <button className="px-8 py-3 mt-6 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring focus:ring-gray-400 transform transition hover:-translate-y-1">
          Book Your Visit
        </button>
      </div>
    </div>
  );
};

export default FirstAbout;
