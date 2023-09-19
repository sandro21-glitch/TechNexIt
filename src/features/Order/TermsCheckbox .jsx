import { Link } from "react-router-dom";

const TermsCheckbox = ({ termsCheckbox, setTermsCheckbox }) => {
  return (
    <div
      className="font-rexFontLight flex items-center gap-2 mb-7"
      onClick={() => setTermsCheckbox((prevState) => !prevState)}
    >
      <input
        type="checkbox"
        // onChange={() => setTermsCheckbox((prevState) => !prevState)}
        className="w-4 h-4 cursor-pointer"
        checked={termsCheckbox}
      />
      <p
        className="text-black cursor-pointer text-lg"
        onChange={() => setTermsCheckbox((prevState) => !prevState)}
      >
        გავეცანი და ვეთანხმები{" "}
        <Link className="text-darkBlue">საგარანტიო პირობებს</Link>
      </p>
    </div>
  );
};

export default TermsCheckbox;
