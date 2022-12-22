import React, { useEffect } from "react";
import ComponentsRoutes from "./route/ComponentRoutes";
import { actions as ConfActions } from "./redux/ducks/conf";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
function App(props) {
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (props?.verify?.data?.success) {
      const { access_token } = props?.verify?.data?.data;
      props.setToken(access_token);
    }
  }, [props.verify]);

  const handleResize = () => {
    if (window.outerWidth <= 900) {
      props.setMobile(true);
    } else {
      props.setMobile(false);
    }
  };
  return (
    <BrowserRouter>
      <ComponentsRoutes token={props?.token} />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  verify: state.loginState.otp,
  token: state.confState.token,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...ConfActions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
