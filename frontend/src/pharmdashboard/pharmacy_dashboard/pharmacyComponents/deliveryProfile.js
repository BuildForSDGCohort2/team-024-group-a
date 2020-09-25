import React from "react";

import { Card, Col, Row } from "antd";

class DeliveryProfile extends React.Component {
  render() {
    return (
      <div className="App">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSKALzyP5GFd2GmS-MLSCFbThHTwgo1EYUiA&usqp=CAU"
          alt="profile avatar"
        />

        <div className="site-card-wrapper">
          <Row gutter={16} className="card-container">
            <Col span={16}>
              <Card title="Rider Name" bordered={false}>
                 Idris AbdulRasheed
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Phone Number" bordered={false}>
                +234 XXXXXXXXXX
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DeliveryProfile;
