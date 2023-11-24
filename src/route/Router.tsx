import SignInPage from "page/sign-in";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const routes = [
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
];

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
