import { useEffect, useState } from "react";

const UserOrderInfo = ({ userFullName, setUserFullName }) => {
  const [name, setName] = useState(userFullName.name || "");
  const [number, setNumber] = useState(userFullName.number || "");

  const handleUpdateUserInfo = () => {
    setUserFullName({ name, number });
  };

  useEffect(() => {
    handleUpdateUserInfo();
  }, [name, number]);

  return (
    <div className="flex items-center justify-between gap-10 mb-7">
      <div className="flex flex-col flex-1">
        <label htmlFor="name" className="mb-1">
          შემკვეთის სახელი და გვარი
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 focus:outline-none border border-greyBorder"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label htmlFor="number" className="mb-1">
          შემკვეთის ტელეფონი
        </label>
        <input
          id="number"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="p-2 focus:outline-none border border-greyBorder"
        />
      </div>
    </div>
  );
};

export default UserOrderInfo;
