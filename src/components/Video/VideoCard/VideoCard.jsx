import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import { CardWrapper, PlayWrapper, ImageWrapper } from "./VideoCard.styles";

function VideoCard({ img, name, onClickHandle = () => {} }) {
  return (
    <CardWrapper>
      <ImageWrapper onClick={onClickHandle}>
        <img width="100%" src={img} alt={name} />
        <PlayWrapper>
          <PlayCircleOutlined />
        </PlayWrapper>
      </ImageWrapper>
      <div>{name}</div>
    </CardWrapper>
  );
}

export default VideoCard;
