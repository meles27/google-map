/* eslint-disable react-refresh/only-export-components */
import React from "react";
import withAnimation from "../../components/route-animation/withAnimation";

const DashboardHomePage: React.FC = () => {
  return (
    <div className="bg-neutral-950 text-primary-50 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 lg:w-2/3">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
              Welcome to our <br className="hidden md:block" />
              <span className="text-indigo-500">Awesome</span> Dashboard Page
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
              We create beautiful and functional websites for businesses of all
              sizes.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md"
              >
                Get Started
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
            <img
              src="https://cdn.prod.website-files.com/65943d23dc44e6ce92eb6b67/65fc9f534c1398dac499304d_commercial_search-p-800.jpg"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// export default WithAnimation(DashboardHomePage);
export default withAnimation(DashboardHomePage);
