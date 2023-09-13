import { useState } from "react";

const PaymentMethod = () => {
  const [ctiveCheckbox, setActiveCheckbox] = useState(false);
  return (
    <div className="mb-7">
      <h6 className="mb-1">გადახდის მეთოდი</h6>
      <select className="mb-3 border border-greyBorder p-2 focus:outline-none w-full cursor-pointer">
        <option value="">
          გადახდა პლასტიკური ბარათის მეშვეობით (Visa & Mastercard)
        </option>
        <option value="">შეძენა ონლაინ განვადების მეშვეობით</option>
      </select>
      <div>
        <div
          onClick={() => setActiveCheckbox((prevState) => !prevState)}
          className="relative max-w-[17rem] p-2 border border-greyBorder hover:border-gray-700 cursor-pointer"
        >
          <img
            src="https://itworks.ge/images/payment/card-bog-logo.svg"
            alt="bog logo"
            className="w-full "
          />
          <div className="absolute right-2 bottom-0">
            <input
              type="checkbox"
              checked={ctiveCheckbox}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
