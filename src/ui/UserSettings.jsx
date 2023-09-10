import { Link } from "react-router-dom";

const UserSettings = () => {
  return (
    <ul className="border border-greyBorder w-full">
      <li className="py-2 px-4 w-full border-b border-greyBorder cursor-pointer">
        <Link to="/account/user">პირადი ინფორმაცია</Link>
      </li>
      <li className="py-2 px-4 w-full border-b border-greyBorder cursor-pointer">
        <Link to="/account/passwordReset">პაროლის შეცვლა</Link>
      </li>
      <li className="py-2 px-4 w-full border-b border-greyBorder cursor-pointer">
        <Link to="/cart">კალათა</Link>
      </li>
      <li className="py-2 px-4 w-full cursor-pointer">შეკვეთები</li>
    </ul>
  );
};

export default UserSettings;
