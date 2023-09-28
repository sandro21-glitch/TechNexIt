import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { fetchUserData } from "../../../services/apiUser";
import { useEffect, useState } from "react";
import DataSaveBtn from "../DataSaveBtn";
import SmallSpinner from "../../../ui/SmallSpinner";
const UserInformationForm = ({ fields }) => {
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    number: "",
    address: "",
  });

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUserData(user?.user.id),
  });
  useEffect(() => {
    if (userData) {
      setFormData({
        email: userData?.email,
        name: userData?.name || "",
        number: userData?.number || "",
        address: userData?.address || "",
      });
    }
  }, [userData]);
  if (isLoading) return <SmallSpinner />;
  if (isError) return <p>Error</p>;

  return (
    <form className="my-5" onChange={(e) => e.preventDefault()}>
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col mb-5">
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            disabled={field.id === "email"}
            className="border border-greyBorder p-2 outline-none focus:border-gray-600"
            value={formData[field.id]}
            onChange={(e) =>
              setFormData({ ...formData, [field.id]: e.target.value })
            }
          />
        </div>
      ))}
      <DataSaveBtn userId={userData.user_id} formData={formData} />
    </form>
  );
};

export default UserInformationForm;
