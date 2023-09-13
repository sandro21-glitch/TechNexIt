import { useSelector } from "react-redux";
import { useUser } from "../../hooks/useUser";
const UserOrderInfo = () => {
  const { user } = useSelector((store) => store.auth);
  const { userData, isLoading, isError } = useUser(user?.user.id);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  return (
    <div className="flex items-center justify-between gap-10 mb-7">
      <div className="flex flex-col flex-1">
        <label htmlFor="name" className="mb-1">
          შემკვეთის სახელი და გვარი
        </label>
        <input
          id="name"
          type="text"
          value={userData.name ? userData.name : ''}
          className="p-2 focus:outline-none border border-greyBorder"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label htmlFor="number" className="mb-1">
          შემკვეთის ტელეფონი
        </label>
        <input
          id={userData.number}
          type="text"
          value="571909528"
          className="p-2 focus:outline-none border border-greyBorder"
        />
      </div>
    </div>
  );
};

export default UserOrderInfo;
