import { Outlet } from "react-router-dom";
import SinglePageHeader from "../ui/SinglePageHeader";
import { useSelector } from "react-redux";
import { useUser } from "../hooks/useUser";
import UserSettings from "../ui/UserSettings";

const User = () => {
  const { user } = useSelector((store) => store.auth);
  const { userData, isLoading, isError } = useUser(user?.user.id);
  return (
    <section className="font-rexFontLight">
      <SinglePageHeader
        category={"ანგარიში"}
        name={isLoading ? "" : userData.name}
      />
      <article className="min-h-[60vh] flex flex-col md:flex-row items-start section-center gap-5 pb-20">
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
