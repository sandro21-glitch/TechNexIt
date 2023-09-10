import { BiSolidRightArrowAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const SinglePageHeader = ({ category, name }) => {
  return (
    <div className="border-4 border-double border-greyBorder py-2 mb-14">
      <div className="section-center flex items-center flex-wrap justify-between md:justify-normal gap-5 ">
        <Link to="/" className="cursor-pointer text-darkBlue text-xl">
          <AiFillHome />
        </Link>
        <span className="text-xl">
          <BiSolidRightArrowAlt />
        </span>
        <p className="capitalize font-rexFontLight">{category}</p>
        {name ? (
          <span className="text-xl">
            <BiSolidRightArrowAlt />
          </span>
        ) : (
          ""
        )}
        <p>{name ? name : ""}</p>
      </div>
    </div>
  );
};

export default SinglePageHeader;
