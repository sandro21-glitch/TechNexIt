import { useQuery } from "react-query";
import { fetchUserData } from "../services/apiUser";

export const useUser = (userId) => {
  const {
    data: userData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetchUserData(userId),
  });

  return { userData, isLoading, isError };
};
