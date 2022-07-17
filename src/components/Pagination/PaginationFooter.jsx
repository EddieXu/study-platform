import React, { useState } from "react";
import { Pagination } from "antd";
import { PAGE_OPTION } from "constants/Variable";
import "./PaginationFooter.css";

function PaginationFooter({ totalNumber, onChangeHandle }) {
  return (
    <div className="wrapper">
      <Pagination
        total={totalNumber}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={12}
        defaultCurrent={1}
        pageSizeOptions={PAGE_OPTION}
        onChange={onChangeHandle}
      />
    </div>
  );
}

export default PaginationFooter;
