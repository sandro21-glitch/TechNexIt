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
      <div>
        <div>
          <label htmlFor="password">New Password</label>
          <input
            maxLength={20}
            id="password"
            type="password"
            value={password}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="main Password"
          />
        </div>
        <div>
          <label htmlFor="repeatPass"></label>
          <input
            maxLength={20}
            id="repeatPass"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPassword;
