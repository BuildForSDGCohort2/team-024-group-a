import React from "react";
import {Link} from "react-router-dom";
import Nav from "../../components/nav/nav";
import { Layout, Button , Row, Col} from "antd";
import "./landingPage.css";
import medicalSvgPanel1 from "../../assest/images/medical-svg.svg";
import {FieldTimeOutlined, 
    LikeOutlined, 
    FileProtectOutlined, 
    StarOutlined, 
    RiseOutlined, 
    UserOutlined, 
    CreditCardOutlined,
     PhoneOutlined} from "@ant-design/icons";
const { Header, Content } = Layout;

class LandingPage extends React.Component {
    render(){
        return (
            <div style={{overflow: "hidden"}}>
                <Layout className="landing-site-layout">
                    <Header className="header-container">
                      <Nav />
                       <div className="home-text flex-center">
                         <h3>FAST, AFFORDABLE & RELIABLE</h3>
                         <h1>Medical Testing!</h1>
                         <button>BOOK AN APPOINTMENT</button>
                       </div>
                    </Header>
                <Content className="landing-section">
                    {/* <div className="flex"> */}
                    <Row>
                            <Col xs={32} sm={32} md={13} lg={13} xl={13} >
                                <div className="side-img">
                                    <img src={medicalSvgPanel1} alt="medical help" width="90%" height="90%" />
                                </div>
                            </Col>
                            <Col xs={32} sm={32} md={11} lg={11} xl={11} >
                                <div className="side-panel">
                                    <div className="details-card">
                                    <p className="top-mark"></p>
                                    <p style={{fontSize: '17px', fontWeight: 700, margin: 0}}>Why Medical <br/> Testing Matters...</p>
                                    <Link className="gray-about-text" to="/about">about us</Link>
                                    <p>Timely, courelous & so cheap!!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. voluptas vel totam repellendus quod provident! deserunt aspernatur libero, cum a quo minus nostrum repudiand</p>
                                    <div><Link to="/signup"><Button className="btn-border-round" type="dashed">Get started</Button></Link></div>
                                    </div>
                                </div>
                            </Col>
                    
                        </Row>
                    {/* </div> */}
                </Content>

                <Content className="feature-container landing-section bg-white">
                   <>
                     <p className="top-mark"></p>
                     <h2>What Makes Us the Best?</h2>
                     <p>OUR FEATURES</p>
                     <div className="features-row-container">
                        <Row gutter={{ xs: 32 , sm: 16, md: 24, lg: 32 }}>
                            <Col className="feature-col" xs={12} sm={11} lg={6} xl={6}>
                              <div className="icon">
                               <CreditCardOutlined />
                              </div>
                              <h2>WE'RE AFFORDABLE</h2>
                            </Col>
                            <Col className="feature-col"  xs={12} sm={11} lg={6} xl={6} >
                                <div className="icon">
                                 <FieldTimeOutlined />
                                </div>
                                <h2>WE'RE FAST</h2>
                            </Col>
                            <Col className="feature-col"  xs={12} sm={11} lg={6} xl={6}>
                                <div className="icon"><LikeOutlined /></div>
                                <h2>WE'RE EXPERIENCE</h2>
                             </Col>
                             <Col className="feature-col"  xs={12} sm={11} lg={6} xl={6}>
                                <div className="icon"><FileProtectOutlined /></div>
                                <h2>WE'RE CERTIFIED</h2>
                            </Col>
                        </Row>
                        <Row gutter={{ xs: 32, sm: 16, md: 24, lg: 32 }}>
                          <Col className="feature-col"  xs={12} sm={11} lg={6} xl={6}>
                                <div className="icon"><StarOutlined /></div>
                                <h2>QUALITY</h2>
                            </Col>
                            <Col className="feature-col"  xs={12} sm={11} lg={6} xl={6}>
                                <div className="icon"><RiseOutlined /></div>
                                <h2>INNOVATION</h2>
                            </Col>
                            <Col className="feature-col"  xs={12} sm={11} lg={6} xl={6}>
                                <div className="icon"><UserOutlined /></div>
                                <h2>COLLABORATION</h2>
                            </Col>
                            <Col className="feature-col"  xs={12} sm={11} lg={6} xl={6}>
                                <div className="icon"><PhoneOutlined /></div>
                                <h2>24/7 REDINESS</h2>
                            </Col>
                        </Row>
                     </div>
                   </>
                </Content>

                </Layout>
            </div>
        );
    };
};

export default LandingPage;