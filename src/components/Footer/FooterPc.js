import React from 'react';
import { Row, Col } from 'antd';

import './Footer.less';

export default class FooterPc extends React.Component {
    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2018 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
};