import styles from './App.module.scss';
import {Button} from "antd";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className={styles.App}>
        <header className={styles.header}>
            head banner
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
