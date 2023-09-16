import { useState } from "react";
import { signUpUser } from "./authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { isValidEmail } from "../../utils/emailValid";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useQuery } from "react-query";
import { findUserEmail } from "../../services/apiUser";

const Register = ({ setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  // Use React Query to check if the email already exists in the database
  const { data: checkEmail } = useQuery({
    queryKey: ["users", email],
    queryFn: () => findUserEmail(email),
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast.error("Ყველა ველის შევსება აუცილებელია.");
      return;
    }
    if (checkEmail.length > 0) {
      toast.error(
        "ეს ელფოსტის მისამართი უკვე დაკავშირებულია არსებულ ანგარიშთან. გთხოვთ, გამოიყენოთ სხვა ელფოსტის მისამართი ან სცადოთ შესვლა, თუ ეს თქვენი ანგარიშია"
      );
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("ელფოსტის მისამართი არასწორია.");
      return;
    }

    if (password.length < 6) {
      toast.error("პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო.");
      return;
    }
    setIsOpen((prevState) => !prevState);
    dispatch(signUpUser({ email, password, name }));
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className="space-y-3 mt-5">
        <div className=" flex flex-col">
          <label htmlFor="name" className="mb-1">
            სახელი
          </label>
          <input
            type="name"
            name="name"
            id="name"
            maxLength={20}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-gray-500 border p-2 outline-none focus:border-gray-700"
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
            className="border-gray-500 border p-2 outline-none focus:border-gray-700"
          />
        </div>
        <div className="flex flex-col relative">
          <label htmlFor="password" className="mb-1">
            პაროლი
          </label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-gray-500 border p-2 outline-none focus:border-gray-700 "
          />
          <div
            onClick={() => setShowPass((prevState) => !prevState)}
            className="absolute top-1/2 mt-[.1rem] right-3 text-[1.5rem] cursor-pointer"
          >
            {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
      </div>
      <button type="submit" className="bg-yellow-400 p-2 mt-5 text-white">
        რეგისტრაცია
      </button>
    </form>
  );
};

export default Register;
