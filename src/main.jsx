import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Women from "./pages/Women.jsx";
import Checkout from "./pages/Checkout.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<App />} />
        <Route path="/Women" index element={<Women />} />
        <Route path="/Checkout" index element={<Checkout />} />
      </Route>
    </Routes>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
