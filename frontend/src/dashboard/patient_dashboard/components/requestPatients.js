import React from "react";
import "./requestPatients.css";

import { List } from "antd";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    _id: `${i}`,
    name: `John Doe ${i}`,
    img: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
    age:"100",
    sex: "M",
    description:
      `We supply a series of design principles,
      practical patterns and high quality design resources (Sketch and Axure),
      to help people create their product prototypes beautifully and efficiently.`,
  });
}

class SearchPatients extends React.Component {
  render() {
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 10,
          }}
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              key={item._id}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src={item.img}
                />
              }
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.name}</a>}
                description={`AGE:${item.age} SEX:${item.sex}`}
              />
              {item.description} <br />
              <button>ACCEPT PATIENT</button>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default SearchPatients;
