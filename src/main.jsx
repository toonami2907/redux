import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route,  Outlet } from "react-router-dom";
import Layout from "./Layout.jsx";
import {Provider} from 'react-redux'
import { store } from "./store/store.js";
import { LoginForm } from "./components/login-form.jsx";
import Signup from "./components/Signup.jsx";
import { Toaster } from "react-hot-toast";
import Profile from "./components/Dashboard.jsx";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<><Outlet/></>}>
      <Route path="/auth/login" element={<LoginForm/>} />
      <Route path="/auth/signup" element={<Signup/>} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Profile/>} />
      </Route>
    </Routes>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Toaster/>
  <Provider store={store}>
    <AppRoutes />
  </Provider>
  </BrowserRouter>
);
