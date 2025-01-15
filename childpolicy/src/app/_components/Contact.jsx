import React from "react";
import Heading from "./Heading";

const Contact = () => {
  return (
    <>
      <Heading heading={"Contact Us"} />
      <div className="mt-3">
        For any concerns or inquiries related to child safety on our platform,
        please contact us:
      </div>
      <ul className="list-disc pl-8 mt-4 leading-normal">
        <li className="mb-2">
          <span className="font-semibold">Email:</span>{" "}
          <span className="text-red-500 font-semibold">ritika@elred.io</span>
        </li>
      </ul>
      <div className="mt-3">
        Together, we can create a safer online environment for everyone.
      </div>
    </>
  );
};

export default Contact;
