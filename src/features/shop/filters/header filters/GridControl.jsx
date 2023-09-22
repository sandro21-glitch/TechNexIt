import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
const GridControl = ({ setIsGrid, isGrid }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setIsGrid(true)}
        className={`${
          isGrid ? "bg-darkBlue text-white" : "bg-white text-black"
        }  p-2 rounded-sm border border-greyBorder`}
      >
        <BsFillGridFill />
      </button>
      <button
        onClick={() => setIsGrid(false)}
        className={`${
          !isGrid ? "bg-darkBlue text-white" : "bg-white text-black"
        }  p-2 rounded-sm border border-greyBorder`}
      >
        <AiOutlineMenu />
      </button>
    </div>
  );
};

export default GridControl;
