import React, { useState, useCallback } from "react";
import SearchInput from "components/Input/SearchInput/SearchInput";
import { Button, Space, Table, Tag, Pagination } from "antd";
import UploadVideoModal from "./UploadVideoModal";
import "./index.css";

function VideoManagement() {
  const { Column, ColumnGroup } = Table;
  const [showUploadModal, setShowUploadModal] = useState(false);
  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ];
  const onPressHandle = useCallback(e => {
    console.log(e.target);
  }, []);

  return (
    <div>
      <div className="header-outside">
        <Button
          style={{ marginRight: "5px" }}
          onClick={() => setShowUploadModal(true)}
        >
          视频上传
        </Button>
        <SearchInput placeHolder="请输入关键字" onPressEnter={onPressHandle} />
      </div>
      <Table dataSource={data} pagination={false}>
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
      <Pagination
        total={85}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={20}
        defaultCurrent={1}
      />
      <UploadVideoModal visible={showUploadModal} />
    </div>
  );
}

export default VideoManagement;
