import React from "react";
import { Product } from "../Product";

function Price() {
  return (
    <div className="prix">
      <h3 style={{ display: "inline" }}>Prix:</h3>

      <span> {Product.price} $ </span>
    </div>
  );
}

export default Price;
