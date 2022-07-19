import React, { useEffect, useState } from "react";
import { Radio, Col, Row, Checkbox, Button, Space } from "antd";
import { useHistory } from "react-router-dom";
import { topics } from "constants/SearchData";
function CampDetection() {
  const history = useHistory();
  const [data, setData] = useState(topics);
  const [timers, setTimers] = useState("02 : 00 : 00");
  const dataArr = data.sort((a, b) => {
    return a.type - b.type;
  });
  dataArr.forEach((item, index) => {
    item.index = index + 1;
  });
  const dataRadio = dataArr.filter(item => item.type === 1);
  const dataCheckbox = dataArr.filter(item => item.type === 2);

  useEffect(() => {
    countDown();
    function countDown() {
      let timeSet;
      let [h, m, s] = [2, 0, 0];
      clearInterval(timeSet);
      timeSet = null;
      timeSet = setInterval(() => {
        if (s <= 0) {
          s = 60;
          if (m <= 0) {
            m = 60;
            h--;
          }
          m--;
        }
        s--;

        let hh = h < 10 ? "0" + h : h;
        let mm = m < 10 ? "0" + m : m;
        let ss = s < 10 ? "0" + s : s;
        setTimers(hh + " : " + mm + " : " + ss);
        if (h <= 0 && m <= 0 && s <= 0) {
          clearInterval(timeSet);
          setTimers("时间已到，结束考试");
        }
      }, 1000);
    }
  }, []);
  const onSubmit = () => {
    history.push("/");
  };

  return (
    <>
      <div
        style={{
          display: "inline-block",
          "overflow-y": "auto",
          "max-height": "350px",
          width: "calc(100% - 300px)"
        }}
      >
        <h2>单选题</h2>
        {dataRadio.map(item => {
          return (
            <div>
              <h3>
                {item.index}. {item.description}
              </h3>
              <Radio.Group style={{ "margin-bottom": "16px" }}>
                <Radio value="A">{item.option1}</Radio>
                <Radio value="B">{item.option2}</Radio>
                <Radio value="C">{item.option3}</Radio>
                <Radio value="D">{item.option4}</Radio>
              </Radio.Group>
            </div>
          );
        })}
        <h2>多选题</h2>
        {dataCheckbox.map(item => {
          return (
            <div>
              <h3>
                {item.index}. {item.description}
              </h3>
              <Checkbox.Group style={{ "margin-bottom": "16px" }}>
                <Checkbox value="A">{item.option1}</Checkbox>
                <Checkbox value="B">{item.option2}</Checkbox>
                <Checkbox value="C">{item.option3}</Checkbox>
                <Checkbox value="D">{item.option4}</Checkbox>
              </Checkbox.Group>
            </div>
          );
        })}
      </div>
      <div
        style={{
          width: "260px",
          height: "300px",
          float: "right",
          margin: "0 20px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#F2F2F2",
          border: "3px solid #fafafa"
        }}
      >
        <p style={{ marginBottom: "10px" }}>考试剩余时间</p>
        <div
          style={{
            border: "1px solid #000",
            marginBottom: "10px",
            padding: "10px"
          }}
        >
          <h2>{timers}</h2>
        </div>
        <p style={{ marginBottom: "10px" }}>
          <span>已答: 1题</span> <Space />
          <span>未答: 4题</span>
        </p>
        <Button type="primary" onClick={onSubmit}>
          提交答卷
        </Button>
      </div>
    </>
  );
}

export default CampDetection;
