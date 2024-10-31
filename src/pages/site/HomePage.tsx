import React from "react";
import withAnimation from "../../components/route-animation/withAnimation";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  /**
   * Checks if the token has expired and logs the user out if it has.
   */

  return (
    <div className="bg-neutral-950 text-primary-50 py-20 h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-start">
          <div className="flex flex-[3] flex-col gap-lg">
            <header className="flex flex-col gap-sm">
              <Typography className="flex text-6xl gap-x-sm">
                Welcome to
                <span className="text-indigo-500">Tigray</span>
              </Typography>
              <Typography variant="h5">
                Explore the Rich Tapestry of Faith
              </Typography>
            </header>
            <p className="text-sm md:text-xl text-gray-400 mb-8">
              Uncover the profound history and diverse religious traditions that
              shape Tigray's spiritual landscape. From the ancient rock-hewn
              churches of Lalibela to the vibrant religious festivals in Axum,
              our site invites you to journey through time and experience the
              sacred sites that have influenced generations.
            </p>
            <Typography variant="h4">
              Join us in celebrating Tigray's unique religious heritage and its
              impact on culture, art, and community.
            </Typography>
            <div className="flex gap-2">
              <Link
                to="/map"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
          <div className="flex-[2] min-w-[400px]">
            <img
              src="/image.jpg"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAnimation(HomePage);
