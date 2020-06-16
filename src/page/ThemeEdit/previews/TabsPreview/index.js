import React from 'react';
import { Tabs } from 'antd';
import PreviewWrapper from '../PreviewWrapper';
import ShowDetail from '../../../../component/showDetail';

const { TabPane } = Tabs;

const TabsPreview = ({ size, disabled }) => (
  <PreviewWrapper id="Tabs" title="Tabs">
    <div className="components tabs">
      <div className="component-row">
        <Tabs
          size={size}
          // disabled={disabled}
          defaultActiveKey="1"
        >
          <TabPane tab="Tab 1" key="1" disabled={disabled}>
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2" disabled={disabled}>
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3" disabled={disabled}>
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <div className="component-row">
        <Tabs
          size={size}
          // disabled={disabled}
          type="card"
        >
          <TabPane tab="Tab 1" key="1" disabled={disabled}>
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2" disabled={disabled}>
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3" disabled={disabled}>
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <div className="component-row">
        <Tabs
          className="dt-tab"
          size={size}
        >
          <TabPane tab="dt-tab 1" key="1" disabled={disabled}>
            Content of dt-tab Pane 1
          </TabPane>
          <TabPane tab="dt-tab 2" key="2" disabled={disabled}>
            Content of dt-tab Pane 2
          </TabPane>
          <TabPane tab="dt-tab 3" key="3" disabled={disabled}>
            Content of dt-tab Pane 3
          </TabPane>
        </Tabs>
        <ShowDetail
          title="卡片类型tab组件"
          cName={'.dt-tab'}
          desc={'卡片类型tab组件'}
          component={<Tabs
            className="dt-tab"
          >
            <TabPane tab="dt-tab 1" key="1">
              Content of dt-tab Pane 1
            </TabPane>
            <TabPane tab="dt-tab 2" key="2">
              Content of dt-tab Pane 2
            </TabPane>
            <TabPane tab="dt-tab 3" key="3">
              Content of dt-tab Pane 3
            </TabPane>
          </Tabs>}
          code={`<Tabs
  className="dt-tab"
>
  <TabPane tab="dt-tab 1" key="1">
    Content of dt-tab Pane 1
  </TabPane>
  <TabPane tab="dt-tab 2" key="2">
    Content of dt-tab Pane 2
  </TabPane>
  <TabPane tab="dt-tab 3" key="3">
    Content of dt-tab Pane 3
  </TabPane>
</Tabs>`}
        />
      </div>
    </div>
  </PreviewWrapper>
);

export default TabsPreview;
