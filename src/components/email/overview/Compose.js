import React, { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import RichTextEditor from 'react-rte';
import { Form, Input, Button } from 'antd';
import propTypes from 'prop-types';
import {useSelector} from 'react-redux'
import jwt_decode from 'jwt-decode'
import { MailBox } from './style';
import Axios from 'axios';
import Select from 'react-select';
import {useHistory} from 'react-router-dom'



const Compose = ({ close }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrderId = async () => {
      const {data} = await Axios.get(`${process.env.REACT_APP_API}/api/v1/user/orders`, { headers: {"Authorization" : `Bearer ${userInfo.token}`}} )
      setOrders(data)
    }
    fetchOrderId()
  }, [])

  const orderOptions = orders.map((order) => {
    return {value: order.id, label: order.id}
  })
  const [selectedOrderId, setSelectedOrderId] = useState({})

  const handleOrderId = (obj) => {
    setSelectedOrderId(obj)
  }

const options = [
  { value: 'Issue1', label: 'Issue1' },
  { value: 'Issue2', label: 'Issue2' },
  { value: 'Issue3', label: 'Issue3' }
]

const [category, setCategory] = useState({})

  const handleCat = (obj) => {
    setCategory(obj)
  }
  console.log(category);

  let history = useHistory()

  const handleSubmit = values => {

    const order_id = selectedOrderId.value
    const issue_details = values.details
    const issue_category = category.value
    const email = jwt_decode(userInfo.token).email
    const title = values.title

    const url = `${process.env.REACT_APP_API}/api/v1/issue`;
  
    Axios.post(url, { issue_category: issue_category, details:issue_details, email: email,order_id:order_id, title: title}, { headers: {"Authorization" : `Bearer ${userInfo.token}`} }).then((response) =>
    
    window.alert('Issue Created Successfully')
    
    ).catch((error) => console.log(error))
  window.location.reload()
  }
  
  const [state, setState] = useState({
    value: RichTextEditor.createEmptyValue(),
    tags: [],
    size: 'small',
  });


  const [form] = Form.useForm();
 
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
  
    <MailBox style={{height: "62vh", top: "7rem"}} size={state.size}>
    <h4 style={{padding: '4px', textAlign: 'center', marginTop: '20px'}}><strong>Submit an Issue</strong></h4>
    <Form {...layout} form={form} name="control-hooks" onFinish={handleSubmit}>
    <Form.Item style={{paddingRight: "20px"}} name='order_id' label="Order Id" rules={[{ required: true }]}>
    <Select options={orderOptions} values={orderOptions} onChange={handleOrderId} />
        </Form.Item>
        <Form.Item style={{paddingRight: "20px"}} label="Issue Title" name='title' rules={[{ required: true }]}>
    <Input placeholder='Issue Title' />
        </Form.Item>
        <Form.Item style={{paddingRight: "20px"}} name='issue_category' label="Issue Category" rules={[{ required: true }]}>
        <Select options={options} values={options} onChange={handleCat} />
        </Form.Item>
        <Form.Item style={{paddingRight: "20px"}} name='details' label="Issue Details" rules={[{ required: true }]}>
        <Input.TextArea rows={3} placeholder='Issue Details' />
        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button style={{}} type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
    </Form>

   
      
    </MailBox>

  );
};

Compose.propTypes = {
  close: propTypes.func,
};

Compose.defaultProps = {
  close: () => {},
};

export default Compose;
