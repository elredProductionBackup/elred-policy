import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="text-xl uppercase font-semibold tracking-tight mt-6">
      {heading}
    </div>
  );
};

export default Heading;
