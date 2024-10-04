import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const SearchInPut = ()=>{
    const onSearch = (value) => console.log(value);
    return(
            <Search placeholder="input search text" onSearch={onSearch}  
            style={{
                width: "500px"

            }}
            />
    )
}

export default SearchInPut;