import React, { useState } from "react";
import { Button, Modal, message, Steps } from "antd";

function UploadVideoModal({ visible }) {
  const { Step } = Steps;
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: "First",
      content: "First-content"
    },
    {
      title: "Second",
      content: "Second-content"
    },
    {
      title: "Third",
      content: "Last-content"
    },
    {
      title: "Last",
      content: "Last-content"
    }
  ];
  return (
    <Modal visible={visible} title="Title" footer={null}>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px"
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </Modal>
  );
}

export default UploadVideoModal;
