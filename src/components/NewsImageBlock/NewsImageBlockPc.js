import React from 'react';
import { Card } from 'antd';
import { Route, Router, Link } from 'react-router-dom';
import Axios from '../../config/http';
import Urls from '../../config/urls';

export default class NewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }
    componentWillMount() {
        const { type,count } = this.props
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
        const styleImage = {
            display: 'block',
            width: this.props.imageWidth,
            height: '90px'
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }

        return (
            <div className="topNewsList">
                <Card title={this.props.cardTitle} bordered={true} style={{width:this.props.width,marginTop: '16px'}}>
                        {
                            news.length ?
                                news.map((newsItem, index) => (
                                    <div key={index} className="imageblock">
                                        <a href={`details/${newsItem.uniquekey}`} target="_blank">
                                            <div className="custom-image">
                                                <img style={styleImage} src={newsItem.thumbnail_pic_s} alt=".."/>
                                            </div>
                                            <div className="custom-card">
                                                <h3 style={styleH3}>{newsItem.title}</h3>
                                                <p style={styleH3}>{newsItem.author_name}</p>
                                            </div>
                                        </a>
                                    </div>
                                )) : '没有加载到任何新闻'
                        }
                </Card>
            </div>
        );
    }
};