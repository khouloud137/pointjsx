import React from "react";
import { Product } from "../Product";
function Description() {
  return (
    <div className="description">
      <h4>Description :</h4>
      <p>{Product.description}</p>
    </div>
  );
}

export default Description;
