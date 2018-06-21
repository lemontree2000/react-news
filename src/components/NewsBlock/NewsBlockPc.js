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
        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {
                            news.length ?
                                news.map((newsItem, index) => (
                                    <li key={index}>
                                        <a href={`details/${newsItem.uniquekey}`} target="_blank">{newsItem.title}</a>
                                    </li>
                                )) : '没有加载到任何新闻'
                        }
                    </ul>
                </Card>
            </div>
        );
    }
};