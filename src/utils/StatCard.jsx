import React from "react";
import StatIcon1 from "../icons/StatIcon1";

const StatCard = ({ icon, title, desc }) => {
  return (
    <div>
      {icon}
      <h3 class="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
      <p class="font-light text-gray-500 dark:text-gray-400">{desc}</p>
    </div>
  );
};

export default StatCard;
