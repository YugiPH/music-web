import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HeartOutlined,
  PlayCircleOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

const SideBar = () => {
  const navigate = useNavigate();
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
    getItem('Trang chủ', '/', <PlayCircleOutlined />),
    getItem('Danh sách yêu thích', '/favorite', <HeartOutlined />),
    getItem('Khám phá', 'sub1', <AppstoreOutlined />, [
      getItem('Thể loại', '/categories'),
      getItem('Bảng xếp hạng', '/top'),
    ]),
  ];
  return (
    <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        defaultSelectedKeys={['/']}
        mode="inline" items={items}
        style={{ height: '100%' }}
        onClick={(e) => navigate(e.key)}
      />
    </Sider>
  )
}

export default SideBar;