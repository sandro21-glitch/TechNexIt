import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { resetPassword } from "../../../services/apiUser";

const EmailLink = ({ setEmailLinkComplete }) => {
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();
  const { mutate: updatePassword } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      queryClient.invalidateQueries("resetPassword");
      setEmailLinkComplete(true);
    },
    onError: () => {
      setEmailLinkComplete(false);
    },
  });
  const handleResetPassword = (e) => {
    e.preventDefault();
    updatePassword(email);
  };
  return (
    <form onSubmit={handleResetPassword}>
      <div className="flex flex-col">
        <label htmlFor="email">შეიყვანეეთ თქვენი ელექტრონული ფოსტა</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="border border-greyBorder p-2 outline-none focus:border-gray-600"
        />
        <button type="submit">გადასვლა</button>
      </div>
    </form>
  );
};

export default EmailLink;
