import React from "react";
import AirbnbIcon from "../icons/AirbnbIcon";
import GoogleIcon from "../icons/GoogleIcon";
import MicrosoftIcon from "../icons/MicrosoftIcon";
import SpotifyIcon from "../icons/SpotifyIcon";
import MailChimpIcon from "../icons/MailChimpIcon";
import MashableIcon from "../icons/MashableIcon";

const CompaniesLogo = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" className="flex items-center lg:justify-center">
            <AirbnbIcon />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <GoogleIcon />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <MicrosoftIcon />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <SpotifyIcon />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <MailChimpIcon />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <MashableIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompaniesLogo;
