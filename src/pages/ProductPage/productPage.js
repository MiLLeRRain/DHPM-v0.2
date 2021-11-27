import React from "react";
import styles from "./productpage.module.scss";
import {Carousel, Row, Col} from 'antd';
import ShowCaseData from "../showcase.json";
import Meta from "antd/es/card/Meta";
import ProductList from "../../components/ProductList/productList";
import ProductData from "../products.json";

const contentStyle = {
    height: '200px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function ProductPage() {

    let a = ShowCaseData.data.map((arr) => {
        return arr.loc;
    });

    return <div className={styles.productpage}>

        {/* Show case */}
        <section>
            <Row>
                <Col span={1}></Col>
                <Col span={9}>
                    <div className={styles.showcase}>
                        <Carousel autoplay style={{width: '350px'}}>
                            {
                                a && a.map(function (num) {
                                    return <div>
                                        <h3 style={contentStyle}>
                                            {/**/}
                                            <img style={{
                                                borderRadius: '6px',
                                                alignSelf: 'center',
                                                width: '350px',
                                                height: '200px',
                                                resizeMode: 'contain'
                                            }} alt={num.title} src={require('../../assets/' + num + '.png').default}/>
                                        </h3>
                                    </div>;
                                })
                            }
                        </Carousel>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={styles.subTitle}>
                        <Meta title={<div>CAPABILITY INFO</div>}
                              description="Wohnzimmer so regungslos nettigkeit aufzulosen wu. Ubelnehmen bis kartoffeln stockwerke das des dazwischen gro aufgespart. Gegen haute ihr kommt vor euern. Ich hinter schwer bundel sog dir linken. Doch ja eile so warf du haar kein wenn zu. Du ja schlanken te weiterhin zerfasert besserung la ausblasen geheimnis.
"/>
                    </div>
                </Col>
            </Row>
        </section>

        <hr/>

        {/*  Product panels  */}
        <section className={styles.showcase}>
            <div className={styles.title}>
                <h3>PRODUCTS LIST</h3>
            </div>
            {/* this is the place holding the product list component */}
            <ProductList dataSource={ProductData.data}/>
        </section>

    </div>;
}

export default ProductPage


// data && data.map(function (shows) {
//     let path = shows.id;
//     return <div>
//         <h3 style={contentStyle}>
//             <img alt="example" src={require('../../assets/' + path + '.png').default}/>
//         </h3>
//     </div>;
//     }
// )