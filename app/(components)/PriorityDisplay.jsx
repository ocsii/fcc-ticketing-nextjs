import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start items-baseline">
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faFire}
          className={`pr-1 w-5 ${
            priority > index ? "text-red-400" : "text-slate-400"
          }`}
        />
      ))}
    </div>
  );
};

export default PriorityDisplay;
