import React from "react";
import products from "../../data/products";
import "./TableProducts.css";

export default (props) => {
  //Mapping product's items

  function getLines() {
    return products.map((product, i) => {
      return (
        // OMG, a Conditional ClassName! ⤵
        <tr key={product.id} className={i % 2 == 0 ? "pair" : "odd"}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>R$ {product.price.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="table-products">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{getLines()}</tbody>
      </table>
    </div>
  );
};
