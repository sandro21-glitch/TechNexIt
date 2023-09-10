import { Outlet } from "react-router-dom";
import SinglePageHeader from "../ui/SinglePageHeader";
import { useSelector } from "react-redux";
import { useUser } from "../hooks/useUser";
import UserSettings from "../ui/UserSettings";

const User = () => {
  const { user } = useSelector((store) => store.auth);
  const { userData, isLoading, isError } = useUser(user?.user.id);
  return (
    <section>
      <SinglePageHeader
        category={isLoading ? "" : userData.user_id.slice(0, 5)}
        name={isLoading ? "" : userData.name}
      />
      <article className="flex flex-col md:flex-row items-start section-center gap-5 pb-20">
        <div className="w-full md:max-w-[18rem]">
          <UserSettings />
        </div>
        <div className="flex-1 border border-greyBorder w-full">
          <Outlet />
        </div>
      </article>
    </section>
  );
};

export default User;
