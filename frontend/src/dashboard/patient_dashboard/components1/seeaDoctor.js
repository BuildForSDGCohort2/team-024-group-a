import React from "react";
import "./seeaDoctor.css";

import { Form, Input, Button, Select, DatePicker, Space, Upload } from "antd";
import { Typography } from 'antd';
import { InboxOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { Title } = Typography;

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

      <Form.Item label="Client Name">
        <Input placeholder="JOHN DOE JNR" />
      </Form.Item>

      <Form.Item label="Gender">
        <Select>
          <Select.Option value="male">MALE</Select.Option>
          <Select.Option value="female">FEMALE</Select.Option>
        </Select>
      </Form.Item>



      <Form.Item label="Phone Number">
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

      <Form.Item label="Medical Issues?">
        <Select>
          <Select.Option value="employed">YES</Select.Option>
          <Select.Option value="selfEmployed">NO</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Available for FOLLOW-UPS?">
        <Select>
          <Select.Option value="employed">YES</Select.Option>
          <Select.Option value="selfEmployed">NO</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Additional Information">
        <Input placeholder="Type here..." />
      </Form.Item>

      <Form.Item label="Upload Last Medical Document(if)">
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
