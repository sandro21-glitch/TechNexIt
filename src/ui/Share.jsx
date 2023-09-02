import { ShareButton } from "react-facebook";
import { BsFacebook } from "react-icons/bs";
const Share = () => {
  return (
    <ShareButton
      href="http://www.facebook.com"
      className="bg-fbBlue px-2 py-1 mb-5 text-white rounded-md"
    >
      <div className="flex items-center gap-2 text-sm">
        <BsFacebook />
        Share
      </div>
    </ShareButton>
  );
};

export default Share;
