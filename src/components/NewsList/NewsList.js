import React from 'react';
import { Row, Col } from 'antd';
import Axios from '../../config/http';
import Urls from '../../config/urls';

export default class NewsList extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }
    componentWillMount() {
        const { type, count } = this.props
        Axios().get(Urls.news, {
            params: {
                type,
                key: '05b9f0da4b6033aa57ad7a68cbfb35c3'
            }
        }).then(({ data }) => {
            console.log(data);
            if (data.error_code === 0) {
                this.setState({
                    news: data.result.data.slice(0, count)
                });
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        const { news } = this.state;
        return (
            <div>
                <Row>
                    <Col span={24}>
                        {
                            news.length ?
                                news.map((newsItem, index) => (
                                    <section key={index} className="m_article list-item special_section clearfix">
                                        <a href={`details/${newsItem.uniquekey}`} target="_blank">
                                            {newsItem.title}
                                            <div className="m_article_img">
                                                <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
                                            </div>
                                            <div className="m_article_info">
                                                <div className="m_article_title">
                                                    <span>
                                                        {newsItem.title}
                                                    </span>
                                                </div>
                                                <div className="m_article_desc clearfix">
                                                    <div className="m_article_desc_l">
                                                        <span className="m_article-chanel">{newsItem.realtype}</span>
                                                        <span className="m_article-time">{newsItem.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </section>
                                )) : '没有加载到任何新闻'
                        }
                    </Col>
                </Row>
            </div>
        );
    }
};