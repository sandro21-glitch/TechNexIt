import UserInformation from "../features/options/UserInformation";
import SinglePageHeader from "../ui/SinglePageHeader";

const UserSettings = () => {
  return (
    <section>
      <SinglePageHeader category={"user"} name={"123414141"} />
      <article className="section-center pb-[3.5rem]">
        <div className="flex justify-between gap-5 font-rexFontLight flex-col md:flex-row">
          {/* user info list */}
          <ul className="border border-greyBorder w-full md:max-w-[18rem]">
            <li className="py-2 px-4 w-full border-b border-greyBorder cursor-pointer">
              პირადი ინფორმაცია
            </li>
            <li className="py-2 px-4 w-full border-b border-greyBorder cursor-pointer">
              პაროლის შეცვლა
            </li>
            <li className="py-2 px-4 w-full border-b border-greyBorder cursor-pointer">
              კალათა
            </li>
            <li className="py-2 px-4 w-full border-b border-greyBorder cursor-pointer">
              შეკვეთები
            </li>
          </ul>
          {/* user table */}
          <div className="flex-1 border border-greyBorder p-5">
            <UserInformation />
          </div>
        </div>
      </article>
    </section>
  );
};

export default UserSettings;
