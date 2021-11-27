import React from "react";
import styles from "./contactPage.module.scss";
import {
    GithubOutlined,
    InstagramOutlined,
    TwitterOutlined,
    WechatOutlined,
    WeiboSquareOutlined
} from "@ant-design/icons";
import {Row, Col} from "antd";

function ContactPage() {
    return <div className={styles.socialmedia}>
        <section>
            <Row>
                <Col span={12} className={styles.section}>
                    <h2>CONTACT:</h2>
                </Col>
                <Col span={12}>
                    <div>
                        <a className={styles.tag} target="_blank" rel="external"
                           href="https://github.com/MiLLeRRain"><GithubOutlined/> @MiLLeRRain</a>
                        <a className={styles.tag} target="_blank" rel="external"
                           href="https://twitter.com/lhhan"><TwitterOutlined/> @lhhan</a>
                        <a className={styles.tag} target="_blank" rel="external"
                           href="https://www.instagram.com/jin.ap/"><InstagramOutlined/> @jin.ap</a>
                        <a className={styles.tag} target="_blank" rel="external"
                           href="https://weibo.com/"><WeiboSquareOutlined/> @Apang</a>
                        <a className={styles.tag} target="_blank" rel="external"
                           href="https://wechat.com"><WechatOutlined/> @Apang</a>
                    </div>
                </Col>
            </Row>
        </section>
    </div>
}

export default ContactPage