import { BsFillCpuFill, BsGpuCard, BsFillDeviceSsdFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
const ProductInfo = ({ cpu, gpu, ssd, ram }) => {
  return (
    <ul className="flex flex-col gap-2 text-xs">
      <li className="flex gap-2">
        <BsFillCpuFill />
        <p>{cpu}</p>
      </li>
      <li className="flex gap-2">
        <BsGpuCard />
        <p>{gpu}</p>
      </li>
      <li className="flex gap-2">
        <FaMemory />
        <p>{ram}</p>
      </li>
      <li className="flex gap-2">
        <BsFillDeviceSsdFill />
        <p>{ssd}</p>
      </li>
    </ul>
  );
};

export default ProductInfo;
