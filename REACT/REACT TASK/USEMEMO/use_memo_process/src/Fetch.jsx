import React, { useEffect, useMemo, useState } from "react";

const Fetch = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const changedata = await data.json();
      setProduct(changedata.products); // ✅ FIX
    };
    fetchdata();
  }, []);

  const totalPrice = useMemo(() => {
    return product.reduce((sum, item) => sum + item.price, 0);
  }, [product]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products: {product.length}</h2>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

      <ul>
        {product.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
