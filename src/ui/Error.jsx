import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="font-rexFontBold min-h-[70vh] flex justify-center flex-col items-center">
      <p className=" text-[10rem] mb-0">404</p>
      <p className="mb-5">მოთხოვნილი გვერდი ვერ მოიძებნა!</p>
      <Link
        to={navigate(-1)}
        className="border border-darkBlue p-2 bg-darkBlue text-white hover:text-darkBlue hover:bg-transparent"
      >
        მთავარზე დაბრუნება
      </Link>
    </div>
  );
};

export default Error;
