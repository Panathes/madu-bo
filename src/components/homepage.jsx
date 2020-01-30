import React, { useState, useEffect } from 'react';
import { Layout, Menu, Icon, Input, Button, Table, Divider, Tag } from 'antd';
import 'antd/dist/antd.css';

const { Header, Sider, Content } = Layout;

function Homepage() {
  const [pointOfInterest, setPointOfInterest] = useState([]);
  const [error, setError] = useState(false);


  useEffect(() => {
    try {
      fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(function(data) {
          let poi = data.results;
          setPointOfInterest(pointOfInterest);
        });
    } catch (e) {
        setError(true);
    }
  }, []);

  const tableData = pointOfInterest.map(row => ({
    nomDuLieu: row.name.first,
    categorie: row.name.last,
    questionnr: row.login.password,
    tags: row.location.city,
    greenscore: row.dob.age,
  }))

  const columns = [
    {
      title: 'Nom du lieu',
      dataIndex: 'nomDuLieu',
      key: 'nomDuLieu',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Catégorie',
      dataIndex: 'categorie',
      key: 'categorie',
    },
    {
      title: 'QuestionnR',
      dataIndex: 'questionnr',
      key: 'questionnr',
    },
    {
      title: 'Tag questionnr',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
        title: 'Greenscore',
        dataIndex: 'greenscore',
        key: 'greenscore',
      },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <span>
          <a>Edit</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];

  const { Search } = Input;
    return (
      <Layout>
        <Sider trigger={null} collapsible>
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
            <Search
            placeholder="Search"
            onSearch={value => console.log(value)}
            style={{ width: 100 }}
            />           
            <Button type="primary">
            Ajouter P.O.I +
            </Button> 
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 840,
            }} 
          >
            <Table columns={columns} dataSource={tableData} />
          </Content>
        </Layout>
      </Layout>
    );
}

export default Homepage;