import React from "react";
import styles from './App.module.scss';
// eslint-disable-next-line
import {Layout, Menu, Breadcrumb} from 'antd';
import {Content, Footer, Header} from "antd/es/layout/layout";
import { useRoutes, A } from "hookrouter";
import routes from "../utils/router";
import NoPageFound from "./NoPageFound/NoPageFound";
import {HomeOutlined, AntDesignOutlined, ContactsOutlined} from "@ant-design/icons";

function App() {
    const routeResult = useRoutes(routes);
    return (
        <div className={styles.App}>
            {/* Head Section */}
            <Header>
                <div className={styles.mainHeader}>DHPM - precision manufacturing solution
                </div>
            </Header>
            {/* Nav Bar */}
            <header className={styles.subHeader}>
                <div className={styles.box}>
                    <div className={styles.boxRight}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item href="">
                                <A href="/"><HomeOutlined/></A>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                <A href="/product"><AntDesignOutlined /> PRODUCTS</A>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                <A href="/contact"><ContactsOutlined /> CONTACTS</A>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <Content className={styles.content}>
                {routeResult || <NoPageFound />}
            </Content>

            {/* Footer Section */}
            <Footer style={{ textAlign: 'center' }}>
                <p><strong>DHPM @2021</strong> - Created By L.H.</p>
            </Footer>
        </div>
    );
}

export default App;
