import UserInformationForm from "./UserInformationForm";

const formFields = [
  { id: "email", label: "ელექტრონული ფოსტა", type: "email" },
  { id: "name", label: "სახელი და გვარი", type: "text" },
  { id: "number", label: "მობ. ტელეფონი", type: "text" },
  {
    id: "address",
    label: "ფიზიკური მისამართი (არაა სავალდებულო)",
    type: "text",
  },
];
const UserFormItems = () => {
  return <UserInformationForm fields={formFields} />;
};

export default UserFormItems;
