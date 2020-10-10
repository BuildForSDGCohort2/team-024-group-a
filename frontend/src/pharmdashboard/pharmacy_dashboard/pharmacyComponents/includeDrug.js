import React from "react";
import "./editProfile.css";

import { Form, Input, Button, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const IncludeDrug = () => {
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <div>
      <Form.Item label="Drug Name:">
        <Input placeholder="Inflasin" />
      </Form.Item>

      <Form.Item label="Drug Price:">
        <Input placeholder="#2000" />
      </Form.Item>

      <Form.Item label="Upload Drug Image:">
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
        <Button type="primary" style={{ borderRadius: 20 }}>SUBMIT</Button>
        <Button type="primary" style={{ borderRadius: 20, marginLeft: 10 }}>CANCEL</Button>
      </Form.Item>
    </div>
  );
};

export default IncludeDrug;
