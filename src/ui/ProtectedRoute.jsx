import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Loading from "./Loading";
import { useLayoutEffect } from "react"; // Import useLayoutEffect

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useLayoutEffect(() => { // Use useLayoutEffect
    if (user?.user.role !== "authenticated") {
      navigate("/");
    }
  }, [user?.user.role, navigate]);

  if (isLoading) {
    return <Loading />;
  }


  return user?.user.role === "authenticated" ? children : null;
};

export default ProtectedRoute;
