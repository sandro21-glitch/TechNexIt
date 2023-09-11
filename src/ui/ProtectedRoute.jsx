import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.user.role && !isLoading) {
      return navigate("/", { replace: true });
    }
  }, [user?.user.role, navigate, isLoading]);
  if (isLoading) {
    return <Skeleton />;
  }
  return user?.user.role === "authenticated" ? children : null;
};

export default ProtectedRoute;
