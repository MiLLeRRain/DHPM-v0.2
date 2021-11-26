import React from "react";
import styles from "./home.module.scss";
import Meta from "antd/es/card/Meta";
import {Card} from "antd";
// import the product list components
import ProductList from "../../components/ProductList/productList";
import ProductData from "../products.json";


const HomePage = () => (

    <div className={styles.home}>

        {/* 🦍Company intro🦍 */}
        <section className={styles.intro}>
            <Card
                style={{borderRadius: 10}}
                cover={<img alt="example" src={require("../../assets/homePic.png").default}/>}
                // actions={[<a>act1</a>, <a>act2</a>]}
            >
                <Meta title={<div className={styles.title}>COMPANY INFO</div>}
                      description="More description"/>
            </Card>
        </section>

        <hr/>

        {/*  Product panels  */}
        <section className={styles.products}>
            <div className={styles.title}>
                <h3>PRODUCTS LIST</h3>
            </div>
            {/* this is the place holding the product list component */}
            <ProductList dataSource={ProductData.data} />
        </section>

    </div>
);

export default HomePage
