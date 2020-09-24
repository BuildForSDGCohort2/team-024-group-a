import React from "react";
import "./appointment.css";

import { Table, Space } from 'antd';

class Balance extends React.Component {
  constructor(){
    super();

    this.state = {
      data : [{
        key: '0',
        date: "25-Aug-1010",
        time: "00:00 ZM",
        type: "Credit",
        amount: "500",
        balance: "200"
      },
      {
        key: '1',
        date: "25-Aug-1010",
        time: "00:00 ZM",
        type: "Credit",
        amount: "500",
        balance: "0"
      }]
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleAdd() {
    let newEntry = {
      key: '3',
      date: "25-Aug-1010",
      time: "00:00 ZM",
      type: "Credit",
      amount: "500",
      balance: "0"
    }
    this.setState({
      data: [...this.state.data, newEntry]
    })
  }

  handleDel(e) {
    let id = e.target.value;
    let filtered = this.state.data.filter(val => val.key !== id);
    this.setState({
      data: filtered
    })
  }

  render() {
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
      },
      {
        title: 'Balance',
        dataIndex: 'balance',
        key: 'balance',
      },
      {
        title: 'Action',
        key: 'action',
        render: (appointment) => (
          <Space size="middle">
            <button className="del-btn" onClick={this.handleDel} value={appointment.key}>Delete</button>
          </Space>
        ),
      },
    ];
    return (
      <div className = "AppointmentContainer">
        <button className="add-btn">Transaction History</button>
        <Table
          columns={columns}
          dataSource={this.state.data}
        />
      </div>
    );
  }
}

export default Balance;
