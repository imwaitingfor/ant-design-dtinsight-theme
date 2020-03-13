import React from 'react';
import { Steps, Icon } from 'antd';
import PreviewWrapper from '../PreviewWrapper';
// import './style.less';

const { Step } = Steps;

// const stepStyle = {
//   marginBottom: 60,
//   boxShadow: '0px -1px 0 0 #e8e8e8 inset',
// };

const StepPreview = ({ size, disabled }) => (
  <PreviewWrapper id="Steps" title="Steps">
    <div className="components steps">
      <div className="component-row">
        <Steps current={1} size={size}>
          <Step title="Finished" description="This is a description." disabled={disabled} />
          <Step title="In Progress" description="This is a description." disabled={disabled} />
          <Step title="Waiting" description="This is a description." disabled={disabled} />
        </Steps>
      </div>
      <div className="component-row">
        <Steps size={size}>
          <Step status="finish" title="Login" icon={<Icon type="user" />} disabled={disabled} />
          <Step status="finish" title="Verification" icon={<Icon type="solution" />} disabled={disabled} />
          <Step status="process" title="Pay" icon={<Icon type="loading" />} disabled={disabled} />
          <Step status="wait" title="Done" icon={<Icon type="smile-o" />} disabled={disabled} />
        </Steps>
      </div>
      <div className="component-row">
        <Steps progressDot current={1} size={size}>
          <Step title="Finished" description="This is a description." disabled={disabled} />
          <Step title="In Progress" description="This is a description." disabled={disabled} />
          <Step title="Waiting" description="This is a description." disabled={disabled} />
        </Steps>
      </div>
      {/* <div className="component-row">
        <Steps type="navigation" style={stepStyle} size={size}>
          <Step status="finish" title="Step 1" disabled={disabled} />
          <Step status="process" title="Step 2" disabled={disabled} />
          <Step status="wait" title="Step 3" disabled={disabled} />
          <Step status="wait" title="Step 4" disabled={disabled} />
        </Steps>
      </div> */}
      <div className="component-row">
        <Steps direction="vertical" current={1} size={size}>
          <Step title="Finished" description="This is a description." disabled={disabled} />
          <Step title="In Progress" description="This is a description." disabled={disabled} />
          <Step title="Waiting" description="This is a description." disabled={disabled} />
        </Steps>
      </div>
    </div>
  </PreviewWrapper>
);

export default StepPreview;
