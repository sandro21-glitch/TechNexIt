import { Outlet } from "react-router-dom";
import SinglePageHeader from "../ui/SinglePageHeader";
const Order = () => {
  return (
    <section>
      <SinglePageHeader name="" category="" />
      <article className="section-center pb-20 flex items-center justify-center">
        <Outlet />
      </article>
    </section>
  );
};

export default Order;
