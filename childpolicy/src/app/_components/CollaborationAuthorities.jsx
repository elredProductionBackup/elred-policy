import React from "react";
import Heading from "./Heading";

const CollaborationAuthorities = () => {
  return (
    <>
      <Heading heading={"Collaboration with Authorities"} />
      <div className="mt-3">
        We work closely with agencies to report and investigate CSAE cases,
        including:
      </div>
      <ul className="list-disc pl-8 mt-4 leading-normal">
        <li className="mb-2">
          Law enforcement agencies for the investigation and removal of CSAM.
        </li>
        <li className="mb-4">
          National and international child protection organizations to ensure
          compliance with global child safety standards.
        </li>
      </ul>
    </>
  );
};

export default CollaborationAuthorities;
