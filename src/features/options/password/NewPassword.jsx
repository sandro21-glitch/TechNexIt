import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { newPassword } from "../../../services/apiUser";

const NewPassword = () => {
  const [password, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const queryClient = useQueryClient();
  const { mutate: getNewPass } = useMutation({
    mutationFn: newPassword,
    onSuccess: () => {
      queryClient.invalidateQueries("changePassword");
    },
    onError: (error) => {
      alert.error(error);
    },
  });

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (password !== "") {
      if (password === repeatPassword) {
        getNewPass(password);
      } else {
        alert("password is incorrect");
      }
    } else {
      alert("pasword is empty");
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
