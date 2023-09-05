import { useState } from "react";

import { useDispatch } from "react-redux";
import { signIn } from "./authSlice";

const Login = ({ setIsOpen }) => {
  const [email, setEmail] = useState("vipsandro11@gmail.com");
  const [password, setPassword] = useState("21Panda1");

  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsOpen((prevState) => !prevState);
    dispatch(signIn({ email, password }));
  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="space-y-3 mt-5">
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
      <div className="flex flex-col items-start gap-5 mt-5 font-rexFontLight">
        <button type="submit" className="bg-yellow-400 p-2 text-white">
          Login
          {/* {!isLoading ? "ავტორიზაცია" : "Loading..."} */}
        </button>
        <button type="button" className="bg-darkBlue p-2 text-white">
          პაროლის აღდგენა
        </button>
      </div>
    </form>
  );
};

export default Login;
