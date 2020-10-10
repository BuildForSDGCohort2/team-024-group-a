import React from 'react';
import './payment.css';
import { Divider } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';

const { Title } = Typography;

class Payment extends React.Component {
    render() {
        return (
  <>
    <Divider orientation="left" style={{ fontSize: 20}}>Subscription</Divider>
    <Title level={4} style={{ background: '#1E90FF', textAlign: 'left', marginLeft: '50px', color: 'white'}}>Choose Your Plan</Title>

     <div className="ones">
      <Title level={2} style={{color: 'white'}}>Individual Plan</Title>

         <Title level={5} style={{color: 'white'}}>Duration: 1 Month</Title>
         <Title level={5} style={{color: 'white'}}>Calls: 3 Calls</Title>

         <Button type="primary" className="choos">Choose Plan</Button>
   </div>

   <div className="ones">
    <Title level={2} style={{color: 'white'}}>Family Plan</Title>

       <Title level={5} style={{color: 'white'}}>Duration: 1 Month</Title>
       <Title level={5} style={{color: 'white'}}>Calls: 3 Calls</Title>

       <Button type="primary" className="choos">Choose Plan</Button>
 </div>

 <div className="ones">
  <Title level={2} style={{color: 'white'}}>Team Plan</Title>

     <Title level={5} style={{color: 'white'}}>Duration: 1 Month</Title>
     <Title level={5} style={{color: 'white'}}>Calls: 3 Calls</Title>

     <Button type="primary" className="choos">Choose Plan</Button>
</div>

  </>
);
}
};

export default Payment;
