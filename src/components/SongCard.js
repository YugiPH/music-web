import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const SongCard = () => (
  <Card
    hoverable
    style={{
      width: 200,
    }}
    cover={<img alt="example" src="https://i.pinimg.com/564x/8c/bd/b1/8cbdb1172e0e05b86d911d3e2fe956f2.jpg" />}
  >
    <Meta title="Chưa có nhạc nhưng có vợ" description="www.instagram.com" />
  </Card>
);
export default SongCard;