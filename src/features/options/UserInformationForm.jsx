import { useSelector } from "react-redux";
const UserInformationForm = ({ fields }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <form className="my-5">
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col mb-5">
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            disabled={field.id === "email"}
            className="border border-greyBorder p-2 outline-none focus:border-gray-600"
            defaultValue={
              field.id === "email"
                ? user?.user.email
                : field.id === "name"
                ? user?.user.user_metadata.name
                : ""
            }
          />
        </div>
      ))}
      <button
        type="submit"
        className="p-2 bg-darkBlue text-white border border-darkBlue hover:text-darkBlue hover:bg-transparent transition-colors ease-in duration-100"
      >
        მონაცემების შენახვა
      </button>
    </form>
  );
};

export default UserInformationForm;
