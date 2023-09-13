import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { newPassword } from "../../../services/apiUser";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userSignOut } from "../../auth/authSlice";

const NewPassword = () => {
  const dispatch = useDispatch();
  const [password, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const queryClient = useQueryClient();

  const handleUserLogout = () => {
    dispatch(userSignOut())
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Logout failed:", error);
      });
  };
  const { mutate: getNewPass } = useMutation({
    mutationFn: newPassword,
    onSuccess: () => {
      queryClient.invalidateQueries("changePassword");
      toast.success(
        "Თქვენი პაროლი შეიცვალა. გთხოვთ, შეხვიდეთ ხელახლა ახალი პაროლით თქვენს ანგარიშზე"
      );
      setTimeout(() => {
        handleUserLogout();
      }, 3000);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (password !== "") {
      if (password === repeatPassword) {
        getNewPass(password);
      } else {
        toast.error("password is incorrect");
      }
    } else {
      toast.error("pasword is empty");
      return;
    }
  };

  return (
    <form onSubmit={handleUpdatePassword}>
      <div className=" p-5">
        <div className="flex flex-col mb-5">
          <div className="flex flex-col mb-5">
            <label htmlFor="mainPass">ახალი პაროლი</label>
            <input
              maxLength={20}
              id="mainPass"
              type="password"
              value={password}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border border-greyBorder focus:outline-none p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="repeatPass">გაიმეორეთ პაროლი</label>
            <input
              maxLength={20}
              id="repeatPass"
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="border border-greyBorder focus:outline-none p-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="border border-darkBlue bg-darkBlue text-white hover:bg-transparent hover:text-darkBlue px-4 py-1"
        >
          პაროლის განახლება
        </button>
      </div>
    </form>
  );
};

export default NewPassword;
