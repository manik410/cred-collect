/* eslint-disable react/no-unknown-property */
import React from "react";
import ErrorImageShow from "../../assets/images/error.svg";
import "./Error.scss";
const Error = (props) => {
  if (!props.error) {
    return null;
  }

  return (
    <div>
      <>
        <div className="ErrorDiv noscroll overlay"></div>
        <div className="ErrorBody">
          <div className="errorImage">
            <img src={ErrorImageShow} alt="error" />
          </div>
          <div className="errorContent">Something went wrong</div>
        </div>
      </>
      <style jsx="true">
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};
export default Error;
