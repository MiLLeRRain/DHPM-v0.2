import React, {Component} from "react";
import styles from './App.module.scss';
import {Layout, Menu, Breadcrumb} from 'antd';
import {Content, Footer, Header} from "antd/es/layout/layout";
import { useRoutes, A } from "hookrouter";
import routes from "../utils/router";
import NoPageFound from "./NoPageFound/NoPageFound";
// import HomePage from "./HomePage"
// import ProductPage from "./ProductPage"
// import ProductDetail from "./ProductDetail"
// import ContactPage from "./ContactPage"
import {HomeOutlined, AntDesignOutlined, ContactsOutlined} from "@ant-design/icons";

function App() {
    const routeResult = useRoutes(routes);
    return (
        <div className={styles.App}>
            <Header>
                <h1 className={styles.mainHeader}>DHPM</h1>
            </Header>
            <header className={styles.subHeader}>
                <div className={styles.box}>
                    <div className={styles.boxRight}>
                        <Breadcrumb>
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
            <Content>
                {routeResult || <NoPageFound />}
                {/*<Routes>*/}
                {/*    <Route path="/" element={<HomePage/>}/>*/}
                {/*    <Route path="/product" element={<ProductPage/>}/>*/}
                {/*    <Route path="/product/:id" element={<ProductDetail/>}/>*/}
                {/*    <Route path="/contact" element={<ContactPage/>}/>*/}
                {/*</Routes>*/}
            </Content>
            <Footer>
                <p><strong>@2021 DHPM</strong></p>
                <p>By L.H.</p>
            </Footer>
        </div>
    );
}

export default App;
