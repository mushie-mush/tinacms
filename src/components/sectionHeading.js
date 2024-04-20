import React from "react";

function SectionHeading({ children }) {
  return (
    <>
      <h2 className="section-heading">{children}</h2>
      <hr className="heading-line" />
    </>
  );
}

export default SectionHeading;
