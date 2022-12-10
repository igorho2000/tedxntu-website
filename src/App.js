import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { TransitionContext } from "./context";
import "./App.css";

import Header from "./components/Header";
import Transition from "./components/Transition";

function App() {
  const [transition, setTransition] = useState({
    inProgress: true,
    toggleTransition: doToggleTransition,
  });

  useEffect(() => {
    setTimeout(() => {
      setTransition((state) => ({
        ...state,
        inProgress: false,
      }));
    }, 2300);
  }, []);

  function doToggleTransition() {
    setTransition((state) => ({
      ...state,
      inProgress: state.inProgress === true ? false : true,
    }));
    setTimeout(function () {
      setTransition((state) => ({
        ...state,
        inProgress: state.inProgress === true ? false : true,
      }));
    }, 2300);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <TransitionContext.Provider value={transition}>
      <div className="App">
        {transition.inProgress && <Transition />}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/hello" element={<Header />} />
        </Routes>
      </div>
    </TransitionContext.Provider>
  );
}

export default App;
