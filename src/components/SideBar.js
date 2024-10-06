import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HeartOutlined,
  PlayCircleOutlined,
  UserOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('Trang chủ', '1', <PlayCircleOutlined />),
    getItem('Danh sách yêu thích', '2', <HeartOutlined />),
    getItem('Khám phá', 'sub1', <AppstoreOutlined />, [
      getItem('Thể loại', '3'),
      getItem('Nổi bật', '4'),
      getItem('Bảng xếp hạng', '5'),
    ]),
    getItem('Cá nhân', '6', <UserOutlined />),
  ];
  return (
    <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} style={{ height: '100%' }} />
    </Sider>
  )
}

export default SideBar;