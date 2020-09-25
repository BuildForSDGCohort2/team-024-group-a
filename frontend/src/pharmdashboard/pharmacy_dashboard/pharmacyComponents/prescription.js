import React from "react";
import "./prescription.css";
import { Row, Col, Divider } from 'antd';
import { Typography } from 'antd';
import { Table } from "antd";

const { Title } = Typography;
const style = { background: 'rgba(128, 128, 128, 0.08)', color: 'black', padding: '8px 0', height: '125px', width:'250px'};

const columns = [
  { title: "Patient", dataIndex: "patient", key: "patient" },
  { title: "Doctor", dataIndex: "doctor", key: "doctor" },
  { title: "Prescription", dataIndex: "prescription", key: "prescription" },
  { title: "ID", dataIndex: "id", key: "id" },
];

const data = [
  {
    key: 1,
    patient: "Ola Brown",
    doctor: "Dr Ola Brown",
    prescription: "Paracetamol",
    id: 'ID2345'
  },
  {
    key: 2,
    patient: "Ola Brown",
    doctor: "Aproko Doctor",
    prescription: "Paracetamol",
    id: 'ID2345'
  },
  {
    key: 3,
    patient: "Ola Brown",
    doctor: "Olu Funmilayo",
    prescription: "Paracetamol",
    id: 'ID2345'
  },
  {
    key: 4,
    patient: "Ola Brown",
    doctor: "Joe Black",
    prescription: "Paracetamol",
    id: 'ID2345'
  },
  {
    key: 5,
    patient: "Ola Brown",
    doctor: "John Doe",
    prescription: "Paracetamol",
    id: 'ID2345'
  },
];
class Prescription extends React.Component {
  render() {
    return (
      <div>
      <>

      <Divider orientation="left">Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
         <div style={style}>
           <Title level={5} style={{ textAlign: 'center'}}>Awaiting Collection</Title>
           <Title level={6} style={{ marginTop: '3px', textAlign: 'center'}}>10</Title>
           <p style={{ marginTop: '-20px', textAlign: 'center'}}>Last Updated</p>
           <p style={{ marginTop: '-15px', textAlign: 'center'}}>12 Minutes Ago</p>
         </div>
      </Col>

      <Col className="gutter-row" span={6}>
      <div style={style}>
        <Title level={5} style={{ textAlign: 'center'}}>Processing</Title>
        <Title level={6} style={{ marginTop: '3px', textAlign: 'center'}}>15</Title>
        <p style={{ marginTop: '-20px', textAlign: 'center'}}>Last Updated</p>
        <p style={{ marginTop: '-15px', textAlign: 'center'}}>12 Minutes Ago</p>
      </div>
      </Col>

      <Col className="gutter-row" span={6}>
      <div style={style}>
        <Title level={5} style={{ textAlign: 'center'}}>Completed</Title>
        <Title level={6} style={{ marginTop: '3px', textAlign: 'center'}}>20</Title>
        <p style={{ marginTop: '-20px', textAlign: 'center'}}>Last Updated</p>
        <p style={{ marginTop: '-15px', textAlign: 'center'}}>12 Minutes Ago</p>
      </div>
      </Col>
    </Row>

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

    </>
      </div>
    );
  }
}

export default Prescription;
