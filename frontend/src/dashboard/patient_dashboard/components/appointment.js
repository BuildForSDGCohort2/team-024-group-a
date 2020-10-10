import React from "react";
import "./appointment.css";

import { Table, Space } from 'antd';

class Appointments extends React.Component {
  constructor(){
    super();

    this.state = {
      data : [{
        key: '0',
        doctor: 'John Brown',
        sex: "M",
        description: "Diabetes",
        date: "25-Aug-1010",
        time: "00:00 ZM"
      },
      {
        key: '1',
        doctor: 'Israel Akinsanya',
        sex: "F",
        description: 'High Blood Pressure',
        date: "25-Aug-1010",
        time: "02:00 ZM"
      }]
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleAdd() {
    let newEntry = {
      key: '3',
      doctor: 'Doctor',
      sex: "X",
      description: 'Low Blood Pressure',
      date: "26-Aug-1010",
      time: "00:00 ZM"
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
        title: 'Doctor',
        dataIndex: 'doctor',
        key: 'doctor',
      },
      {
        title: 'Sex',
        dataIndex: 'sex',
        key: 'sex',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
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
        <button onClick={this.handleAdd} className="add-btn">ADD APPOINTMENT</button>
        <Table
          columns={columns}
          dataSource={this.state.data}
        />
      </div>
    );
  }
}

export default Appointments;
