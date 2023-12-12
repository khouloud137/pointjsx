import React from "react";
import { Product } from "../Product";

function Image() {
  return (
    <div className="img">
      <img src={Product.image} alt=" product" />
    </div>
  );
}

export default Image;
