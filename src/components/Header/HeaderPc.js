import React from 'react';
import Axios from '../../config/http';
import Urls from '../../config/urls';

import {
    Row, Col, Menu, Icon, Form, Modal, message, Tabs, Input, Button
} from 'antd';


import LogoImage from '../../assets/images/logo.png';
import './Header.less';

const subMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class HeaderPc extends React.Component {
    constructor() {
        super();
        this.state = {
            currentSelected: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: 0
        }
    }
    componentWillMount() {
        if (sessionStorage.userId) {
            this.setState({hasLogined: true});
            this.setState({
                userNickName: sessionStorage.userNickName,
                userId: sessionStorage.userId
            });
        }
    }

    handleSelectClick = (e) => {
        if (e.key === 'register') {
            this.setModalVisible(true);
        }
        this.setState({
            currentSelected: e.key
        });
    }
    setModalVisible = (value) => {
        this.setState({
            modalVisible: value
        })
    }
    changeCallBack = (key) => {
        switch(key) {
            case '2': 
                this.setState({
                    action: 'register'
                });
                break;
            case '1': 
                this.setState({
                    action: 'login'
                });

        }
    }
    handleSubmit = (e) => {
        const formData = this.props.form.getFieldsValue();
        Axios('mock').post(Urls.login, {
            username: formData.r_userName,
            password: formData.r_passWord,
            confirmPw: formData.r_confirmPassword
        }).then((response) => {
            const { data } = response;
            if (data.success) {
                this.setState({
                    userNickName: data.data.nickName,
                    userId: data.data.userId,
                })
                if (this.state.action === 'login') {
                    this.setState({
                        hasLogined: true
                    })
                }
                sessionStorage.setItem('userId', data.data.userId);
                sessionStorage.setItem('userNickName', data.data.nickName);
                this.setModalVisible(false);
                message.success('请求成功');
            } else {
                message.error('密码不一致');
            }
        }).catch((err) => {
            console.log(err);
        })
        e.preventDefault()
    }
    logout = () => {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userNickName');
        this.setState({hasLogined: false});
        message.warn('已登出');
    }
    render() {
        const { getFieldProps } = this.props.form;
        const userShow = this.state.hasLogined
            ?
            <MenuItem key="logout" className="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <a target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </a>
                &nbsp;&nbsp;
            <Button type="ghost" htmlType="button" onClick={this.logout}>退出</Button>
            </MenuItem>
            :
            <MenuItem key="register" className="register">
                <Icon type="appstore" />注册/登录
            </MenuItem>;
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={LogoImage} alt=".." />
                            <span>React News</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            mode="horizontal"
                            onClick={this.handleSelectClick}
                            selectedKeys={[this.state.currentSelected]}>
                            <Menu.Item key="top">
                                <Icon type="appstore" />
                                头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore" />
                                社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore" />
                                国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />
                                国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />
                                娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore" />
                                体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore" />
                                科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore" />
                                时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal
                            cancelText="取消"
                            visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)}
                            wrapClassName="vertical-center-modal"
                            okText="关闭"
                            title="用户中心">
                            <Tabs type="card" onChange={this.changeCallBack}>
                                <TabPane tab="登录" key="1">
                                    <Form layout="horizontal" onSubmit={this.handleSubmit}>
                                        <FormItem label="账号">
                                            <Input
                                                placeholder="请输入您的账号"
                                                {...getFieldProps('r_userName')}
                                            />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input
                                                type="password"
                                                placeholder="请输入您的密码"
                                                {...getFieldProps('r_passWord')}
                                            />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit" >登录</Button>
                                    </Form>
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    <Form layout="horizontal" onSubmit={this.handleSubmit}>
                                        <FormItem label="账号">
                                            <Input
                                                placeholder="请输入您的账号"
                                                {...getFieldProps('r_userName')}
                                            />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input
                                                type="password"
                                                placeholder="请输入您的密码"
                                                {...getFieldProps('r_passWord')}
                                            />
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input
                                                placeholder="请再次输入您的密码"
                                                type="password"
                                                {...getFieldProps('r_confirmPassword')}
                                            />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit" >注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
};

export default Form.create()(HeaderPc);