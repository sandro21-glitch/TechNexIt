import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Loading from "./Loading";
const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }
  return user?.user.role === "authenticated" && !isLoading
    ? children
    : navigate("/");
};

export default ProtectedRoute;
