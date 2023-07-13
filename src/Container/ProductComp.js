import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComp = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((prod) => {
    const { id, title, image, price, category } = prod;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="header">${price}</div>
                <div className="header">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComp;
