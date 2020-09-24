import React from "react";
import "./historyPatients.css";

import { Table } from "antd";

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Sex", dataIndex: "sex", key: "sex" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Session", dataIndex: "session", key: "session" },
];

const data = [
  {
    key: 1,
    name: "John Brown",
    sex: "F",
    age: 32,
    session: "Wed, 22 Jun 1010. 03:99 ZM",
    description:
      `Mouth sores with severe headache and constant sneezing, 
      used some painkillers but it wears off and pain increases`,
  },
  {
    key: 2,
    name: "Jim Green",
    sex: "F",
    age: 42,
    session: "Wed, 22 Jun 1010. 03:99 ZM",
    description:
    `Mouth sores with severe headache and constant sneezing, 
    used some painkillers but it wears off and pain increases`,
  },
  {
    key: 3,
    name: "John Doe",
    sex: "F",
    age: 29,
    session: "Wed, 22 Jun 1010. 03:99 ZM",
    description: `Mouth sores with severe headache and constant sneezing, 
    used some painkillers but it wears off and pain increases`,
  },
  {
    key: 4,
    name: "Joe Black",
    sex: "F",
    age: 32,
    session: "Wed, 22 Jun 1010. 03:99 ZM",
    description:
    `Mouth sores with severe headache and constant sneezing, 
    used some painkillers but it wears off and pain increases`,
  },
  {
    key: 5,
    name: "John Doe",
    sex: "F",
    age: 29,
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
