import { useMutation, useQueryClient } from "react-query";
import { updateData } from "../../services/apiUser";
import toast from "react-hot-toast";

const DataSaveBtn = ({ userId, formData }) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: "updateData",
    mutationFn: updateData,
    onSuccess: () => {
      queryClient.invalidateQueries(["user", userId]);
      toast.success("პირადი ინფორმაცია განახლდა");
    },
    onError: (error) => alert(error.message),
  });

  const handleUpdateData = () => {
    mutate({ userId, formData });
  };
  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={handleUpdateData}
      className="p-2 bg-darkBlue text-white border border-darkBlue hover:text-darkBlue hover:bg-transparent transition-colors ease-in duration-100"
    >
      {isLoading ? "დაელოდეთ" : "მონაცემების შენახვა"}
    </button>
  );
};

export default DataSaveBtn;
