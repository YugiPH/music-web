import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <Avatar style={{ backgroundColor: "gray", cursor: "pointer" }}
      size={{
        xs: 15,
        sm: 20,
        md: 30,
        lg: 45,
        xl: 50,
        xxl: 80,
      }}
      onClick={() => navigate("/login")}
      icon={<UserOutlined style={{ color: "black" }} />}
    />
  );
}
export default Profile;