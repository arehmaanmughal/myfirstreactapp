import React from "react";
import { useParams } from "react-router-dom";

const Pricing = () => {
  const params = useParams();
  const { name } = params;
  return (
    <div>
      <h1>Price of {name}</h1>
    </div>
  );
};

export default Pricing;
