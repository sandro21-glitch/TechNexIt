import { BsArrowRightShort } from "react-icons/bs";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="py-10 bg-darkBlue font-rexFontLight">
      <section className="section-center">
        <article className="flex flex-col items-start sm:items-start sm:flex-row sm:justify-between gap-5 ">
          <ul className="text-white">
            <li className="flex items-center cursor-pointer hover:underline">
              <BsArrowRightShort className="text-xl" />
              წესები და პირობები
            </li>
            <li className="flex items-center cursor-pointer hover:underline">
              <BsArrowRightShort className="text-xl" />
              კონფიდენციალობის პოლიტიკა
            </li>
            <li className="flex items-center cursor-pointer hover:underline">
              <BsArrowRightShort className="text-xl" />
              გარანტია-დაბრუნების პოლიტიკა
            </li>
          </ul>
          <p className="text-white mb-0">TechNexIt © {date} ყველა უფლება დაცულია</p>
          <ul className="flex items-center gap-5">
            <li className="bg-white max-w-[4rem] h-[30px] p-3 flex items-center">
              <img
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
                alt="mastercard"
              />
            </li>
            <li className="bg-white max-w-[4rem] h-[30px] p-3 flex items-center">
              <img
                src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
                alt="visa"
              />
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
