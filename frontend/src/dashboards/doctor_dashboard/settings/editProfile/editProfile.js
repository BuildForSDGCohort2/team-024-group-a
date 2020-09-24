import React from "react";
import "./editProfile.css";

import { Form, Input, Button, Select, DatePicker, Space, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

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

      <Form.Item label="Home Address">
        <Input placeholder="77, BLOCK A, AJAO ESTATE" />
      </Form.Item>

      <Form.Item label="City">
        <Input placeholder="Dallas" />
      </Form.Item>

      <Form.Item label="Country">
        <Input placeholder="IRAQ" />
      </Form.Item>

      <Form.Item label="School Attended">
        <Input placeholder="UNIVERSITY OF UNIVERSITIES, TOWN, CITY." />
      </Form.Item>

      <Form.Item label="Duration Of School Attended (Years)">
        <Space direction="vertical" size={12}>
          <RangePicker picker="year" />
        </Space>
      </Form.Item>

      <Form.Item label="Area Of Study">
        <Input placeholder="GYNEACOLOGY" />
      </Form.Item>

      <Form.Item label="What Are You?">
        <Input placeholder="GYNAECOLOGIST" />
      </Form.Item>

      <Form.Item label="Folio Number">
        <Input placeholder="2222-2222-2222" />
      </Form.Item>

      <Form.Item label="Employment Status">
        <Select>
          <Select.Option value="employed">Employed</Select.Option>
          <Select.Option value="selfEmployed">Self-Employed</Select.Option>
          <Select.Option value="unemployed">Unemployed</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Upload Document(s) (Certificate/ Id card/ Employment letter/ License)">
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

      <Form.Item>
        <Button type="primary">UPDATE</Button>
      </Form.Item>
    </div>
  );
};

export default EditProfile;
