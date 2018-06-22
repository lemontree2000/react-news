import React from 'react';
import { Row, Col } from 'antd';

export default class NewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    }
    createMarkup() {
        return {__html: this.state.newsItem.pageContent}
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
                            
                        </div>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}