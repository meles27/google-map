import React from "react";
import withAnimation from "../../components/route-animation/withAnimation";
import Hero from "../../components/site/Hero";

const HomePage: React.FC = () => {
  /**
   * Checks if the token has expired and logs the user out if it has.
   */

  return (
    <div className="flex flex-col">
      <Hero />
    </div>
  );
};

export default withAnimation(HomePage);
