import React from 'react'
import { Product } from "../Product";
function Name() {
  return (
    <div className="name">
      <h3>{Product.name}</h3>
    </div>
  );
}

export default Name