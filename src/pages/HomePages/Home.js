import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as HomeActions } from "../../redux/ducks/home";
import { actions as ConfActions } from "../../redux/ducks/conf";
import Error from "../../components/Error/Error";
import FullLoading from "../../components/FullLoading/Fullloading";
import BillFetch from "../../components/BillFetchComponent/BillFetch";
import Tick from "../../assets/images/tick.jpeg";
import "./Home.scss";
import { Button } from "antd";
import { routeUrl } from "../../route/routesUrl";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const [linkedLoans, setLinkedLoans] = useState([]);
  const history = useNavigate();
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
      <div className="packageSummary">
        <div className="packageSummaryWrapper">
          <div className="packageSummaryHeader">
            <p className="heading">
              Loans Linked to{" "}
              {`${props?.userData?.first_name} ${props?.userData?.last_name}`.toUpperCase()}
            </p>
          </div>
          <div className="packageSummaryBody">
            <div className="recommendInfo">
              <BillFetch
                linkedLoans={linkedLoans}
                loading={props?.linkedLoans?.isLoading}
              />
            </div>
            <div className="allPackages">
              <div className="package">
                <p className="heading">Track & Use my saving/ Investments</p>
                <ul>
                  <li>
                    <img src={Tick} alt="right" />
                    <div className="liContent">Track your investments</div>
                  </li>
                  <li>
                    <img src={Tick} alt="right" />
                    <div className="liContent">Add investments manually</div>
                  </li>
                </ul>
                <center>
                  <Button onClick={() => history(routeUrl.INVESTMENTS)}>
                    Explore More
                  </Button>
                </center>
              </div>
              <div className="package">
                <p className="heading">Schedule Agent collection</p>
                <ul>
                  <li>
                    <img src={Tick} alt="right" />
                    <div className="liContent">
                      Commit Next Repayment Date and amount.
                    </div>
                  </li>
                  <li>
                    <img src={Tick} alt="right" />
                    <div className="liContent">
                      We will send an authorised representative to your doorstep
                      on chosen date
                    </div>
                  </li>
                </ul>
                <center>
                  <Button>Explore More</Button>
                </center>
              </div>
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
      ...ConfActions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
