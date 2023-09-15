import React from "react";

const QuantityDisplay = ({ count, label }) => {
  return (
    <div className="border border-greyBorder text-center mb-7">
      <h4 className="p-10 mb-0 font-rexFontBold tracking-widest">
        {label}
        <span className="font-bold mx-2 text-darkBlue font-sans">{count}</span>
        {label === "თქვენს კალათაში არის" ? "პროდუქტი" : "შეკვეთა"}
      </h4>
    </div>
  );
};
export default QuantityDisplay;
