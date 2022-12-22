import React from "react";
import { Modal } from 'antd';
import './CommonPopup.scss'
import { IMAGES_BASE_URL } from "../../utils/constants";


const CommonPopup = (props) => {
  return (
    <Modal className="model-top-div" footer={null} visible={props.isModalOpen} onCancel={() => props.handleCancel()}>
      <div className="top-header-div">
        Redirecting to
      </div>
      <div className="top-header-div-link">
        {props?.redirectLink}
      </div>
      <div className="brand-image-div">
        <img src={`${IMAGES_BASE_URL}/static_images/Group_42672_l3fxsk.png`} alt='logo' />
      </div>
      <div className="description-text-div">
        To avail the benefits you need to Login
      </div>
      <div className="description-text-div">
        Don’t worry.
      </div>
      <div>
        <button className="button-div-popup" onClick={() => props.redirectData(props?.redirectLink)}>Okay</button>
      </div>
    </Modal>
  )

}
export default CommonPopup