import React, {useState} from 'react'
import {Field, reduxForm} from 'redux-form'
import { useHistory } from "react-router-dom";
import {post} from 'axios'
import {Button, FormControl, Input, InputLabel, TextField, Select, MenuItem} from '@material-ui/core'
// import countries from '../../../data.json';
import {Grid} from '@material-ui/core';
import jwt_decode from "jwt-decode";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export const OrderCreate = ({handleSubmit, productId}) => {

  const history = useHistory()

    // const [productId, setProductId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [country, setCountry] = useState('')
    const [pan, setPan] = useState('')
    const [phone, setPhone] = useState(null)
    const [gender, setGender] = useState('Male')
    const [fileName, setFileName] = useState('')
    const classes = useStyles();

    // const onChangeProductId = () => {
    //   let id = history.location.pathname.split('/')[2]
    //   console.log(history.location.pathname.split('/')[2]);
    //   setProductId(id)
    // }

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value)
       
        
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const onChangeDOB= (date) => {
        setDob(date)
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangePan = (e) => {
        setPan(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangeGender = (e) => {
        setGender(e.target.value)
    }

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    }
    
    const token = localStorage.getItem('userInfo')
    const userEmail = jwt_decode(token).email

    const onFormSubmit = (data) => {
        let formData = new FormData()
        formData.append('firstName', data.firstName)
        formData.append('lastName', data.lastName)
        formData.append('dob', data.dob)
        formData.append('country', data.country)
        formData.append('pan', data.pan)
        formData.append('phone', data.phone)
        formData.append('gender', data.gender)
        formData.append('product_id', data.product_id)
        formData.append('image', fileName)
        formData.append('product_id', productId)
        formData.append('email', userEmail)

    
    const config = {
        headers: {'content-type': 'multipart/form-data'}
    }

    const url = `${process.env.REACT_APP_API}/api/v1/order`;

    post(url, formData, config).then((response) =>
        console.log(response)
    ).catch((error) => console.log(error))

    }

    return (
        // <form>

        //     <FormControl>
        //         <InputLabel>Enter First Name</InputLabel>
        //         <Input value={firstName} onChange={onChangeFirstName} />

        //         <InputLabel>Enter Last Name</InputLabel>
        //         <Input value={lastName} onChange={onChangeLastName} />

        //         <InputLabel>Select Date Of Birth</InputLabel>
        //         <Input value={dob} onChange={onChangeDOB} />
                
        //         <InputLabel>Select Country</InputLabel>
        //         <Input value={country} onChange={onChangeCountry} />
                
        //         <InputLabel>Enter PAN</InputLabel>
        //         <Input value={pan} onChange={onChangePan} />

        //         <InputLabel>Enter Contact Number</InputLabel>
        //         <Input value={phone} onChange={onChangePhone} />

        //         <InputLabel>Select Gender</InputLabel>
        //         <Select value={gender} onChange={onChangeGender}>
        //         <MenuItem value='Male'>Male</MenuItem>
        //         <MenuItem value='Female'>Female</MenuItem>
        //         <MenuItem value='Other'>Other</MenuItem>
        //         </Select>
                

        //         <InputLabel>Choose PAN Image</InputLabel>
        //         <Input type='file' value={filename} onChange={onChangeFile} />
                
                
        //         <Button disabled={!firstName && !lastName && !dob && !phone && !country && !pan && !gender} type='submit' >SUBMIT</Button>
                
                
        //     </FormControl>

        // </form>

        // Material UI template

        <React.Fragment>
      
      <form onSubmit={handleSubmit(onFormSubmit)} encType='multipart/form-data'>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <Field
            required
            component="input"
            value={firstName}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={onChangeFirstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            required
            component="input"
            value={lastName}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={onChangeLastName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            required
            onChange={onChangePhone}
            component="input"
            id="phone"
            name="phone"
            value={phone}
            label="Contact Number"
            fullWidth
            autoComplete="Contact Number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
          required
          component="input"
            id="pan"
            name="pan"
            value={pan}
            onChange={onChangePan}
            label="Enter PAN"
            fullWidth
            autoComplete="pan"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
            <Field component="select" labelId='demo-simple-select-label' value={gender} onChange={onChangeGender} name='gender' id='gender'>
            <option value=''>Select Gender</option>
                    
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
            </Field>
          
        </Grid>
        <Grid item xs={12} sm={6}>
        <Field
        required
        component="input"
            id="country"
            name="country"
            value={country}
            onChange={onChangeCountry}
            label="Enter Country"
            fullWidth
            autoComplete="pan"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Field  
        required
        onChange={onChangeDOB}
        component="input"
        name='dob'
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Grid>
        <Grid item xs={12} sm={6}>
        
  <input type='file' multiple="multiple" name='image' onChange={onChangeFile} />

        </Grid>
        
        
       <Button type='submit' >SUBMIT</Button>

      </Grid>
      </form>
    </React.Fragment>

    )
}

export default reduxForm({
    form: 'orderCreate'
})(OrderCreate)