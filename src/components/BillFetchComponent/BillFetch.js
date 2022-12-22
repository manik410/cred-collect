import { Checkbox } from "antd";
import React from "react";
import "./BillFetch.scss";
const BillFetch = ({ linkedLoans, loading, showExtra = false }) => {
  return (
    <div
      className="recommendedCard"
      style={{ cursor: showExtra ? "pointer" : "" }}
    >
      <div className="packageInfo">
        {!loading && linkedLoans?.length === 0 && (
          <p className="heading">No Linked Loans Found</p>
        )}
        {!loading &&
          linkedLoans.map((item, index) => {
            let val = 10000;
            let interest = 10;
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={index}
              >
                {showExtra && <Checkbox />}
                <div key={index} className="linkLoanCard">
                  {!showExtra && (
                    <>
                      {" "}
                      <p>
                        <span style={{ fontSize: "15px", color: "whitesmoke" }}>
                          Company Name -{" "}
                        </span>
                        {item?.company_trademark?.charAt(0).toUpperCase() +
                          item?.company_trademark?.slice(1) ?? "-"}
                      </p>
                      <p>
                        <span style={{ fontSize: "15px", color: "whitesmoke" }}>
                          Allocation Month -{" "}
                        </span>
                        {item?.allocation_month ?? "-"}
                      </p>
                    </>
                  )}
                  <p>
                    <span style={{ fontSize: "15px", color: "whitesmoke" }}>
                      Loan ID -{" "}
                    </span>
                    {item?.loan_id ?? "-"}
                  </p>
                  {showExtra && (
                    <>
                      <p>
                        <span style={{ fontSize: "15px", color: "whitesmoke" }}>
                          Amount Pending -{" "}
                        </span>
                        <span style={{ color: "#c14d4d", fontWeight: "bold" }}>
                          ₹{val + index * val}
                        </span>
                      </p>
                      <p>
                        <span style={{ fontSize: "15px", color: "whitesmoke" }}>
                          Rate of Interest -{" "}
                        </span>
                        <span style={{ color: "#c14d4d", fontWeight: "bold" }}>
                          {`${(
                            interest +
                            interest / (index === 0 ? 1 : index)
                          )?.toFixed(2)}%`}
                        </span>
                      </p>
                      <p>
                        <span style={{ fontSize: "15px", color: "whitesmoke" }}>
                          Days Passed Due -{" "}
                        </span>
                        <span style={{ color: "#c14d4d", fontWeight: "bold" }}>
                          {item?.allocation_dpd_value ?? "NA"}
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default BillFetch;
