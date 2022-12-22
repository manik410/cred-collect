import { Table } from "antd";
import React from "react";
const CommonTable = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Asset Type",
      dataIndex: "asset_type",
      key: "asset_type",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Rate of Interest",
      dataIndex: "roi_pa",
      key: "roi_pa",
    },
    {
      title: "Tenure Month",
      dataIndex: "tenure_month",
      key: "tenure_month",
    },
    {
      title: "Date of Purchase",
      dataIndex: "start_date",
      key: "start_date",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};
export default CommonTable;
