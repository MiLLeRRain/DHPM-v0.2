import React, {Component} from "react";
import styles from "./home.module.scss";
import Meta from "antd/es/card/Meta";
import {Card, Pagination} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";

export default class HomePage extends Component {

    render() {
        return (

            <div className={styles.home}>

                {/* 🦍Company intro🦍 */}
                <section className={styles.intro}>
                    <Card
                        style={{borderRadius: 10}}
                        cover={<img alt="example" src={require("../../assets/homePic.jpeg").default}/>}
                        actions={[<a>操作一</a>, <a>操作二</a>]}
                    >
                        <Meta title={<div style={{textAlign:"center"}}>COMPANY INFO</div>} description="More description"/>
                    </Card>
                </section>
                <hr />

            </div>
        );
    }
}
