import { useState } from "react";
import { Link } from "react-router-dom";

const TermsCheckbox = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);

  return (
    <div className="font-rexFontLight flex items-center gap-2 mb-7">
      <input
        type="checkbox"
        onClick={() => setActiveCheckbox((prevState) => !prevState)}
        className="w-4 h-4 cursor-pointer"
        checked={activeCheckbox}
      />
      <p
        className="text-black cursor-pointer text-lg"
        onClick={() => setActiveCheckbox((prevState) => !prevState)}
      >
        გავეცანი და ვეთანხმები{" "}
        <Link className="text-darkBlue">საგარანტიო პირობებს</Link>
      </p>
    </div>
  );
};

export default TermsCheckbox;
