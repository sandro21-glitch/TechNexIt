import QuantityDisplay from "../../../ui/QuantityDisplay";
import { useQuery } from "react-query";
import { getUserOrders } from "../../../services/apiOrders";
import { useSelector } from "react-redux";
import OrderPaginate from "./OrderPaginate";
const OrderConfirmation = () => {
  const { user } = useSelector((store) => store.auth);
  const {
    data: userOrders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getOrders", user?.user.id],
    queryFn: () => getUserOrders(user?.user.id),
    staleTime: 0,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;
  return (
    <div className="section-center">
      <QuantityDisplay
        count={userOrders ? userOrders.length : 0}
        label="თქვენ გაქვთ განთავსებული"
      />
      {userOrders.length > 0 ? (
        <div className="flex flex-col gap-10">
          {userOrders.map((order, index) => {
            return (
              <OrderPaginate
                key={order.order_id}
                order={order}
                index={index + 1}
              />
            );
          })}
        </div>
      ) : (
        <div className="min-h-[20rem] text-center">
          <h3 className="font-rexFontLight font-bold">შეკვეთები არ გაქვთ</h3>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
