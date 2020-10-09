import React from 'react';
import './patientDashboard.css';
import logo from "../../assest/images/swiftHealthLogo.png";
import { Typography, Button } from 'antd';
import { notification } from 'antd';

import Profile from "./components/profile";
import Appointments from "./components/appointment";
import SeeaDoctor from "./components/seeaDoctor";
import HistoryPatients from "./components/historyPatients";
import EditProfile from "./components/editProfile";
import ChangePassword from "./components/changePassword";
import Payment from "./components/payment";
import Balance from "./components/balance";
import Payout from "./components/payout";
import Ratings from "./components/ratings";

import { Layout, Menu, Dropdown } from "antd";
import {
  SettingOutlined,
  StockOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  ContactsOutlined,
  DownOutlined,
  CreditCardFilled,
  BellTwoTone
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

class DoctorDashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      tabNavigations: {
        profile: true,
        appointments: false,
        seeaDoctor: false,
        historyPatients: false,
        editProfile: false,
        changePassword: false,
        payment: false,
        balance: false,
        payout: false,
        ratings: false,
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

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const patientsMenu = (
      <Menu>
      <Menu.Item>
        <button onClick={this.handleClick} value="seeaDoctor">
          See a Doctor
        </button>
      </Menu.Item>
        <Menu.Item>
          <button onClick={this.handleClick} value="historyPatients">
            History
          </button>
        </Menu.Item>
      </Menu>
    );

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

    const paymentsMenu = (
      <Menu>
        <Menu.Item>
          <button onClick={this.handleClick} value="balance">
            Balance/History
          </button>
        </Menu.Item>
        <Menu.Item>
          <button onClick={this.handleClick} value="payment">
             Subscription Plans
          </button>
        </Menu.Item>
        <Menu.Item>
          <button onClick={this.handleClick} value="payout">
            Payout
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
              <Menu.Item key="2" icon={<ContactsOutlined />}>
                <button onClick={this.handleClick} value="appointments">
                  Appointments
                </button>
              </Menu.Item>
              <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
                <Dropdown overlay={patientsMenu}>
                  <button>
                    Doctor <DownOutlined />
                  </button>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="4" icon={<SettingOutlined />}>
                <Dropdown overlay={settingsMenu}>
                  <button>
                    Settings <DownOutlined />
                  </button>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="4" icon={<CreditCardFilled />}>
                <Dropdown overlay={paymentsMenu}>
                  <button>
                    Payment <DownOutlined />
                  </button>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="5" icon={<StockOutlined />}>
                <button onClick={this.handleClick} value="ratings">
                  Ratings
                </button>
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
                {this.state.tabNavigations.appointments ? (
                  <Appointments />
                ) : null}
                {this.state.tabNavigations.seeaDoctor ? (
                  <SeeaDoctor />
                ) : null}
                {this.state.tabNavigations.historyPatients ? (
                  <HistoryPatients />
                ) : null}
                {this.state.tabNavigations.editProfile ? <EditProfile /> : null}
                {this.state.tabNavigations.changePassword ? (
                  <ChangePassword />
                ) : null}
                {this.state.tabNavigations.payment ? (
                  <Payment />
                ) : null}
                {this.state.tabNavigations.balance ? (
                  <Balance />
                ) : null}
                {this.state.tabNavigations.payout ? (
                  <Payout />
                ) : null}
                {this.state.tabNavigations.ratings ? <Ratings /> : null}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default DoctorDashboard;
