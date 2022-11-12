import React from "react";

// Components.
import GreetingCard from "../theme/GreetingCard/GreetingCard";

/****************************************
 * Landing.tsx -
 ****************************************/
const Landing = () => {
  // Render.
  return (
    <div id="landing" className="landing" style={{ minHeight: "900px" }}>
      <GreetingCard />
    </div>
  );
};

export default Landing;
