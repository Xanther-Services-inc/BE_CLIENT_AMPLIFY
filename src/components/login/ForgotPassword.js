import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Form, Input, Button } from 'antd';
import { AuthWrapper } from './style';
import Axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
// import Heading from '../../../../components/heading/heading';

const ForgotPassword = () => {
  let history = useHistory();
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    // 

    const url = `${process.env.REACT_APP_API}/api/v1/user/reset-password-mail`;
  
    const proData = await Axios.post(url, values)
         if(proData.data.Item) {
          swal("Congratulation!", "Mail send successfully.", "success")
         } else { 
          swal("Warning!", "User Not found!.", "warning")
         }
  
      history.push('/login')
    }

  return (
    <AuthWrapper>
      <div className="auth-contents">
        <Form name="forgotPass" form={form} onFinish={handleSubmit} layout="vertical">
          <h1 as="h3">Forgot Password?</h1>
          <p className="forgot-text">
            Enter the email address you used when you joined and we’ll send you instructions to reset your password.
          </p>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
          >
            <Input placeholder="name@example.com" />
          </Form.Item>
          <Form.Item>
            <Button className="btn-reset" htmlType="submit" type="primary" size="large">
              Send Reset Instructions
            </Button>
          </Form.Item>
          <p className="return-text">
            Return to <NavLink to="/login">Sign In</NavLink>
          </p>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;
