import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/Actions/ProductAction";
import ProductComp from "./ProductComp";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(products);

  const fetchProd = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProd();
  }, []);
  console.log("Products:", products);

  return (
    <div className="ui grid container">
      <ProductComp />
    </div>
  );
};

export default ProductListing;
