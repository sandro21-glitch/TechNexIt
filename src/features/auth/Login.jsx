import { useState } from "react";
import { isValidEmail } from "../../utils/emailValid";
import { useDispatch } from "react-redux";
import { signIn } from "./authSlice";
import toast from "react-hot-toast";

const Login = ({ setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    // check if email or password is missing
    if (!email || !password) {
      toast.error("გთხოვთ შეავსოთ როგორც ელექტრონული ფოსტა, ასევე პაროლი.");
      return;
    }

    // check if the email is valid using the emailValid function
    if (!isValidEmail(email)) {
      toast.error("Გთხოვთ შეიყვანოთ სწორი ელ - ფოსტის მისამართი.");
      return;
    }

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
            minLength={6}
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
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-transparent hover:text-yellow-400 border border-yellow-400 p-2 text-white transition-colors ease-in duration-150"
        >
          შესვლა
        </button>
        <button
          type="button"
          className="bg-darkBlue hover:text-darkBlue hover:bg-transparent border border-darkBlue p-2 text-white transition-colors ease-in duration-150"
        >
          პაროლის აღდგენა
        </button>
      </div>
    </form>
  );
};

export default Login;
