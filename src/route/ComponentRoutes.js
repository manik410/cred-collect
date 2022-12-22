import React, { Suspense } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { PAGE_ROUTE } from "./routesPath";
import { connect } from "react-redux";
import { routeUrl } from "./routesUrl";
import { Button, Result } from "antd";

const ComponentsRoutes = (props) => {
  const history = useNavigate();
  const components = (Comp, props) => {
    return <Comp {...props} />;
  };
  const backHome = () => {
    history(-1);
  };
  const createRoutes = (data) => {
    const token = props?.token;

    return data?.map((item) => {
      return item?.isPrivate ? (
        <Route
          exact={item?.exact}
          key={item?.id}
          path={item?.path}
          element={
            token && props?.userData?.loginStatus ? (
              components(item.Component, { token })
            ) : (
              <Navigate replace to={routeUrl.LOGIN} />
            )
          }
        />
      ) : (
        <Route
          exact={item?.exact}
          key={item?.id}
          path={item?.path}
          element={components(item.Component, { token })}
        />
      );
    });
  };

  return (
    <Suspense fallback={<div style={{ display: "flex" }} />}>
      <Routes>
        {createRoutes(PAGE_ROUTE)}
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route
          path="/404"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={
                <Button type="primary" onClick={() => backHome()}>
                  Back
                </Button>
              }
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

const mapStateToProps = (state) => ({
  userData: state.confState.user,
});

export default connect(mapStateToProps)(ComponentsRoutes);
