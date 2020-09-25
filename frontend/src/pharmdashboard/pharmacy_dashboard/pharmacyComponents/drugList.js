import React from "react";
import "./drugList.css";

import { Table, Space } from 'antd';

class DrugList extends React.Component {
  constructor(){
    super();

    this.state = {
      data : [{
        key: '0',
        doctor: 'John Brown',
        name: 'Paracetamol',
        price: "$20.00",
        productimage:'https://img.icons8.com/dusk/2x/chart.png'
      },
      {
        key: '1',
        doctor: 'Israel Akinsanya',
        name: 'Paracetamol',
        price: "$20.00",
         productimage:'https://img.icons8.com/dusk/2x/chart.png'
      }]
    }

    this.handleDel = this.handleDel.bind(this);
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
        title: 'DrugImage',
        dataIndex: 'doctor',
        key: 'doctor',
        render: (text, record) => {
     return (
      <div>
      <img src={record.productimage}/>
      {/*<Avatar src={record.productimage}/> */}
        <div>
         <div>{record.productnumber}</div>
         <a href="javascript:alert('ciao');">{record.productname}</a>
         </div>
      </div>
    );},
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
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

        <Table
          columns={columns}
          dataSource={this.state.data}
        />
      </div>
    );
  }
}

export default DrugList;
