import React, { useState, lazy, Suspense, useLayoutEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import EmailNavbar from './overview/Navbar';
import ComposeMail from './overview/Compose';
import { EmailWrapper, MailSideBar } from './overview/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/project/cards/frame/cards-frame';
import { Main } from '../styled';
import { Button } from '../../components/project/buttons/buttons';
// import Header1 from '../Header1';
// import Footer1 from '../Footer1'

const Inbox = lazy(() => import('./overview/Inbox'));
// const Sent = lazy(() => import('./overview/Sent'));
// const Draft = lazy(() => import('./overview/Draft'));
// const Starred = lazy(() => import('./overview/Starred'));
// const Trash = lazy(() => import('./overview/Trash'));
// const Spam = lazy(() => import('./overview/Spam'));
// const MailDetailView = lazy(() => import('./overview/MailDetailView'));

const Email = ({ match }) => {
  const { path } = useRouteMatch();
  const [isMailEditorOpen, setMailEditorStatus] = useState(false);
  const [state, setState] = useState({
    responsive: 0,
    collapsed: false,
  });
  const { responsive, collapsed } = state;
  const { params } = match;

  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };

  const toggleMailComposer = () => {
    setMailEditorStatus(!isMailEditorOpen);
  };

  const closeMailComposr = () => {
    setMailEditorStatus(false);
  };

  const pathName = path.split(':')[0];

  return (
    <>
      
      {isMailEditorOpen && <ComposeMail close={closeMailComposr} />}

      <Main>
      
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <EmailWrapper>
          <Row className="justify-content-center" gutter={25}>
            <Col className="trigger-col" xxl={5} xl={7} lg={8} xs={24}>
              {responsive <= 991 && (
                <Button type="link" className="mail-sidebar-trigger" style={{ marginTop: 0, color: '#4388f0'}} onClick={toggleCollapsed}>
                  <FeatherIcon style={{width: '2rem', height: '2rem'}} icon={collapsed ? 'align-left' : 'align-right'} />
                </Button>
              )}

              {responsive > 991 ? (
                // <div className="mail-sideabr">
                //   <Cards headless>
                //     <div className="mail-sidebar-top">
                      <Button onClick={toggleMailComposer} shape="round" type="primary" size="default">
                        <FeatherIcon icon="plus" size={18} />
                      </Button>
                //     </div>

                //     <div className="mail-sidebar-bottom">
                //       <EmailNavbar path={pathName} />
                //     </div>
                //   </Cards>
                // </div>
              ) : (
                // <MailSideBar className={collapsed ? 'mail-sideabr show' : 'mail-sideabr hide'}>
                  <Cards headless>
                    <Button
                      type="link"
                      className="mail-sidebar-trigger trigger-close"
                      style={{ marginTop: 0 }}
                      onClick={toggleCollapsed}
                    >
                      <FeatherIcon icon="x" />
                    </Button>
                    <div className="mail-sidebar-top">
                      <Button onClick={toggleMailComposer} shape="round" type="primary" size="default" block>
                        +
                      </Button>
                    </div>

                 {/*   <div className="mail-sidebar-bottom">
                      <EmailNavbar path={pathName} toggleCollapsed={toggleCollapsed} />
                    </div>*/}
                  </Cards>
                // </MailSideBar>
              )}
            </Col>

            <Col xxl={19} xl={17} lg={16}>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route exact path={path} component={Inbox} />
                  {/* <Route path={`${pathName}sent`} component={Sent} />
                  <Route path={`${pathName}drafts`} component={Draft} />
                  <Route path={`${pathName}starred`} component={Starred} />
                  <Route path={`${pathName}spam`} component={Spam} />
                  <Route path={`${pathName}trash`} component={Trash} /> */}
                </Suspense>
              </Switch>
            </Col>
          </Row>
        </EmailWrapper>
      </Main>
    </>
  );
};

Email.propTypes = {
  match: propTypes.object,
};

export default Email;
