import React from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  name: "file",
  action: `${process.env.REACT_APP_API}/api/v1/upload`,
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const order_forms = () => {
  Object.keys(form_fields).forEach((key) => {
    console.log(key, form_fields[key]);
    return (
      <div>
        {form_fields[key] == "String" ? (
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        ) : form_fields[key] == "Image" ? (
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        ) : form_fields[key] == "Number" ? (
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
        ) : form_fields[key] == "Date" ? (
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
        ) : form_fields[key] == "Option" ? (
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        ) : null}
      </div>
    );
  });
};

export default order_form_fields;
