import { AiTwotoneHome, AiFillShop, AiFillUnlock } from "react-icons/ai";
import { BiLogoBlogger, BiGitCompare } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";

export default [
  {
    id: 1,
    icon: <AiTwotoneHome />,
    name: "მთავარი",
    path: "/",
  },
  {
    id: 2,
    icon: <AiFillShop />,
    name: "მაღაზია",
    path: "/shop",
  },
  {
    id: 3,
    icon: <BiLogoBlogger />,
    name: "ბლოგი",
    path: "/",
  },
  {
    id: 4,
    icon: <FaUsersCog />,
    name: "სერვისები",
    path: "/services",
  },
  {
    id: 5,
    icon: <BiGitCompare />,
    name: "განვადება",
    path: "/",
  },
];
