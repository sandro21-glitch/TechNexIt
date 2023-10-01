import { laptopServices } from "../../constants/shopServices";
import ShowServices from "../../ui/ShowServices";

const LaptopServices = () => {
  return (
    <div>
      <ShowServices services={laptopServices} />
    </div>
  );
};

export default LaptopServices;
