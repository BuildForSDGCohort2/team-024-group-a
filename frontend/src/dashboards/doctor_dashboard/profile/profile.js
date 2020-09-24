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
              <Card title="Name" bordered={false}>
                Dr. John Doe
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
              <Card title="Gender" bordered={false}>
                Male
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Nationality" bordered={false}>
                Nigerian
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Date Of Birth" bordered={false}>
                01/01/0001
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Home Address" bordered={false}>
                55, example street, example town, example city.
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Medical Degree" bordered={false}>
                Bachelor of Medicine, Bachelor of Surgery (MBBS, BMBS, MBChB,
                MBBCh)
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Folio Number" bordered={false}>
                XXXX/XXXX/XXXX/XXXX
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Specialization" bordered={false}>
                Gynecology
              </Card>
            </Col>
            <Col span={16}>
              <Card title="School Recors(s)" bordered={false}>
                University of Example, example city, example country. <br />{" "}
                (1900 - 1999)
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Years of Practice" bordered={false}>
                January 1900 - present
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
