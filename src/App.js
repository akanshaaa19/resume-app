import "./App.css";

import Layout from "./components/ui/Layout";
import Home from "./components/pages/Home";

import { Provider, useDispatch, useSelector } from "react-redux";
import AuthPage from "./components/pages/AuthPage";
import { useEffect } from "react";
import { authActions } from "./store";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token !== null) {
      dispatch(authActions.logInHandeler({ email: email, token: token }));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/edit/templates" replace />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />

        <Route
          path="/auth"
          element={
            isLoggedIn ? <Navigate to="/edit/templates" /> : <AuthPage />
          }
        />

        <Route
          path="/edit/templates"
          element={!isLoggedIn && <Navigate to="/auth" />}
        />
        <Route
          path="/edit/personal"
          element={!isLoggedIn && <Navigate to="/auth" />}
        />
        <Route
          path="/edit/education"
          element={!isLoggedIn && <Navigate to="/auth" />}
        />
        <Route
          path="/edit/work"
          element={!isLoggedIn && <Navigate to="/auth" />}
        />
        <Route
          path="/edit/skills"
          element={!isLoggedIn && <Navigate to="/auth" />}
        />
      </Routes>

      {isLoggedIn && <Home />}
    </>
  );
}

export default App;
