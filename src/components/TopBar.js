import React from 'react'
import SearchInput from './SearchInput';
import Profile from './Profile';
import Logo from './Logo';
import { Layout } from 'antd';
const { Header } = Layout;
const TopBar = () => {
    return (
        <Header
            style={{
                padding: 0,
                background: "white",
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingLeft: "50px",
                paddingRight: "50px",
            }}
        >
            <Logo />
            <SearchInput />
            <Profile />
        </Header>
    )
}

export default TopBar;