import { NavLink } from "react-router-dom";

const UserSettings = () => {
  return (
    <ul className="border border-greyBorder w-full">
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
            };
          }}
          to="/account/user"
          className="flex py-2 px-4 w-full border-b border-greyBorder cursor-pointer"
        >
          პირადი ინფორმაცია
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
            };
          }}
          to="/account/passwordReset"
          className="flex py-2 px-4 w-full border-b border-greyBorder cursor-pointer"
        >
          პაროლის შეცვლა
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className="flex py-2 px-4 w-full border-b border-greyBorder cursor-pointer"
        >
          კალათა
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/confirmedOrders"
          className="flex py-2 px-4 w-full cursor-pointer"
        >
          შეკვეთები
        </NavLink>
      </li>
    </ul>
  );
};

export default UserSettings;
