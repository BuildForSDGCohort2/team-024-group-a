import React from "react";
import "./historyPatients.css";

import { Table } from "antd";

const columns = [
  { title: "Doctor", dataIndex: "doctor", key: "doctor" },
  { title: "Gender", dataIndex: "gender", key: "gender" },
  { title: "folioNumber", dataIndex: "folioNumber", key: "folioNumber" },
  { title: "Session", dataIndex: "session", key: "session" },
];

const data = [
  {
    key: 1,
    doctor: "Ola Brown",
    gender : "F",
    folioNumber : "22334455",
    session: "Wed, 22 Jun 1010. 03:99 ZM",
    description:
      `Mouth sores with severe headache and constant sneezing,
      used some painkillers but it wears off and pain increases`,
  },
  {
    key: 2,
    doctor: "Aproko Doctor",
    gender: "M",
    folioNumber : "22334455",
    session: "Wed, 22 Jun 1010. 03:99 ZM",
    description:
    `Mouth sores with severe headache and constant sneezing,
    used some painkillers but it wears off and pain increases`,
  },
  {
    key: 3,
    doctor: "Olu Funmilayo",
    gender: "M",
    folioNumber : "22334455",
    session: "Wed, 22 Jun 1010. 03:99 ZM",
    description: `Mouth sores with severe headache and constant sneezing,
    used some painkillers but it wears off and pain increases`,
  },
  {
    key: 4,
    doctor: "Joe Black",
    gender : "F",
    folioNumber : "22334455",
    session: "Wed, 22 Jun 1010. 03:99 ZM",
    description:
    `Mouth sores with severe headache and constant sneezing,
    used some painkillers but it wears off and pain increases`,
  },
  {
    key: 5,
    doctor: "John Doe",
    gender : "F",
    folioNumber : "22334455",
    session: "Wed, 22 Jun 1010. 03:99 ZM",
    description: `Mouth sores with severe headache and constant sneezing,
    used some painkillers but it wears off and pain increases`,
  },
];

class HistoryPatients extends React.Component {
  render() {
    return (
      <div>
        <Table
          columns={columns}
          pagination={{
            pageSize: 50,
          }}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.description}</p>
            )
          }}
          dataSource={data}
        />
      </div>
    );
  }
}

export default HistoryPatients;
