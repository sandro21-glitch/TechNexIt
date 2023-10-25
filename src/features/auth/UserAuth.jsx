import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const UserAuth = ({ isOpen, setIsOpen }) => {
  const [showPage, setShowPage] = useState("login");

  const handleClick = (event) => {
    const isArticleClick = event.target.closest("article");

    if (!isArticleClick) {
      setIsOpen((prevState) => !prevState);
    }
  };

  return (
    <section
      className={`fixed left-0 top-0 w-screen h-screen bg-transparentBlack z-[9999] ${
        isOpen ? "flex" : "hidden"
      } flex justify-center`}
      onClick={handleClick}
    >
      <article className="flex items-center px-5 justify-center flex-col w-full max-w-[35rem] ">
        <div className="border-2 w-full  border-gray-500 p-6 bg-white">
          <div className="flex items-center gap-5 font-rexFontLight mb-5">
            <button
              onClick={() => setShowPage("login")}
              className="border border-greyBorder px-2 py-1"
            >
              ავტორიზაცია
            </button>
            <button
              onClick={() => setShowPage("register")}
              className="border border-greyBorder px-2 py-1"
            >
              რეგისტრაცია
            </button>
          </div>
          <hr />
          {showPage === "login" ? (
            <Login setIsOpen={setIsOpen} />
          ) : (
            <Register setIsOpen={setIsOpen} />
          )}
        </div>
      </article>
    </section>
  );
};

export default UserAuth;
