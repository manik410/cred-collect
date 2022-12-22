import { Button, Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BillFetch from "../../components/BillFetchComponent/BillFetch";
import Error from "../../components/Error/Error";
import FullLoading from "../../components/FullLoading/Fullloading";
import { actions as HomeActions } from "../../redux/ducks/home";
import CommonTable from "./components/CommonTable/CommonTable";
import Info from "./components/Info/Info";
import "./Investment.scss";
const Investment = (props) => {
  const [linkedLoans, setLinkedLoans] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    document.body.style.background = "#ECF5FF";
    props.getLinkedLoans();
  }, []);

  useEffect(() => {
    if (props?.linkedLoans?.data?.success) {
      setLinkedLoans(props?.linkedLoans?.data?.data?.loan_data);
    }
  }, [props.linkedLoans]);

  return (
    <>
      <FullLoading loading={props?.linkedLoans?.isLoading} />
      <Error error={props?.linkedLoans?.error} />
      <Drawer
        title="Add Asset"
        placement="right"
        onClose={() => {
          setDrawerOpen(false);
        }}
        open={drawerOpen}
      ></Drawer>
      <div className="InvestmentPage">
        <div className="loansDiv">
          <center>
            {" "}
            <h1>Linked Loans</h1>
          </center>
          <BillFetch
            showExtra={true}
            loading={props?.linkedLoans?.isLoading}
            linkedLoans={linkedLoans}
          />
        </div>
        <div className="investmentsDiv">
          <div className="mutualFunddDiv">
            <h2 style={{ padding: "20px" }}>Mutual Funds</h2>
            <Info />
          </div>
          <br />
          <br />
          <div className="assetsDiv">
            <div className="assetsFundDiv">
              <Button
                style={{ marginBottom: "20px" }}
                onClick={() => {
                  setDrawerOpen(true);
                }}
              >
                Add Asset
              </Button>
              <CommonTable data={[]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  linkedLoans: state.homeState.linkedLoans,
  userData: state.confState.user,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...HomeActions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Investment);
