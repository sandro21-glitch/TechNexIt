import { FaCubes } from "react-icons/fa";

const AmountCheck = ({ amount }) => {
  if (amount < 1) {
    return (
      <div className="cursor-default p-2 flex items-center gap-2 bg-darkRed w-fit mb-5 text-white">
        <span>
          <FaCubes />
        </span>
        <span>წინასწარი შეკვეთით</span>
      </div>
    );
  }
  return (
    <div className="cursor-default p-2 flex items-center gap-2 bg-lightBlue w-fit mb-5 text-white">
      <span>
        <FaCubes />
      </span>
      <span>მარაგშია</span>
    </div>
  );
};

export default AmountCheck;
