import React from 'react';
import './Doctor.css';
import { Card } from 'antd';
import { Rate } from 'antd';
import { Avatar } from 'antd';
import {
   MoreOutlined,
   UserOutlined
} from '@ant-design/icons';

export class Doctor extends React.Component {
    render() {
        return (

  <div className="cardie">
    <Card title="John Adeniran" extra={<a href="#"><MoreOutlined /></a>} style={{ width: 300 }}>
     <Avatar size={64} icon={<UserOutlined />} /><br />
          <h1 className="post">Medical Doctor</h1>
        <Rate style={{ color: 'yellow' }}/>
      <p className="appoin">BOOK APPOINTMENT</p>
    </Card>
    </div>
  );
  }
  };

  export default Doctor;
