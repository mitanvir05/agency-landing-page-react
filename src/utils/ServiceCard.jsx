import React from "react";
import ServiceTikIcon from "../icons/ServiceTikIcon";

const ServiceCard = ({ title, desc, items, note }) => {
  return (
    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-8 font-light lg:text-xl">{desc}</p>

      <ul
        role="list"
        className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
      >
        {items.map((item, index) => (
          <li key={index} className="flex space-x-3">
            <ServiceTikIcon />
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <p className=" font-light lg:text-xl">{note}</p>
    </div>
  );
};

export default ServiceCard;
