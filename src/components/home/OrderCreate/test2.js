<div>
  <Row gutter={30}>
    <Col md={20} xl={20} sm={22} lg={20}>
      <Form onFinish={onFinish}>
        {formFields &&
          formFields.map((field) => {
            return field.formType === "textInp" ? (
              <Col md={8} xs={24} key={field.label}>
                <Form.Item name={field.label} label={field.label}>
                  <Input />
                </Form.Item>
              </Col>
            ) : field.formType === "imgField" ? (
              <Col md={8} xs={24} key={field.label}>
                <Upload {...props}>
                  <label>{field.label} </label>
                  <br />
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Col>
            ) : field.formType === "numberInp" ? (
              <Col md={8} xs={24} key={field.label}>
                <Form.Item name={field.label} label={field.label}>
                  <InputNumber />
                </Form.Item>
              </Col>
            ) : field.formType === "select" ? (
              <Col md={8} xs={24} key={field.label}>
                <Form.Item name={field.label} label={field.label}>
                  <Select>
                    {console.log(field.options.split(","))}
                    {field.options.split(",").map((opt) => (
                      <Option value={opt}>{opt}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            ) : field.formType === "date" ? (
              <Col md={8} xs={24} key={field.label}>
                <Form.Item name={field.label} label={field.label}>
                  <DatePicker />
                </Form.Item>
              </Col>
            ) : (
              <Col md={8} xs={24} key={field.label}>
                <Form.Item name={field.label} label={field.label}>
                  <Input />
                </Form.Item>
              </Col>
            );
          })}
        <div>
          <Button type="primary" htmlType="submit" name="payNow">
            Pay Now
          </Button>
          <Button
            name="payLater"
            type="primary"
            htmlType="submit"
            onClick={setPayLater(true)}
          >
            Pay Later
          </Button>
        </div>
      </Form>
    </Col>
  </Row>
</div>;
