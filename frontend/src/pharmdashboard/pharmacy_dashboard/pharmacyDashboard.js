import React from 'react';
import './pharmacyDashboard.css';
import logo from "../src/swiftHealthLogo.png";
import { Typography, Button } from 'antd';
import { notification } from 'antd';

import Profile from "./components/profile";
import EditProfile from "./components/editProfile";
import ChangePassword from "./components/changePassword";
import Ratings from "./components/ratings";
import Prescription from "./components/prescription";
import DrugList from "./components/drugList";
import IncludeDrug from "./components/includeDrug";
import DeliveryProfile from "./components/deliveryProfile";
import DeliveryForm from "./components/deliveryForm";

import { Layout, Menu, Dropdown } from "antd";
import {
  SettingOutlined,
  StockOutlined,
  ContainerOutlined,
  UserOutlined,
  DownOutlined,
  BellTwoTone,
  MedicineBoxOutlined
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

class PharmacyDashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      tabNavigations: {
        profile: true,
        editProfile: false,
        changePassword: false,
        ratings: false,
        prescription: false,
        drugList: false,
        includeDrug: false,
        deliveryProfile: false,
        deliveryForm: false
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let copyState = { ...this.state.tabNavigations };
    for (let key in copyState) {
      if (key === e.target.value) {
        copyState[key] = true;
      } else {
        copyState[key] = false;
      }
    }

    this.setState({
      tabNavigations: copyState,
    });
  }

  render() {

    const settingsMenu = (
      <Menu>
        <Menu.Item>
          <button onClick={this.handleClick} value="editProfile">
            Edit Profile
          </button>
        </Menu.Item>
        <Menu.Item>
          <button onClick={this.handleClick} value="changePassword">
            Change Password
          </button>
        </Menu.Item>
      </Menu>
    );

    const drugsMenu = (
      <Menu>
        <Menu.Item>
          <button onClick={this.handleClick} value="drugList">
            DrugList
          </button>
        </Menu.Item>
        <Menu.Item>
          <button onClick={this.handleClick} value="includeDrug">
             Add Drugs
          </button>
        </Menu.Item>
      </Menu>
    );

    const deliverysMenu = (
      <Menu>
        <Menu.Item>
          <button onClick={this.handleClick} value="deliveryProfile">
            Riders
          </button>
        </Menu.Item>
        <Menu.Item>
          <button onClick={this.handleClick} value="deliveryForm">
            Add Rider
          </button>
        </Menu.Item>
      </Menu>
        );

    return (
      <div className="body">
        <Layout>
          <Sider
            style={{
              height: "97vh",
              left: 0,
            }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="user">
              <img
                src={logo}
                alt="swift health logo"
                width="100px"
                height="120px"
              />
              <Title level={5} style={{ textAlign: 'center', color: 'white', fontFamily: 'serif'}}>swiftHealth</Title>
            </div>

            <Menu mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <button onClick={this.handleClick} value="profile">
                  Profile
                </button>
              </Menu.Item>
              <Menu.Item key="2" icon={<ContainerOutlined />}>
                <Dropdown overlay={drugsMenu}>
                  <button>
                    Drugs <DownOutlined />
                  </button>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="2" icon={<SettingOutlined />}>
                <Dropdown overlay={deliverysMenu}>
                  <button>
                    Delivery <DownOutlined />
                  </button>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="4" icon={<MedicineBoxOutlined />}>
                <button onClick={this.handleClick} value="prescription">
                  Prescription
                </button>
              </Menu.Item>
              <Menu.Item key="5" icon={<StockOutlined />}>
                <button onClick={this.handleClick} value="ratings">
                  Ratings
                </button>
              </Menu.Item>
              <Menu.Item key="6" icon={<SettingOutlined />}>
                <Dropdown overlay={settingsMenu}>
                  <button>
                    Settings <DownOutlined />
                  </button>
                </Dropdown>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background top-nav"
              style={{ padding: 0 }}
            >
              <img
                src={logo}
                alt="swift health logo"
                width="60px"
                height="60px"
              />

              <Button type="primary" onClick={openNotification} className="notify">
                 <BellTwoTone />
              </Button>
            </Header>
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                {this.state.tabNavigations.profile ? <Profile /> : null}
                {this.state.tabNavigations.editProfile ? <EditProfile /> : null}
                {this.state.tabNavigations.changePassword ? (
                  <ChangePassword />
                ) : null}
                {this.state.tabNavigations.ratings ? <Ratings /> : null}
                {this.state.tabNavigations.prescription ? <Prescription /> : null}
                {this.state.tabNavigations.drugList ? <DrugList /> : null}
                {this.state.tabNavigations.includeDrug ? <IncludeDrug /> : null}
                {this.state.tabNavigations.deliveryProfile ? <DeliveryProfile /> : null}
                {this.state.tabNavigations.deliveryForm ? <DeliveryForm /> : null}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default PharmacyDashboard;
