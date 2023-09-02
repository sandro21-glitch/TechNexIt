import { Link } from "react-router-dom";
const SinglePageButton = ({ id, category }) => {
  return (
    <Link
      className="bg-veryLightBlue px-2 py-1 font-rexFontLight text-center text-white hover:text-veryLightBlue
        hover:bg-transparent border border-transparent 
        hover:border-veryLightBlue transition-colors
        ease-in duration-150"
      to={`/${category}/${id}`}
    >
      დაწვრილებით
    </Link>
  );
};

export default SinglePageButton;
