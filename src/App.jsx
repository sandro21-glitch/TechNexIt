import { useState } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
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

function App() {
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
