import { list } from "postcss";
import React, { useEffect, useState } from "react";

const Features = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((result) => result.json())
      .then((json) => {
        setData(json.users);
      });
  }, []);

  console.log(data);
  return <div>{data.firstName}</div>;
};

export default Features;
