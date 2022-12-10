import React from "react";
import { Link } from "react-router-dom";
import { TransitionContext } from "../context";

export default function LinkTr({ children, path, style, className }) {
  return (
    <TransitionContext.Consumer>
      {({ toggleTransition }) => (
        <Link
          to={path === undefined ? "/" : path}
          onClick={toggleTransition}
          style={style}
          className={className}
        >
          {children}
        </Link>
      )}
    </TransitionContext.Consumer>
  );
}
