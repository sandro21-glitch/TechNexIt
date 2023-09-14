import { useState } from "react";
import EmailLink from "./EmailLink";
const PasswordReset = () => {
  const [emailLinkComplete, setEmailLinkComplete] = useState(false);
  return (
    <div className="p-5">
      <h3>პაროლის შეცვლა</h3>
      <hr />
      {emailLinkComplete ? (
        <p className="mt-5 font-rexFontBold">
          პაროლის აღსადგენად შეამოწმეთ თქვენი მეილი
        </p>
      ) : (
        <EmailLink setEmailLinkComplete={setEmailLinkComplete} />
      )}
    </div>
  );
};

export default PasswordReset;
