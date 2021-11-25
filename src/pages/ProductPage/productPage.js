import React from "react";
import styles from "./productpage.module.scss";
import {Carousel} from 'antd';
import ShowCaseData from "../showcase.json";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function ProductPage() {

    let a = ShowCaseData.data.map((arr) => {
        return arr.loc;
    });

    return <div className={styles.products}>
        <Carousel autoplay>
            {
                a && a.map(function (num){
                    return <div>
                        <h3 style={contentStyle}>
                            {/**/}
                            <img style={{alignSelf: 'center', height: '100%', resizeMode: 'contain'}} alt="example" src={require('../../assets/' + num + '.png').default}/>
                        </h3>
                    </div>;
                })
            }
        </Carousel>
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