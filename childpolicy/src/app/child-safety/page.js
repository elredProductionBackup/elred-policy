import React from "react";
import Header from "../_components/Header";
import CommitmentSection from "../_components/CommitmentSection";
import HelpSection from "../_components/HelpSection";
import Heading from "../_components/Heading";
import CollaborationAuthorities from "../_components/CollaborationAuthorities";
import ComplianceSection from "../_components/ComplianceSection";
import Contact from "../_components/Contact";
import AdditionalResources from "../_components/AdditionalResources";

const ChildSafety = () => {
  return (
    <div className="max-w-screenSize mx-auto pb-10 p-5 ">
      <Header />
      <CommitmentSection />
      <HelpSection />
      <CollaborationAuthorities />
      <ComplianceSection />
      <Contact />
      <AdditionalResources />
    </div>
  );
};

export default ChildSafety;
