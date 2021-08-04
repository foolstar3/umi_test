/*
 * @Author: jing.gong 
 * @Date: 2021-08-03 19:42:54 
 * @Last Modified by: jing.gong
 * @Last Modified time: 2021-08-03 19:48:32
 */

import { Layout, Menu, Breadcrumb } from 'antd';
import MySider from './sider';
import MyBreadcrumb from './breadcrumb'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Link } from 'umi'

const Home = (props) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <MySider></MySider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <MyBreadcrumb ></MyBreadcrumb>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Home


  