import React from "react";
import PageArea from "../components/PageArea";
import LinkTr from "../components/LinkTr";
import TypeTag from "../components/TypeTag";
import { blog } from "../content/blog";
import "../pages/Event.css";

export default function BlogList() {
  const output = blog.map((post) => (
    <LinkTr
      path={`/blog/${post.basic.path}`}
      className="event-grid-item blog-item"
    >
      <TypeTag type={post.basic.type} />
      <h3>{post.basic.title}</h3>
      <img src={`../blog/${post.basic.square}`} alt={post.basic.title} />
      <p>{post.basic.tag}</p>
    </LinkTr>
  ));

  return (
    <PageArea>
      <h1>部落格</h1>
      <br />
      <div className="event-grid-content">{output}</div>
    </PageArea>
  );
}
