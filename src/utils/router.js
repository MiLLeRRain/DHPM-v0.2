import React from "react";
import Home from "../pages/HomePage/home";
import Contact from "../pages/ContactPage";
import Product from "../pages/ProductPage/productPage";
import ProductDetail from "../pages/ProductDetail";
import Test from "../pages/TestPage"

const routes = {
    "/": () => <Home />,
    "/product": () => <Product />,
    "/contact": () => <Contact />,
    "/product/:id": () => <ProductDetail />,
    "/test": () => <Test />,
};

export default routes;