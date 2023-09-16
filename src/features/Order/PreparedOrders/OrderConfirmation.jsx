import React from "react";
import QuantityDisplay from "../../../ui/QuantityDisplay";
import { useQuery } from "react-query";
import { getUserOrders } from "../../../services/apiOrders";
import { useSelector } from "react-redux";
// import "react-paginate/dist/react-paginate.css";
import PaginatedItems from "./PaginatedItems";
const OrderConfirmation = () => {
  const { user } = useSelector((store) => store.auth);
  const {
    data: userOrders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getUserOrders(user?.user.id),
  });
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;
  return (
    <div className="section-center">
      <QuantityDisplay
        count={userOrders ? userOrders.length : 0}
        label="თქვენ გაქვთ განთავსებული"
      />
      <div>
        <PaginatedItems userOrders={userOrders} itemsPerPage={1} />
      </div>
    </div>
  );
};

export default OrderConfirmation;
