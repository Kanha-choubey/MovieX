import React, { Children } from "react";

const contentWrapper = ({ Children }) => {
  return <div className="conrtentWrapper">{Children}</div>;
};

export default contentWrapper;
