import { useEffect, useState } from "react";
import DeliveryMethod from "./DeliveryMethod";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import UserOrderInfo from "./UserOrderInfo";
import PlaceOrderBtn from "./PlaceOrderBtn";
import TermsCheckbox from "./TermsCheckbox ";
import { useSelector } from "react-redux";
import { useUser } from "../../hooks/useUser";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { insertUserOrder } from "../../services/apiOrders";
import { useNavigate } from "react-router-dom";

const OrderPrepare = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const { userData, isLoading, isError } = useUser(user?.user.id);
  const [deliveryMethod, setDelieveryMethod] = useState("მაღაზიიდან გატანა");
  const [termsCheckbox, setTermsCheckbox] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState({
    type: "გადახდა პლასტიკური ბარათით",
    bank: "საქართველოს ბანკი",
  });
  const [userFullName, setUserFullName] = useState(() => {
    if (isLoading) {
      return "იტვირტება";
    }
    if (isError) {
      return "Error occurred";
    }
    return {
      name: userData.name,
      number: userData.number ? userData.number : "",
    };
  });

  const [order, setOrder] = useState({
    name: userFullName.name,
    number: userFullName.number,
    delivery: deliveryMethod,
    payment: paymentMethod.type,
    bank: paymentMethod.bank,
    price: totalPrice,
  });

  useEffect(() => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      name: userFullName.name,
      number: userFullName.number,
      delivery: deliveryMethod,
      payment: paymentMethod.type,
      bank: paymentMethod.bank,
      price: totalPrice,
    }));
  }, [totalPrice, userFullName, deliveryMethod, paymentMethod]);

  const queryClient = useQueryClient();
  const { mutate: userOrder } = useMutation({
    mutationKey: ["submitOrder", user?.user.id, order],
    mutationFn: () => insertUserOrder(user?.user.id, order),
    onSuccess: () => {
      queryClient.invalidateQueries("getOrders");
    },
    onError: () => console.log("error"),
  });

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!termsCheckbox) {
      toast.error(
        "შეკვეთის განთავსებისთვის სავალდებულოა დაეთანხმოთ საგარანტიო პირობებს"
      );
      return;
    }

    if (userFullName.name === "" || userFullName.number === "") {
      toast.error("შეავსეთ ყველა ველი");
      return;
    }

    userOrder();
    navigate("/order/confirmedOrders");
  };
  return (
    <div className="w-full max-w-[50rem] border-2 border-greyBorder p-5">
      <h2 className="font-rexFontBold text-[1.7rem]">შეკვეთის დეტალები</h2>
      <hr className="my-5" />
      <form onSubmit={handleSubmitOrder}>
        <UserOrderInfo
          userFullName={userFullName}
          setUserFullName={setUserFullName}
        />
        <DeliveryMethod setDelieveryMethod={setDelieveryMethod} />
        <PaymentMethod
          setPaymentMethod={setPaymentMethod}
          paymentMethod={paymentMethod}
        />
        <OrderSummary setTotalPrice={setTotalPrice} />
        <TermsCheckbox
          termsCheckbox={termsCheckbox}
          setTermsCheckbox={setTermsCheckbox}
        />
        <PlaceOrderBtn />
      </form>
    </div>
  );
};

export default OrderPrepare;
