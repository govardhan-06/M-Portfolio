"use client";
import React from "react";
import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      {/* Animated 404 Text */}
      <div className="relative">
        <h1 className="text-9xl font-extrabold tracking-tight lg:text-[12rem]">
          404
        </h1>
      </div>

      {/* Description */}
      <p className="mt-4 text-lg lg:text-xl text-gray-600 text-center max-w-xl">
      The page you&apos;re looking for doesn&rsquo;t exist or has been moved. 
      But don&rsquo;t worry, let&rsquo;s get you back on track.
      </p>
      {/* Button */}
      <Link href="/" passHref>
        <button className="mt-6 px-8 py-3 text-white bg-black rounded-lg text-lg font-medium hover:bg-gray-800 transition duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Custom404;
