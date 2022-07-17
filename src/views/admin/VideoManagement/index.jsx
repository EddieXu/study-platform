import React, { useState, useCallback, useEffect } from "react";
import SearchInput from "components/Input/SearchInput/SearchInput";
import PaginationFooter from "components/Pagination/PaginationFooter";
import { Button, Space, Table, Tag } from "antd";
import { testListData } from "constants/Variable";
import { isEmpty } from "lodash";
import UploadVideoModal from "./UploadVideoModal";
import {
  HeaderWrapper,
  EmptyDataElement,
  ContentWrapper
} from "./VideoManagement.styles";
import "./index.css";

function VideoManagement() {
  const { Column, ColumnGroup } = Table;
  const [listData, setListData] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const onPressHandle = useCallback(e => {
    console.log(e.target);
  }, []);

  function onChangeHandle(pageN, pageS) {}

  function handleCancel() {
    setShowUploadModal(false);
  }

  useEffect(() => {
    setListData(testListData);
  }, []);

  return (
    <ContentWrapper>
      <HeaderWrapper>
        <div style={{ width: "30%" }}>
          <SearchInput
            placeHolder="请输入关键字"
            onPressEnter={onPressHandle}
          />
        </div>
        <Button
          style={{ marginRight: "5px" }}
          onClick={() => setShowUploadModal(true)}
        >
          视频上传
        </Button>
      </HeaderWrapper>
      {isEmpty(listData) ? (
        <EmptyDataElement>
          您的视频列表暂时为空哦，请速速添加。
        </EmptyDataElement>
      ) : (
        <Table dataSource={listData} pagination={false}>
          <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
              <>
                {tags.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <a>Invite {record.lastName}</a>
                <a>Delete</a>
              </Space>
            )}
          />
        </Table>
      )}
      <PaginationFooter totalNumber="30" onChangeHandle={onChangeHandle} />
      <UploadVideoModal visible={showUploadModal} onCancel={handleCancel} />
    </ContentWrapper>
  );
}

export default VideoManagement;
