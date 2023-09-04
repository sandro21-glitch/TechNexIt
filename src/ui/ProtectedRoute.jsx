import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SmallLoader from "../ui/SmallLoader";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((store) => store.auth);
  useEffect(() => {
    if (!user?.user?.role && !isLoading) {
      navigate("/");
    } else {
      navigate("/order");
    }
  }, [user?.user.role, isLoading, navigate]);

  if (isLoading) return <SmallLoader />;

  if (user?.user?.role === "authenticated") return children;
};

export default ProtectedRoute;
