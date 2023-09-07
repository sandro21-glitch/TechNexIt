import { useState } from "react";
import { signUpUser } from "./authSlice";
import { useDispatch } from "react-redux";

const Register = ({ setIsOpen }) => {
  const [email, setEmail] = useState("vipsandro11@gmail.com");
  const [password, setPassword] = useState("21Panda1");
  const [name, setName] = useState("Sandro21");
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsOpen((prevState) => !prevState);
    dispatch(signUpUser({ email, password, name }));
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className="space-y-3 mt-5">
        <div className=" flex flex-col">
          <label htmlFor="email" className="mb-1">
            სახელი
          </label>
          <input
            type="name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 outline-none focus:border-gray-700 border-gray-500"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="email" className="mb-1">
            ელ. ფოსტა
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 outline-none focus:border-gray-700 border-gray-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1">
            პაროლი
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 outline-none focus:border-gray-700 border-gray-500"
          />
        </div>
      </div>
      <button type="submit" className="bg-yellow-400 p-2 mt-5 text-white">
        რეგისტრაცია
      </button>
    </form>
  );
};

export default Register;
