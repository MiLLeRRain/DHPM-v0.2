import React from "react";
import Home from "../pages/HomePage";
import Contact from "../pages/ContactPage";
import Product from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetail"

const routes = {
    "/": () => <Home />,
    "/product": () => <Product />,
    "/contact": () => <Contact />,
    "/product/:id": () => <ProductDetail />,
};

export default routes;