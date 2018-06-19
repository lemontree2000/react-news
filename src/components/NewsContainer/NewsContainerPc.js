import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
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
                                        carouselImages.map((item,index ) => {
                                            return <div key={index}><img src={item} alt="index"/></div>
                                        })
                                    }

                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
};