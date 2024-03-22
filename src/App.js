import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import React, { useState, Suspense } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { appRoutes } from "./routes";


function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  return (
    <SwitchTransition component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Suspense fallback={() => <h1>Loading...</h1>}>
          <Routes location={location}>
            {appRoutes.map((route) => {
              if (route.requiresAuth && !isLogged) {
                return (
                  <Route
                    key={route.path}
                    exact
                    path={route.path}
                    element={<Navigate replace to={"/login"} />}
                  />
                );
              } else {
                return (
                  <Route
                    key={route.path}
                    exact
                    path={route.path}
                    element={
                      <route.component
                        setIsLogged={setIsLogged}
                        setUsername={setUsername}
                        username={username}
                      />
                    }
                  />
                );
              }
            })}
          </Routes>
        </Suspense>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
