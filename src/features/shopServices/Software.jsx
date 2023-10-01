import { software } from "../../constants/shopServices";
import ShowServices from "../../ui/ShowServices";

const Software = () => {
  return (
    <div>
      <ShowServices services={software} />
    </div>
  );
};

export default Software;
