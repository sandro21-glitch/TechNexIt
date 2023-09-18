import React, { useState } from "react";
import { AiFillCopy } from "react-icons/ai";

const CopyOrderId = ({ orderId }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(orderId).then(() => {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    });
  };

  return (
    <button
      onClick={handleCopyClick}
      className={`flex items-center gap-1 border border-gray-500 bg-gray-500 p-1 hover:bg-transparent text-white hover:text-gray-500 ${
        isCopied ? "bg-green-600 hover:text-green-600 border-green-600" : ""
      }`}
    >
      <AiFillCopy />
      <span>{isCopied ? "აიდი დაკოპირდა" : "აიდის დაკოპირება"}</span>
    </button>
  );
};

export default CopyOrderId;
