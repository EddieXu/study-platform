import React, { memo } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./SearchInput.css";

function SearchInput(
  {
    width = "50%",
    placeHolder = "请输入关键字",
    allowClear = true,
    loading = false,
    onPressEnter = () => {},
    onSearch = () => {},
    ...rest
  },
  ref
) {
  return (
    <div className="searchInput">
      <Input.Search
        {...rest}
        ref={ref}
        width={width}
        placeholder={placeHolder}
        allowClear={allowClear}
        onPressEnter={onPressEnter}
        loading={loading}
        onSearch={onSearch}
      />
    </div>
  );
}

export default memo(SearchInput);
