import React, {Component} from "react";
import styles from './App.module.scss';
import {Button} from "antd";
import {Layout, Menu, Breadcrumb} from 'antd';
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage"
import ProductPage from "./ProductPage"
import ProductDetail from "./ProductDetail"
import ContactPage from "./ContactPage"
import {HomeOutlined, AntDesignOutlined, ContactsOutlined} from "@ant-design/icons";


// function HomeOutlined() {
//     return <Link to="/">Home</Link>;
// }
//
// function ProductOutLined() {
//     return <Link to="/product">Product</Link>;
// }
//
// function ContactOutLined() {
//     return <Link to="/contact">Contact</Link>;
// }


function App() {
    return (
        <div className={styles.App}>
            <Header>
                <div className={styles.mainHeader}>DHPM</div>
            </Header>
            <header className={styles.subHeader}>
                <div className={styles.box}>
                    <div className={styles.boxRight}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="">
                                <Link to="/"><HomeOutlined/></Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                <Link to="/product"><AntDesignOutlined /> PRODUCTS</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                <Link to="/contact"><ContactsOutlined /> CONTACTS</Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        {/*<Link to="/">Home</Link>*/}
                        {/*<Link to="/product">Product</Link>*/}
                        {/*<Link to="/contact">Contact</Link>;*/}
                    </div>
                </div>
            </header>
            <Content>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/product" element={<ProductPage/>}/>
                    <Route path="/product/:id" element={<ProductDetail/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </Content>
            <Footer>
                <p><strong>@2021 DHPM</strong></p>
                <p>By L.H.</p>
            </Footer>
        </div>
    );
}

export default App;
