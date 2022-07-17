import React, { useState, useEffect, useCallback } from "react";
import { isEmpty } from "lodash";
import SearchInput from "components/Input/SearchInput/SearchInput";
import PaginationFooter from "components/Pagination/PaginationFooter";
import VideoCard from "components/Video/VideoCard/VideoCard";
import {
  ContentWrapper,
  CardWrapper,
  EmptyDataElement
} from "./VideoManagement.styles";
import { testVideoData } from "constants/Variable";
import { Modal } from "antd";
import VideoPlayer from "./VideoPlayer";

function VideoDatabase() {
  const [cardList, setCardList] = useState([]);
  const [showVideo, setShowVideo] = useState(false);

  const onPressHandle = useCallback(e => {
    console.log(e.target);
  }, []);

  function pageChangeHandle(pageN, pageS) {
    console.log(pageN, pageS);
  }

  function clickImageHandle() {
    setShowVideo(true);
  }

  function handleCancel() {
    setShowVideo(false);
  }

  useEffect(() => {
    // 请求数据
    setCardList(testVideoData);
  }, []);

  return (
    <ContentWrapper>
      <div style={{ width: "30%" }}>
        <SearchInput
          placeHolder="视频搜索"
          onPressEnter={onPressHandle}
          margin="20px 0"
        />
      </div>
      <div className="video-content-wrapper">
        {isEmpty(cardList) ? (
          <EmptyDataElement>
            您的视频库暂时为空哦，请速速上传视频。
          </EmptyDataElement>
        ) : (
          <CardWrapper>
            {cardList.map(item => (
              <VideoCard
                img={item.posterImg}
                name={item.videoName}
                onClickHandle={clickImageHandle}
              />
            ))}
          </CardWrapper>
        )}
      </div>
      <PaginationFooter totalNumber="85" onChangeHandle={pageChangeHandle} />
      <Modal
        width={700}
        visible={showVideo}
        onCancel={handleCancel}
        footer={null}
      >
        <VideoPlayer />
      </Modal>
    </ContentWrapper>
  );
}

export default VideoDatabase;
