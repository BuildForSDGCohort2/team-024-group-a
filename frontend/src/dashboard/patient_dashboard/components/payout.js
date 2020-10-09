import React from 'react';
import './pay.css';
import { Divider } from 'antd';
import { Form, Input, Button } from "antd";

class Pay extends React.Component {
    render() {
        return (
  <>
    <Divider orientation="left" style={{ fontSize: 20}}>PAYMENT</Divider>
    <p>You will be redirected to our trusted Card payment partner PAYSTACK, where you can enter you details and add money to your wallet.</p>

    <Form.Item label="Enter Amount">
      <Input style={{ width: 200 }}/>
    </Form.Item>

          <Button type="primary" style={{ borderRadius: 20, marginLeft: 75, marginBottom: 55 }}>PAY WITH CARD</Button>
  </>
);
}
};

export default Pay;
