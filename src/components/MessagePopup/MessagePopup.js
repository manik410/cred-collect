import { Button } from 'antd';
import React from 'react'
import './MessagePopup.scss'

const MessagePopup = (props) => {
    const { imageUrl, confirmButton, cancelButton, onCancel, onConfirm, mobile } = props
    return (
        <div className="dialogDiv">
            <img className="imageDiv" src={imageUrl} alt="warningmessage" />
            <div className='messageDiv' style={{paddingBottom:"0"}}>No membership is linked with</div>
            <div className='messageDiv' style={{paddingTop:"0"}}>+91 {mobile}</div>
            <div className="buttonsDiv">
                <Button className="cancelButton" onClick={onCancel}>{cancelButton}</Button>
                <Button className="confirmButton" onClick={onConfirm}>{confirmButton}</Button>
            </div>
        </div>
    )
}
export default MessagePopup;
