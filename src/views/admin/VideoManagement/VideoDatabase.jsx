import React, { useState, useEffect, useCallback } from "react";
import SearchInput from "components/Input/SearchInput/SearchInput";
import { Button, Space, Table, Tag, Pagination, Grid } from "antd";

function VideoDatabase() {
  const onPressHandle = useCallback(e => {
    console.log(e.target);
  }, []);

  return (
    <>
      <SearchInput placeHolder="视频搜索" onPressEnter={onPressHandle} />
      <Pagination
        total={85}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={20}
        defaultCurrent={1}
      />
    </>
  );
}

export default VideoDatabase;
