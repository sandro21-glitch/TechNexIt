import { pcServices } from "../../constants/shopServices";
import ShowServices from "../../ui/ShowServices";
const PcServices = () => {
  return (
    <div>
      <ShowServices services={pcServices} />
    </div>
  );
};

export default PcServices;
