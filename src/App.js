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
import About from "./pages/About";
import Team from "./pages/Team";
import Partner from "./pages/Partner";
import BlogList from "./pages/BlogList";
import { blog } from "./content/blog";
import Blog from "./pages/Blog";

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
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partner" element={<Partner />} />
            {blog.map((post) => (
              <Route
                path={`/blog/${post.basic.path}`}
                element={<Blog post={post} />}
              />
            ))}
            <Route path="/blog" element={<BlogList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </TransitionContext.Provider>
  );
}

export default App;
