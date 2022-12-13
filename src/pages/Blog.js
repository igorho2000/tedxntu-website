import React from "react";
import PageArea from "../components/PageArea";
import PageBanner from "../components/PageBanner";
import PageTextSection from "../components/PageTextSection";
import TypeTag from "../components/TypeTag";

export default function Blog({ post }) {
  const postSections = post.section;
  const output = postSections.map((section) => (
    <PageTextSection title={section.title}>
      {section.content.map((paragraph) => (
        <>
          {paragraph[1] === "#" ? (
            <p>
              <strong>{paragraph.slice(2)}</strong>
            </p>
          ) : (
            <p>{paragraph}</p>
          )}
          <br />
        </>
      ))}
    </PageTextSection>
  ));

  return (
    <PageArea>
      <TypeTag type={post.basic.type} />
      <h1>{post.basic.title}</h1>
      <p>{post.basic.date}</p>
      <br />
      <PageBanner src={`../blog/${post.basic.banner}`} />
      <br />
      <br />
      <div>{output}</div>
    </PageArea>
  );
}
