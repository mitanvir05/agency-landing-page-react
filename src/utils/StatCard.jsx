import React from "react";

const StatCard = ({ icon, title, desc }) => {
  return (
    <div>
      {icon}
      <h3 className="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400">{desc}</p>
    </div>
  );
};

export default StatCard;
