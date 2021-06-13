import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header1 from '../../Header1';
import Content from './Content';


const Inbox = () => {

//   const userLogin = useSelector((state) => state.userLogin)
// 	const { userInfo } = userLogin

// const [issues, setIssues] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const {data} = await Axios.get('http://52.15.142.28:3001/api/v1/user/issues',  {headers: {"Authorization" : `Bearer ${userInfo.token}`} })
//       setIssues(data)
//     }
//     fetchData()
//   },[])

//   console.log(issues);

  // const [searchData, email] = useSelector(state => [state.headerSearchData, state.email.allMessage]);
  return (
    <>
    <Header1 />
    <Content

  />
  </>
  );
};

export default Inbox;
