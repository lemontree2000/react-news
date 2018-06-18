import React from 'react';
import Axios from '../../config/http';
import Urls from '../../config/urls';

import {
    Icon, Form, Modal, message, Tabs, Input, Button
} from 'antd';

import LogoImage from '../../assets/images/logo.png';
import './Header.less';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class HeaderMobile extends React.Component {
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
    handleSubmit = (e) => {
        const formData = this.props.form.getFieldsValue();
        Axios.post(Urls.login, {
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
                this.setModalVisible(false);
                message.success('注册成功');
            } else {
                message.error('密码不一致');
            }
        }).catch((err) => {
            console.log(err);
        })
        e.preventDefault()
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
    login = () => {
        this.setModalVisible(true);
        console.log('login')
    }

    render() {
        const userShow = this.state.hasLogined ?
            <a>
                <Icon type="inbox"></Icon>
            </a>
            :
            <Icon type="setting" onClick={this.login}></Icon>
        const { getFieldProps } = this.props.form;

        return (
            <div className="mobile-header">
                <header>
                    <img src={LogoImage} alt=".." />
                    <span>ReactNews</span>
                    {userShow}
                </header>
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
            </div>
        )
    }
};

export default Form.create({})(HeaderMobile);