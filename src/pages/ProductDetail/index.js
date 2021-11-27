import React from "react";
import styles from "./productDetail.module.scss";
import {usePath} from 'hookrouter';
import {Col, Image, Row} from "antd";
import ProductData from "../products.json";

function trim(str, ch) {
    let res = ''
    for (let i of str) {
        if (i !== ch) res = res+i
    }
    return res.toUpperCase()
}

function ProductDetail() {

    let path = usePath()

    let index = path.charAt(path.length - 1)

    let currentShow = ProductData.data[index-1]
    console.log(currentShow.description)

    // assemble the element
    return <div className={styles.pd}>
        <div className={styles.subTitle}><h6>{currentShow.description}</h6></div>
        {/* Detail */}
        <section>
            <Row>
                <Col span={8}>
                <Image width={'100%'}
                       src={require('../../assets/p' + index + '.png').default} />
                </Col>
                <Col span={12}>
                    <div className={styles.detail}>{currentShow.detail}</div>
                </Col>
            </Row>
        </section>
    </div>

}

export default ProductDetail