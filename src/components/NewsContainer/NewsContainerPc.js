import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import NewsBlockPc from '../NewsBlock/NewsBlockPc';
import NewsImageBlock from '../NewsImageBlock/NewsImageBlockPc';
import './NewsContainerPc.less';
const TabPane = Tabs.TabPane;

const carouselImages = [1, 2, 3, 4].map((item, index) => {
    return require(`../../assets/images/carousel_${item}.jpg`);
});

export default class NewsContainer extends React.Component {

    render() {
        const settingsProps = {
            dots: true,
            infinte: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel  {...settingsProps}>
                                    {
                                        carouselImages.map((item, index) => {
                                            return <div key={index}><img src={item} alt="index" /></div>
                                        })
                                    }

                                </Carousel>
                                <NewsImageBlock 
                                    count="6" 
                                    type="yuele" 
                                    cardTitle="娱乐头条"
                                    imageWidth="112px"
                                    width="400px">
                                </NewsImageBlock>
                            </div>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <NewsBlockPc type="top" count="20"></NewsBlockPc>
                            </TabPane>
                            <TabPane tab="国际新闻" key="2">
                                <NewsBlockPc type="guoji" count="20"></NewsBlockPc>
                            </TabPane>
                            <TabPane tab="国际新闻" key="3">
                                <NewsBlockPc type="guonei" count="20"></NewsBlockPc>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
};