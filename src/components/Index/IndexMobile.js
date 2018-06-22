import React from 'react';
import HeaderMobile from '../Header/HeaderMobile';
import FooterMobile from '../Footer/FooterMobile';
import NewsList from '../NewsList/NewsList';
import { Tabs, Carousel } from 'antd';
// import { Row, Col, Tabs, Carousel } from 'antd';

const TabPane = Tabs.TabPane;
const carouselImages = [1, 2, 3, 4].map((item, index) => {
    return require(`../../assets/images/carousel_${item}.jpg`);
});


class IndexMobile extends React.Component {
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
                <HeaderMobile />
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <Carousel  {...settingsProps}>
                            {
                                carouselImages.map((item, index) => {
                                    return <div key={index}><img src={item} alt="index" /></div>
                                })
                            }

                        </Carousel>
                        <NewsList count="20" type="top" />
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <NewsList count="20" type="shehui" />
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <NewsList count="20" type="guonei" />

                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <NewsList count="20" type="guoji" />

                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <NewsList count="20" type="yule" />

                    </TabPane>
                </Tabs>

                <FooterMobile />
            </div>
        )
    }
};



export default IndexMobile;