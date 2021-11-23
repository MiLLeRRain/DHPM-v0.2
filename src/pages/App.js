import React, {Component} from "react";
import styles from './App.module.scss';
import {Button} from "antd";
import { Layout, Menu, Breadcrumb } from 'antd';
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage"
import ProductPage from "./ProductPage"
import ProductDetail from "./ProductDetail"
import ContactPage from "./ContactPage"


function App() {
  return (
    <div className={styles.App}>
        <header className={styles.header}>
            <div className={styles.box}>
                <div className={styles.boxleft}>DHPM</div>
                <div className={styles.boxright}>
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/contact">Contact</Link>
                </div>
            </div>
        </header>
        <content className={styles.content}>
            <Routes>
            <Route path="/" component={HomePage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/contact" component={ContactPage} />
            </Routes>
        </content>
        <footer className={styles.footer}>
            <p><strong>@2021 DHPM</strong></p>
            <p>By L.H.</p>
        </footer>
    </div>
  );
}

export default App;
