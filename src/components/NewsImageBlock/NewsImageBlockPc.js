import React from 'react';
import { Card } from 'antd';
import { Route, Router, Link } from 'react-router-dom';

export default class NewsImageBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }
    componentWillMount() {
        
    }

    render() {
        return(
            <div className="topNewsList">
                <Card>
                    <ul>
                        <li></li>
                    </ul>
                </Card>
            </div>
        );
    }
};