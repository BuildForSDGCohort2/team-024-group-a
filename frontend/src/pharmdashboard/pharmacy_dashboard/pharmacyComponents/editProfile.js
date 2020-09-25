import React from "react";
import "./editProfile.css";

import { Form, Input, Button, Select, DatePicker, Space, Upload } from "antd";
import { Typography } from 'antd';
import { InboxOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { Title } = Typography;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const SeeaDoctor = () => {
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <div>

       <Title level={2} style={{ textAlign: 'center'}}>Consultation Form</Title>

      <Form.Item label="Pharmacy Name">
        <Input placeholder="swift Pharmacy" />
      </Form.Item>

      <Form.Item label="Delivery Nationwide Available?">
        <Select>
          <Select.Option value="yes">Yes</Select.Option>
          <Select.Option value="no">No</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Pharmacy Number">
        <Input placeholder="09000000000" />
      </Form.Item>

      <Form.Item label="Street Address">
        <Input placeholder="77, BLOCK A, AJAO ESTATE" />
      </Form.Item>

      <Form.Item label="City">
        <Input placeholder="Dallas" />
      </Form.Item>

      <Form.Item label="State">
        <Input placeholder="Ondo" />
      </Form.Item>

      <Form.Item label="Number of Staffs">
        <Input placeholder="200" />
      </Form.Item>

      <Form.Item label="Date of Registeration">
           <DatePicker onChange={onChange} style={{ width: '1000px' }}/>
      </Form.Item>

      <Form.Item label="Upload Registeration Certificate">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item style={{ textAlign: 'center' }}>
        <Button type="primary" style={{ borderRadius: 20, textAlign: 'center', width: 150 }}>SUBMIT</Button>

      </Form.Item>
    </div>
  );
};

export default SeeaDoctor;
