import React from "react";
import Heading from "./Heading";

const CommitmentSection = () => {
  return (
    <>
      <Heading heading={"Our Commitment to Child Safety"} />
      <div className="mt-3">
        To protect children and comply with global child safety laws and best
        practices, we have implemented the following measures:
      </div>
      <div className="ml-5 mt-4">
        <ol className="list-decimal">
          <li className="font-semibold">Strict Content Policies</li>
          <ul className="list-disc pl-4 mt-2 leading-normal">
            <li className="mb-2">
              Any material involving child sexual abuse, exploitation, or
              endangerment is strictly prohibited on our platform.
            </li>
            <li className="mb-4">
              Content that violates our policies is removed immediately, and
              appropriate action is taken against the violators, including
              account termination and reporting to law enforcement.
            </li>
          </ul>
          <li className="font-semibold">Prohibited Activities</li>
          <ul className="list-disc pl-4 mt-2 leading-normal">
            <li className="mb-2">
              We prohibit any content or behavior that promotes, glorifies, or
              facilitates CSAM or CSAE.
            </li>
            <li className="mb-4">
              This includes explicit content, grooming, exploitation, or any
              other actions that pose risks to children.
            </li>
          </ul>
          <li className="font-semibold">Reporting Mechanisms</li>
          <ul className="list-disc pl-4 mt-2 leading-normal">
            <li className="mb-2">
              Users can report any suspicious or inappropriate content or
              behavior through our in-app reporting feature.
            </li>
            <li className="mb-2">
              All reports are reviewed promptly, and severe violations,
              particularly those involving CSAM or CSAE, are escalated to law
              enforcement and relevant child protection organizations.
            </li>
            <li className="mb-4">
              Reports can also be submitted via email at{" "}
              <span className="text-red-500 font-semibold">
                ritika@elred.io
              </span>
              .
            </li>
          </ul>
          <li className="font-semibold">User Education and Parental Support</li>
          <ul className="list-disc pl-4 mt-2 leading-normal">
            <li className="mb-2">
              We provide resources to help users identify and report child
              safety concerns.
            </li>
            <li className="mb-2">
              Educational materials on recognizing and preventing online
              exploitation are available through our support center.
            </li>
            <li className="mb-4">
              While our platform is restricted to users aged 13 and above, we
              encourage parents and guardians to monitor their children&apos;s
              use of online platforms. We encourage the use of el RED only by
              individuals aged 13 and above, as per our terms of service.
            </li>
          </ul>
          <li className="font-semibold">Privacy and Data Security</li>
          <ul className="list-disc pl-4 mt-2 leading-normal">
            <li className="mb-2">
              We ensure that all user data, especially data involving minors, is
              handled securely and in compliance with privacy laws like COPPA
              (USA), GDPR (EU), The Information Technology Act, 2000 and
              Personal Data Protection Bill, 2019.
            </li>
            <li className="mb-2">
              Our platform is intended for users aged 13 and above. We actively
              monitor accounts to identify and restrict access to underage
              users.
            </li>
          </ul>
        </ol>
      </div>
    </>
  );
};

export default CommitmentSection;
