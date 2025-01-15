import React from "react";
import Heading from "./Heading";

const HelpSection = () => {
  return (
    <>
      <Heading heading={"How you can help"} />
      <ul className="list-disc pl-8 mt-4 leading-normal">
        <li className="mb-2">
          <b>Stay Informed:</b> Learn how to recognize and report online threats
          by visiting trusted resources like Cyber Crime Reporting Portal
          (India), Childline India Foundation, Ministry of Women and Child
          Development, NCMEC, INHOPE, .
        </li>
        <li className="mb-4">
          <b>Report Immediately:</b> If you encounter any content or behavior
          related to CSAE on our platform, report it immediately via our in app
          report feature or contact our team directly.
        </li>
      </ul>
    </>
  );
};

export default HelpSection;
