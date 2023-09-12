import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { FacebookProvider } from "react-facebook";

import SingleProduct from "./pages/SingleProduct";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Home from "./pages/Home";
import Error from "./ui/Error";
import Cart from "./pages/Cart";
import FixedCart from "./ui/FixedCart";
import UserAuth from "./features/auth/UserAuth";
import Order from "./pages/Order";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./features/auth/authSlice";
import ProtectedRoute from "./ui/ProtectedRoute";
import User from "./pages/User";
import UserInformation from "./features/options/PersonalInfo/UserInformation";
import PasswordReset from "./features/options/password/PasswordReset";
import NewPassword from "./features/options/password/NewPassword";
function App() {
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <FacebookProvider lazy appId="978208760122939">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <Navbar setIsOpenAuth={setIsOpenAuth} />
          <FixedCart />
          <UserAuth isOpen={isOpenAuth} setIsOpen={setIsOpenAuth} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/order"
              element={
                <ProtectedRoute path={"/order"}>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            >
              <Route path="/account/user" element={<UserInformation />} />
              <Route
                path="/account/passwordReset"
                element={<PasswordReset />}
              />
              <Route path="/account/newPassword/:token" element={<NewPassword />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
        <Footer />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </QueryClientProvider>
    </FacebookProvider>
  );
}

export default App;
