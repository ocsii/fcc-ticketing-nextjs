import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-gray-200";
    switch (status) {
      case "new":
        color = "bg-green-200";
        return color;
      case "in-progress":
        color = "bg-yellow-200";
        return color;
      case "completed":
        color = "bg-red-200";
        return color;
      default:
        color = "bg-gray-200";
        return color;
    }
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
