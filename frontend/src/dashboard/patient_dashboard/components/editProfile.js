import React from "react";
import "./editProfile.css";

import { Form, Input, Button, Select, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const EditProfile = () => {
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <div>
      <Form.Item label="Name">
        <Input placeholder="JOHN DOE JNR" />
      </Form.Item>

      <Form.Item label="Sex">
        <Select>
          <Select.Option value="male">MALE</Select.Option>
          <Select.Option value="female">FEMALE</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Date Of Birth">
        <Input placeholder="22/22/2222" />
      </Form.Item>

      <Form.Item label="Email">
        <Input placeholder="johndoe@example.com" />
      </Form.Item>

      <Form.Item label="Phone Number">
        <Input placeholder="09000000000" />
      </Form.Item>

      <Form.Item label="Alternative Number">
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


      <Form.Item label="Country">
        <Input placeholder="IRAQ" />
      </Form.Item>

      <Form.Item label="Medical Issues?">
        <Select>
          <Select.Option value="employed">YES</Select.Option>
          <Select.Option value="selfEmployed">NO</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Upload Profile Picture">
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
        <Button type="primary" style={{ borderRadius: 20 }}>UPDATE</Button>
        <Button type="primary" style={{ borderRadius: 20, marginLeft: 10 }}>CANCEL</Button>
      </Form.Item>
    </div>
  );
};

export default EditProfile;
