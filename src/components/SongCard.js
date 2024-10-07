import React from 'react';
import { Card } from 'antd';
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const SongCard = ({ title, description, imageUrl, songUrl }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/playsong/${songUrl}`)}
      hoverable
      style={{
        width: 200,
      }}
      cover={<img alt="example" src={imageUrl} />}
    >
      <Meta title={title} description={description} />
    </Card>
  )
}
export default SongCard;