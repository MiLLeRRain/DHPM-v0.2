import React from "react";
import styles from "./pl.module.scss";
import {Card, Col, Row} from "antd";
import Meta from "antd/es/card/Meta";
import {A} from "hookrouter";


function ProductList(props) {
    let {dataSource} = props;
    return <div className={styles.products}>
        <Row>
            {
                dataSource && dataSource.map(function (prod) {
                        let p = prod.loc;
                        console.log(prod.loc);
                        return <Col span={8}>
                            <A href={`/product/${prod.id}`}><Card
                                hoverable
                                style={{borderRadius: 10, margin: 10}}
                                //src={require(`${prod.loc}`)
                                cover={<img alt={`${prod.title}`} src={require('../../assets/' + p + '.png').default}/>}
                            >
                                <Meta title={<div>{prod.title}</div>}
                                      description={prod.description}/>
                            </Card></A>

                        </Col>;
                    }
                )
            }
        </Row>
    </div>;
}

export default ProductList