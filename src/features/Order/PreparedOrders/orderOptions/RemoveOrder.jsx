import { AiFillDelete } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { removeOrder } from "../../../../services/apiOrders";
import toast from "react-hot-toast";

const RemoveOrder = ({ orderId }) => {
  const queryClient = useQueryClient();

  const { mutate: remove } = useMutation({
    mutationKey: ["removeOrder"],
    mutationFn: () => removeOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries("getOrders");
      toast.success("შეკვეთა წაიშალა");
    },
    onError: () => {
      alert("Error removing order");
    },
  });

  return (
    <button
      onClick={remove}
      className="flex items-center gap-1 border border-gray-500 hover:border-darkRed bg-gray-500 p-1 hover:bg-darkRed text-white"
    >
      <AiFillDelete />
      <span>შეკვეთს გაუქმება</span>
    </button>
  );
};

export default RemoveOrder;
