import React from "react";
import "./doctorDashboard.css";
import logo from "../../assest/images/swiftHealthLogo.png";
import { Link } from "react-router-dom";

import Profile from "./profile/profile";
import Appointments from "./appointments/appointments";
import ActivePatients from "./patients/activePatients/activePatients";
import RequestPatients from "./patients/requestPatients/requestPatients";
import HistoryPatients from "./patients/historyPatients/historyPatients";
import EditProfile from "./settings/editProfile/editProfile";
import ChangePassword from "./settings/changePassword/changePassword";
import Ratings from "./ratings/ratings";

import { Layout, Menu, Dropdown } from "antd";
import {
  SettingOutlined,
  StockOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  ContactsOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

class DoctorDashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      tabNavigations: {
        profile: true,
        appointments: false,
        activePatients: false,
        requestPatients: false,
        historyPatients: false,
        editProfile: false,
        changePassword: false,
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
          <button onClick={this.handleClick} value="activePatients">
            Active Patients
          </button>
        </Menu.Item>
        <Menu.Item>
          <button onClick={this.handleClick} value="requestPatients">
            Request Patients
          </button>
        </Menu.Item>
        <Menu.Item>
          <button onClick={this.handleClick} value="historyPatients">
            Patients History
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

    return (
      <div>
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
              <h1>Dr. John Doe</h1>
              <span>Gyneacologist</span>
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
                    Patients <DownOutlined />
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

              <Link to="/">Log Out</Link>
              <Link to="/">Home</Link>
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
                {this.state.tabNavigations.activePatients ? (
                  <ActivePatients />
                ) : null}
                {this.state.tabNavigations.requestPatients ? (
                  <RequestPatients />
                ) : null}
                {this.state.tabNavigations.historyPatients ? (
                  <HistoryPatients />
                ) : null}
                {this.state.tabNavigations.editProfile ? <EditProfile /> : null}
                {this.state.tabNavigations.changePassword ? (
                  <ChangePassword />
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
