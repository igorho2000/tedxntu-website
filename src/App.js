import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { TransitionContext } from "./context";
import "./App.css";

import Header from "./components/Header";
import Transition from "./components/Transition";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Event from "./pages/Event";

import { six, seven } from "./content/events";
import EventList from "./pages/EventList";

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
        <Header />
        <div style={{ marginTop: "5rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {six.map((event) => (
              <Route
                path={`/event/${event.path}`}
                element={<Event content={event} />}
              />
            ))}
            {seven.map((event) => (
              <Route
                path={`/event/${event.path}`}
                element={<Event content={event} />}
              />
            ))}
            <Route path="/event" element={<EventList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </TransitionContext.Provider>
  );
}

export default App;
