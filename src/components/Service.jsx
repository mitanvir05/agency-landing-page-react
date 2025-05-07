import React from "react";
import featureImg1 from "../assets/features/feature-1.png";
import featureImg2 from "../assets/features/feature-2.png";
import ServiceCard from "../utils/ServiceCard";

const Service = () => {
  const description =
    "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.";
  const note =
    "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.";

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <ServiceCard
            title="Work with tools you already use"
            desc={description}
            items={[
              "Continuous integration and deployment",
              "Development workflow",
              "Knowledge management",
            ]}
            note={note}
          />
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={featureImg1}
            alt="dashboard feature image"
          />
        </div>

        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={featureImg2}
            alt="feature image 2"
          />
          <ServiceCard
            title="We invest in the world’s potential"
            desc={description}
            items={[
              "Dynamic reports and dashboards",
              "Templates for everyone",
              "Development workflow",
              "Limitless business automation",
              "Knowledge management",
            ]}
            note={note}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
