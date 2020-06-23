import React from 'react'
import '../static/styles/components/header.css'
import {HomeTwoTone,BookTwoTone,SmileTwoTone} from '@ant-design/icons'
import {Row,Col, Menu} from 'antd'
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">夏小狮</span>
            <span className="header-txt">前端工程狮养成记</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item key="home">
                <HomeTwoTone />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                <BookTwoTone />
                    小说
                </Menu.Item>
                <Menu.Item key="life">
                <SmileTwoTone />
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header