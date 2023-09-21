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
      <div className="flex flex-col mt-5">
        <label htmlFor="mail">შეიყვანეთ თქვენი ელექტრონული ფოსტა</label>
        <input
          id="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="mb-5 border border-greyBorder p-2 outline-none focus:border-gray-600"
        />
      </div>
      <button
        type="submit"
        className=" p-2 bg-darkBlue text-white border border-darkBlue hover:text-darkBlue hover:bg-transparent transition-colors ease-in duration-100"
      >
        გაგზავნა
      </button>
    </form>
  );
};

export default EmailLink;
