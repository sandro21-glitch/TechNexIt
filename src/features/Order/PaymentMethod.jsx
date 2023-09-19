import { useState } from "react";
import { bankList } from "../../constants/bankList";

const PaymentMethod = ({ setPaymentMethod, paymentMethod }) => {
  const [activeBank, setActiveBank] = useState(null);
  const handleSelectType = (e) => {
    const selectedType = e.target.value;

    const updatedPaymentMethod =
      selectedType === "გადახდა პლასტიკური ბარათით"
        ? { type: selectedType, bank: "საქართველოს ბანკი" }
        : { type: selectedType };

    setPaymentMethod(updatedPaymentMethod);
  };
  const handleSelectBank = (name) => {
    setActiveBank(name);
    setPaymentMethod((prevState) => {
      return { ...prevState, bank: name };
    });
  };

  return (
    <div className="mb-7">
      <h6 className="mb-1">გადახდის მეთოდი</h6>
      <select
        onChange={handleSelectType}
        className="mb-3 border border-greyBorder p-2 focus:outline-none w-full cursor-pointer"
      >
        <option value="გადახდა პლასტიკური ბარათით">
          გადახდა პლასტიკური ბარათის მეშვეობით (Visa & Mastercard)
        </option>
        <option value="ონლაინ განვადების მეშვეობით">
          შეძენა ონლაინ განვადების მეშვეობით
        </option>
      </select>
      <div>
        {paymentMethod.type === "გადახდა პლასტიკური ბარათით" ? (
          <div className="relative max-w-[17rem] min-h-[4rem] p-2 border-2 border-gray-800 hover:border-gray-700 cursor-pointer">
            <img
              src="https://itworks.ge/images/payment/card-bog-logo.svg"
              alt="bog logo"
              className="w-full"
            />
          </div>
        ) : (
          <ul className="flex flex-col md:flex-row md:items-center items-start gap-5">
            {bankList.map((bank) => {
              return (
                <li
                  onClick={() => handleSelectBank(bank.name)}
                  key={bank.id}
                  className={`${
                    activeBank === bank.name
                      ? "border-2 border-gray-800"
                      : "border-2 border-greyBorder"
                  } relative w-full md:max-w-[17rem] min-h-[4rem] p-2  hover:border-gray-800 cursor-pointer`}
                >
                  <img src={bank.img} alt="bog logo" className="w-full " />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
