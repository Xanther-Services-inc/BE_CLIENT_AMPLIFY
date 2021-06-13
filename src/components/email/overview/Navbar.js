import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Input, Form } from 'antd';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EmailNav } from './style';
import { Button } from '../../../components/project/buttons/buttons';
import Title from '../../../components/heading/heading';

const EmailNavbar = ({ path, toggleCollapsed }) => {
  const [state, setState] = useState({
    labels: ['personal', 'social', 'promotions'],
    newLabel: '',
    addNewDisplay: false,
  });
  const { labels, newLabel, addNewDisplay } = state;

  const addNewLabels = e => {
    e.preventDefault();

    setState({
      ...state,
      addNewDisplay: true,
    });
  };

  const cancelAddNewLabels = e => {
    e.preventDefault();
    e.stopPropagation();
    setState({
      ...state,
      addNewDisplay: false,
    });
  };

  const handelChange = e => {
    e.preventDefault();
    e.stopPropagation();
    if (newLabel !== '') {
      setState({
        ...state,
        labels: [...labels, newLabel],
        newLabel: '',
      });
    } else {
      alert('Please Give a label...');
    }
  };

  const onLabelChange = e => {
    setState({
      ...state,
      newLabel: e.target.value,
    });
  };

  return (
    <>
      <EmailNav>
        <ul>
          <li>
            <NavLink to="/issues" onClick={toggleCollapsed}>
              <FeatherIcon icon="inbox" size={18} />
              <span className="nav-text">
                <span>All Issues</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </EmailNav>
    </>
  );
};

EmailNavbar.propTypes = {
  path: propTypes.string.isRequired,
};

export default EmailNavbar;
