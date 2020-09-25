import React from "react";
import "./profile.css";

import { Card, Col, Row } from "antd";

class App extends React.Component {
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
              <Card title="Pharmacy Name" bordered={false}>
                 Swift Pharmacy
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Phone Number" bordered={false}>
                +234 XXXXXXXXXX
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Email" bordered={false}>
                Johndoe@example.com
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Number of Staffs" bordered={false}>
                200
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Country" bordered={false}>
                Nigerian
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Date Of Registeration of Pharmacy" bordered={false}>
                01/01/0001
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Pharmacy Address" bordered={false}>
                55, example street, example town, example city.
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
