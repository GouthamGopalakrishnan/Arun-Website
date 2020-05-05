import React from 'react';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd/dist/antd.css';
import './tabs.css';
import Showreel from './showreel.js';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({ style }) => (
            <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
        )}
    </Sticky>
);



function Tab() {
    return (
        
        <StickyContainer>
            <Tabs className="tabs-specs" defaultActiveKey="1" renderTabBar={renderTabBar} >
                
                <TabPane tab="HOME" key="1" style={{ height: 200 }}>
haellalmvaiornvuaer
                </TabPane>
                    <TabPane tab="FILMOGRAPHY" key="2">
                        Content of Tab Pane 2
          </TabPane>
                    <TabPane tab="BLOG" key="3">
                        Content of Tab Pane 3
          </TabPane>
          
          <TabPane tab="RESUME" key="4">
                        Content of Tab Pane 4
          </TabPane>
            </Tabs>
        </StickyContainer>
    );
}
export default Tab;




<div class="container">
    <div class="row">
        <div class="col pt-3 mt-3 ar-footer-cont">
            Contact
        <div class="row justify-content-center">
                <div class="col-4 pt-3 mt-3">
                    <h4 className="ar-footer-mail" >Email : </h4>
                </div>
                <div class="col-4 pt-3 mt-3">
                    <h4 className="ar-footer-web " >  tuskerlone@gmail.com  </h4>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-4 pt-2 mt-2">
                    <h4 className="ar-footer-mail" >Web : </h4>
                </div>
                <div class="col-4 pt-2 mt-2">
                    <h4 className="ar-footer-web pr-0 mr-0" >  arunplukose.com </h4>
                </div>
            </div>
        </div>
        <div class="col pt-3 mt-3 ar-footer-down">
            Downloads
        <div class="row justify-content-center">
                <div class="col-4 pt-3 mt-3">
                    <h4 className="ar-footer-mail" >Resume: </h4>
                </div>
                <div class="col-4 pt-3 mt-3">
                    <h4 className="ar-footer-web pr-0 mr-0" > </h4>
                </div>
            </div>

        </div>
    </div>
</div>    