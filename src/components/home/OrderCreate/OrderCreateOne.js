import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Row, Col, Form, Input, Button, Checkbox, DatePicker, Select, Upload } from 'antd';
import { FormValidationWrap, VerticalFormStyleWrap } from './dependency/Style';
import { Main } from './dependency/styled'
import { Cards } from './dependency/cards-frame';
import "antd/dist/antd.css";
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import Header1 from '../../Header1'
import Footer1 from '../../Footer1'
import {useDispatch, useSelector} from 'react-redux';
import jwt_decode from "jwt-decode";
import RSelect from 'react-select'

const {Dragger} = Upload

const FormValidation = () => {

  const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin


 

  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {

       let {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/products`)
       setProducts(data)
       console.log(data);
       console.log(jwt_decode(userInfo.token).email);
      }
      fetchData() 
    }, [])

    const [selected, setSelected] = useState(null)

    const onChangeProduct = (obj) => {
      setSelected(obj)
      console.log(selected);
    }

    const options = products.map((product) => {
      return {value: product.title, label: product.title, price: product.price}
    })
  // const validateMessages = {
  //   types: {
  //     city: '',
  //     state: '',
  //     zip: '',
  //     checkbox: '',
  //     product: '',
  //     country: ''
  //   },
  // };
  // function onChange() {}

  let history = useHistory()


  const [form] = Form.useForm();
  const [fileName, setFileName] = useState('')
  const onChangeFile = (e) => {
    setFileName(e.target.files)
    console.log(e.target.files);
  }
  console.log(fileName);

// const [payment, setPayment] = useState('')

  const handlePayNow = () => {
    // setPayment('Paid')
    history.push('/pay-now')
  }

  // const handlePayLater = () => {
  //   setPayment('Due')
  // }



  const handleSubmitOrder = (values) => {
   
    var event = new Date(values.dob)
    let dob = JSON.stringify(event)
    dob = dob.slice(1,11)

    console.log(values.firstName);
    var fd = new FormData();
    fd.append('firstName',values.firstName);
    fd.append('lastName',values.lastName);
    fd.append('gender',values.gender);
    fd.append('email',jwt_decode(userInfo.token).email);
    fd.append('phone',values.phone);
    fd.append('dob',dob);
    fd.append('pan',values.pan);
    fd.append('country',values.country);
    fd.append('state',values.state);
    fd.append('city',values.city);
    fd.append('zip',values.zip);
    fd.append('product_id',selected.value);
    fd.append('price', selected.price);
    // fd.append('payment', 'Due')
    for (const key of Object.keys(fileName)) {

      fd.append('image', fileName[key]);
    }
    console.log(values.product_id);
    
    
  
  const config = {
    headers: {'content-type': 'multipart/form-data', "Authorization" : `Bearer ${userInfo.token}`}
}
  const url = `${process.env.REACT_APP_API}/api/v1/order`;

  axios.post(url, fd, config).then((response) =>
        console.log(response)
    ).catch((error) => console.log(error))
    history.push('/order-success')
}

useLayoutEffect(() => {
  window.scrollTo(0, 0)
});
  return (
    <>
      
      <Main>
      <Header1 /><br /><br />
        <Row gutter={25}>
          <Col xs={24}>
            <FormValidationWrap>
              <VerticalFormStyleWrap>
                <Cards title="Create a New Order">
                  <Form name="Dash_validation-form" onFinish={handleSubmitOrder} form={form} layout="vertical" >
                    <Row gutter={30}>
                      <Col md={8} xs={24}>
                        <Form.Item
                          name="firstName"
                          label="First Name"
                          // rules={[{ required: true, message: 'First Name required!' }]}
                        >
                          <Input placeholder="First Name" />
                        </Form.Item>
                      </Col>
                      <Col md={8} xs={24}>
                        <Form.Item
                          name="lastName"
                          label="Last Name"
                          // rules={[{ required: true, message: 'Last Name required!' }]}
                        >
                          <Input placeholder="Last Name" />
                        </Form.Item>
                      </Col>
                      <Col md={6} xs={24}>
                        <Form.Item name="gender" label="Select Gender">
                          <Select>
                            <Select.Option value='Male'>Male</Select.Option>
                            <Select.Option value='Female'>Female</Select.Option>
                            <Select.Option value='Other'>Other</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      
                      <Col md={8} xs={24}>
                        <Form.Item name="phone" label="Phone Number" >
                          <Input placeholder="Phone Number" />
                        </Form.Item>
                      </Col>
                      <Col md={6} xs={24}>
                        <Form.Item name="dob" label="Date Of Birth">
                          <DatePicker />
                        </Form.Item>
                      </Col>
                      <Col md={6} xs={24}>
                        <Form.Item name="pan" label="PAN" >
                          <Input placeholder="PAN" />
                        </Form.Item>
                      </Col>
                      <Col md={6} xs={24}>
                        <Form.Item name="country" label="Country" >
                          <Input placeholder="Country" />
                        </Form.Item>
                      </Col>
                      
                      <Col md={6} xs={24}>
                        <Form.Item name="state" label="State" >
                          <Input placeholder="State" />
                        </Form.Item>
                      </Col>
                      <Col md={6} xs={24}>
                        <Form.Item name="city" label="City" >
                          <Input placeholder="City" />
                        </Form.Item>
                      </Col>
                      <Col md={6} xs={24}>
                        <Form.Item name="zip" label="Zip" >
                          <Input placeholder="Zip" />
                        </Form.Item>
                      </Col>
                      
                      <Col md={6} xs={24}>
                      <Form.Item name='product_id' label='Select Product'>
                      <RSelect options={options} value={selected ? selected : ''} onChange={onChangeProduct} />
                      </Form.Item>
                      </Col>
                      <Col md={6} xs={24}>
                      <Form.Item name='price' label='Price'>
                      <strong>RS: {selected ? selected.price : 0}</strong>
                      </Form.Item>
                  </Col>

                     
                      <Col md={6} xs={24}>
                      {/* <Form.Item name="image" label="Upload PAN">
                      <Dragger>
                          <p className="ant-upload-text">Drop files here to upload</p>
                      </Dragger>
                      </Form.Item> */}
                      <br />
                        <input fileName='image' name='image' multiple onChange={onChangeFile} type='file' />
                      
                      </Col>

                    </Row>
                    
                    <div className="sDash_form-action mt-20">
                    
                    {/*<Button htmlType='submit' onClick={handlePayNow} type="primary" size="large">
                    Pay advance get flat 5% off
                    </Button>*/}
                      <Button htmlType="submit" type="primary" size="large">
                        Confirm Order
                      </Button>
                    </div>
                  </Form>
                </Cards>
              </VerticalFormStyleWrap>
            </FormValidationWrap>
          </Col>
          </Row>
          <Footer1 />
      </Main>
    </>
  );
};

export default FormValidation;