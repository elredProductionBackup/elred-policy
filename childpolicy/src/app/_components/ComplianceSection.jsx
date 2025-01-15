import React from "react";
import Heading from "./Heading";

const ComplianceSection = () => {
  return (
    <>
      <Heading heading={"Compliance with Child Safety Laws"} />
      <div className="mt-3">
        We comply with all relevant Indian laws and regulations, including:
      </div>
      <ul className="list-disc pl-8 mt-4 leading-normal">
        <li className="mb-2">
          The Protection of Children from Sexual Offences (POCSO) Act, 2012: A
          comprehensive law to safeguard children from sexual abuse and
          exploitation.
        </li>
        <li className="mb-2">
          The Information Technology (IT) Act, 2000: Provisions under Section
          67B prohibit publishing or transmitting material depicting children in
          sexually explicit acts.
        </li>
        <li className="mb-4">
          Juvenile Justice (Care and Protection of Children) Act, 2015:
          Safeguards for children in vulnerable situations.
        </li>
      </ul>
    </>
  );
};

export default ComplianceSection;
