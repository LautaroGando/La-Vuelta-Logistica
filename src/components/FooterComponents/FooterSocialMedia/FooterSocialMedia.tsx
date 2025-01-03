import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const socialMediaLinks = [
  {
    icon: faInstagram,
    link: "https://www.instagram.com/lavuelta.logistica/",
    color: "hover:text-pink-500",
  },
  { icon: faLinkedin, link: "#", color: "hover:text-blue-600" },
  { icon: faFacebook, link: "#", color: "hover:text-blue-500" },
  { icon: faTiktok, link: "#", color: "hover:text-black" },
];

const FooterSocialMedia = () => {
  return (
    <div className="flex justify-between mt-4 px-[10%] sm:mt-6 sm:justify-start sm:px-0 sm:gap-6 lg:mt-0">
      {socialMediaLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center py-[7px] px-2 border border-pcSecondary rounded-[100%] w-[max-content] transition-all duration-300 
            hover:scale-110 ${item.color} hover:bg-pcSecondary
            lg:p-3
            `}
        >
          <FontAwesomeIcon icon={item.icon} className="text-[25px] lg:text-[36px]" />
        </a>
      ))}
    </div>
  );
};

export default FooterSocialMedia;