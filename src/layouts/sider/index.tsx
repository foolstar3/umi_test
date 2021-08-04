import React, { Component } from "react";
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'umi'

const routes = {
  mode: 'inline',
  chilidren: [
    {
      key: 'sub1',
      icon: '',
      title: 'subnav1',
      children: [
        {
          key: '1',
          route: '/a',
          value: 'a'
        },{
          key: '2',
          route: '/b',
          value: 'b'
        },{
          key: '3',
          route: '/c',
          value: 'c'
        }
      ]
    },{
      key: 'sub2',
      icon: '',
      title: 'subnav2',
      children: [
        {
          key: '4',
          route: '/d',
          value: 'd'
        },{
          key: '5',
          route: '/e',
          value: 'e'
        },{
          key: '6',
          route: '/f',
          value: 'f'
        }
      ]
    },{
      key: 'sub3',
      icon: '',
      title: 'subnav3',
      children: [
        {
          key: '7',
          route: '/g',
          value: 'g'
        },{
          key: '8',
          route: '/h',
          value: 'h'
        },{
          key: '9',
          route: '/i',
          value: 'i'
        }
      ]
    }
  ]
}
function ShowSider() {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode={routes.mode} style={{ height: '100%', borderRight: 0 }}>
        { routes.chilidren.map((item)=>{
            return(
              <SubMenu key={item.key} title={item.title}>
                {
                  item.children.map((i) => {
                    return(
                      <Menu.Item key={i.key}><Link to={i.route}>{i.value}</Link></Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }
      </Menu>
    </Sider>
  )
}
const {Sider} = Layout
const { SubMenu } = Menu
export default class MySider extends Component {
  render() {
    return (
      <ShowSider></ShowSider>
    )
  }
}