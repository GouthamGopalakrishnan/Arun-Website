import React from 'react';
import { Row, Col } from 'antd';
import './black2.css';



function Black2(props) {
    return (
        <div className="ar-bk2  pb-4">
        <Row>
            <Col className="black-colomn " span={24}>
                <h2>{props.name}</h2>
            </Col>
        </Row>
        </div>
    );
}
export default Black2;