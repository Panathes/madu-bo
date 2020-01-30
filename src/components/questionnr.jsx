import React, { useState, useEffect } from 'react';
import { Layout, Menu, Icon, Input, Button, Radio, Table, Switch, Form, Divider, Tag, Steps, message } from 'antd';
import 'antd/dist/antd.css';

const { Header, Sider, Content } = Layout;


function Questionnr() {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(0);

  const { Search } = Input;
  const { Step } = Steps;
  

  const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Third',
      content: 'Third-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];


    return (
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>P.O.I</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>QuestionnR</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Clients</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => setCollapsed(!collapsed)}
            />
            <h1>Créer P.O.I</h1>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 840,
            }} 
          >
            <div>
              <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title}/>
                ))}
              </Steps>
              <div className="steps-content">{steps[current].content}</div>
              <div className="steps-action">
                {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => setCurrent(current + 1)}>
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                  </Button>
                )}
                {current > 0 && (
                  <Button style={{ marginLeft: 8 }} onClick={() => setCurrent(current - 1)}>
                    Previous
                  </Button>
                )}
              </div>
            </div>          
          </Content>
        </Layout>
      </Layout>
      );
}

  export default Questionnr;