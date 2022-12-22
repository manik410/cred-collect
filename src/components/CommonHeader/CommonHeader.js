import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as ConfActions } from "../../redux/ducks/conf";
import Logo from "../../assets/images/logo.png";
import "./CommonHeader.scss";

const CommonHeader = (props) => {
  return (
    <>
      <div className="mainDiv">
        <div className="headerDiv">
          <div className="header-logoDiv">
            <div className="cred-logo">
              <img src={Logo} alt="credLogo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  mobile: state.confState.mobile,
  statusData: state.confState.surveyPaymentStatus,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...ConfActions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommonHeader);
