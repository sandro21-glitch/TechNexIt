import React, { useEffect, useState, lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { FacebookProvider } from "react-facebook";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./features/auth/authSlice";
import ProtectedRoute from "./ui/ProtectedRoute";

import Home from "./pages/Home";
import Loading from "./ui/Loading";
// Lazy-loaded components
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const Navbar = lazy(() => import("./ui/Navbar"));
const Footer = lazy(() => import("./ui/Footer"));
const Error = lazy(() => import("./ui/Error"));
const Cart = lazy(() => import("./pages/Cart"));
const FixedCart = lazy(() => import("./ui/FixedCart"));
const UserAuth = lazy(() => import("./features/auth/UserAuth"));
const Order = lazy(() => import("./pages/Order"));
const User = lazy(() => import("./pages/User"));
const UserInformation = lazy(() =>
  import("./features/options/PersonalInfo/UserInformation")
);
const PasswordReset = lazy(() =>
  import("./features/options/password/PasswordReset")
);
const NewPassword = lazy(() =>
  import("./features/options/password/NewPassword")
);
const OrderPrepare = lazy(() => import("./features/Order/OrderPrepare"));
const OrderConfirmation = lazy(() =>
  import("./features/Order/PreparedOrders/OrderConfirmation")
);
const Shop = lazy(() => import("./pages/Shop"));
const Services = lazy(() => import("./pages/Services"));

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
          <Suspense fallback={<Loading />}>
            <Navbar setIsOpenAuth={setIsOpenAuth} />
            <FixedCart />
            <UserAuth isOpen={isOpenAuth} setIsOpen={setIsOpenAuth} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                element={
                  <ProtectedRoute path={"/order"}>
                    <Order />
                  </ProtectedRoute>
                }
              >
                <Route path="/order/OrderPrepare" element={<OrderPrepare />} />
                <Route
                  path="/order/confirmedOrders"
                  element={<OrderConfirmation />}
                />
              </Route>
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
                <Route
                  path="/account/newPassword/:token"
                  element={<NewPassword />}
                />
              </Route>
              <Route path="/shop" element={<Shop />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
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
