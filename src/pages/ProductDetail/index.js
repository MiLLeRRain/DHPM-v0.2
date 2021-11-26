import React from "react";
import styles from "./productDetail.module.scss";
import {usePath} from 'hookrouter';


function trim(str, ch) {

    let res = ''

    for (let i of str) {
        if (i !== ch) res = res+i
    }

    return res.toUpperCase()
}

function ProductDetail() {

    let path = usePath()
    path = trim(path, '/')

    return <div className={styles.pd}>

        <div>{path} DETAIL HERE</div>

    </div>

}

export default ProductDetail
