import { MailOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import MainImage from "../../../../assets/images/jupiter.svg";
import "./Info.scss";
const Info = () => {
  return (
    <div className="infoDiv">
      <center>
        <img src={MainImage} alt="mainImage" />
      </center>
      <p>Email send to abcxxx@gmail.com</p>
      <ul>
        <div className="content">
          <MailOutlined />
          &nbsp;&nbsp; Go to your mail App
        </div>
        <div className="content">
          <SearchOutlined />
          &nbsp;&nbsp; Search for an email from CAMS Mailback Server
        </div>
      </ul>
    </div>
  );
};
export default Info;
