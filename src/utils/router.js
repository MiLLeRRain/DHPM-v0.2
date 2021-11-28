import React from "react";
import Home from "../pages/HomePage/home";
import Contact from "../pages/ContactPage/contactPage";
import Product from "../pages/ProductPage/productPage";
import ProductDetail from "../pages/ProductDetail";

const routes = {
    "/": () => <Home />,
    "/product": () => <Product />,
    "/contact": () => <Contact />,
    "/product/:id": () => <ProductDetail />,
};

export default routes;