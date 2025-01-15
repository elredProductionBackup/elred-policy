import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { links } from "@/data";

const AdditionalResources = () => {
  return (
    <>
      <Heading heading={"Additional Resources"} />
      <ul className="list-disc pl-8 mt-4 leading-normal">
        {links?.map((link, index) => (
          <li key={index} className="mb-2 ">
            <Link href={link?.url} className="underline text-red-500">
              <span className="cursor-pointer">{link?.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdditionalResources;
