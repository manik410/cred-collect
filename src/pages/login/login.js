import { Button, Input, message } from "antd";
import React, { useState, useEffect } from "react";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import FullLoading from "../../components/FullLoading/Fullloading";
import { routeUrl } from "../../route/routesUrl";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as LoginActions } from "../../redux/ducks/login";
import { actions as ConfActions } from "../../redux/ducks/conf";
import OtpInput from "react-otp-input";
import "./login.scss";
const Login = (props) => {
  const [mobile, setMobile] = useState("");
  const [otpSend, setOtpSend] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendOtpClicked, setsendOtpClicked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    if (props?.userData?.loginStatus && props?.token) {
      history(routeUrl.HOME, { replace: true });
    }
  }, []);

  useEffect(() => {
    if (props?.userProfileData?.data?.success) {
      const { access_token } = props?.otp?.data?.data;
      props.setUserData({
        loginStatus: "true",
        token: access_token,
        ...props?.userProfileData?.data?.data,
      });
      history(routeUrl.HOME);
    } else {
      if (props?.userProfile?.error) {
        setLoading(false);
        message.destroy();
        message.error(
          props?.userProfile?.data?.data?.msg ?? "Something went wrong"
        );
      }
    }
  }, [props.userProfileData]);

  useEffect(() => {
    if (!otpSend) {
      if (props?.otp?.data?.success && sendOtpClicked) {
        message.destroy();
        message.success("Otp sent Successfully");
        setLoading(false);
        setOtpSend(true);
        setOtp("");
        setError("");
      } else {
        if (props?.otp?.error) {
          setLoading(false);
          message.destroy();
          message.error(props?.otp?.data?.data?.msg ?? "Something went wrong");
        }
      }
    } else {
      if (props?.otp?.data?.success && sendOtpClicked) {
        setLoading(false);
        setOtp("");
        setError("");
        props.getUserProfile();
      } else {
        if (props?.otp?.error) {
          setLoading(false);
          message.destroy();
          message.error(props?.otp?.data?.data?.msg ?? "Something went wrong");
        }
      }
    }
  }, [props.otp]);

  const sendOtp = (e) => {
    setsendOtpClicked(true);
    e.currentTarget.blur();
    setLoading(true);
    props.sendOtp({ identity_value: mobile });
  };

  const verifyOtp = (e) => {
    setLoading(true);
    props.verifyOtp({ identity_value: mobile, otp: otp });
  };

  return (
    <div className="login-top-div">
      <FullLoading loading={loading} />
      <CommonHeader />
      <div className="loginDiv">
        {!otpSend && (
          <>
            <h2 className="heading">Please Login Here</h2>
            <div className="mobileDiv">
              <div className="label">Mobile number</div>
              <Input
                type="number"
                className="inputBox"
                value={mobile}
                onChange={(e) => {
                  if (e.target.value.length <= 10) {
                    setMobile(e.target.value);
                  }
                }}
                prefix={"+91"}
              />
              <div style={{ textAlign: "center", paddingTop: "33px" }}>
                <Button
                  className={
                    mobile?.length < 10 || mobile?.length > 10
                      ? "disabledBtn"
                      : "otpButton"
                  }
                  disabled={mobile?.length < 10 || mobile?.length > 10}
                  onClick={(e) => sendOtp(e)}
                >
                  Get OTP
                </Button>
              </div>
            </div>
          </>
        )}
        {otpSend && (
          <>
            <h2 className="heading">Enter OTP</h2>
            <div style={{ padding: "18px" }}>
              <div className="otpinfo">
                OTP sent to {mobile}
                <span
                  onClick={() => {
                    setOtpSend(false);
                  }}
                  style={{
                    color: "#1987FB",
                    paddingLeft: "8px",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  edit
                </span>
              </div>
              <OtpInput
                value={otp}
                type="number"
                onChange={(loginOtp) => {
                  setError("");
                  setOtp(loginOtp);
                }}
                error={error?.length > 0 ? true : false}
                isInputNum={true}
                numInputs={6}
                separator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                containerStyle={{ padding: "16px 0px 15px 0px" }}
                inputStyle={{
                  width: "52px",
                  height: "52px",
                  background: "#FFFFFF",
                  marginTop: "6px",
                  border: "1px solid #B7C3D9",
                  fontSize: "16px",
                  borderRadius: "8px",
                }}
                focusStyle={{ outline: "none" }}
                errorStyle={{ border: "none", borderBottom: "1px solid red" }}
              />
              <div style={{ paddingBottom: "22px" }}>
                {error && error?.length > 0 && (
                  <span className="ErrorMessage">{error}</span>
                )}
              </div>
              <div style={{ textAlign: "center", paddingTop: "12px" }}>
                <Button
                  className={otp?.length !== 6 ? "disabledBtn" : "otpButton"}
                  disabled={otp.length !== 6}
                  onClick={(e) => verifyOtp(e)}
                >
                  Verify
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  otp: state.loginState.otp,
  userData: state.confState.user,
  token: state.confState.token,
  userProfileData: state.loginState.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...LoginActions,
      ...ConfActions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
