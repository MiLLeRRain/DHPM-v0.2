import styles from './App.module.scss';
import {Button} from "antd";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className={styles.App}>
        <header className={styles.header}>
            <div className={styles.box}>
                <div className={styles.boxleft}>DHPM</div>
                <div className={styles.boxright}>Bread Navi here</div>
            </div>
        </header>
        <Content className={styles.content}>
            content
        </Content>
        <Footer className={styles.footer}>
            <p><strong>@2021 DHPM</strong></p>
            <p>By L.H.</p>
        </Footer>
    </div>
  );
}

export default App;
