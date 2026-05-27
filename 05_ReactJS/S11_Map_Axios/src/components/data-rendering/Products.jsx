import { useState } from "react";
import "./Products.css";
function Products() {
  const [state, setState] = useState([
    {
      url: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400",
      productname: "Wireless Headphones",
      description:
        "Noise-cancelling Bluetooth headphones with immersive sound quality.",
    },
    {
      url: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
      productname: "Smart Watch",
      description:
        "Modern smartwatch with fitness tracking and notification support.",
    },
    {
      url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      productname: "Smartphone",
      description:
        "Latest generation smartphone with high-resolution display and camera.",
    },
    {
      url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      productname: "Gaming Laptop",
      description:
        "High-performance gaming laptop with RGB keyboard and fast processor.",
    },
    {
      url: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
      productname: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and waterproof design.",
    },
    {
      url: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400",
      productname: "MacBook Pro",
      description:
        "Powerful laptop with Retina display and advanced performance.",
    },
    {
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      productname: "Wireless Earbuds",
      description:
        "Compact earbuds with crystal-clear audio and charging case.",
    },
    {
      url: "https://images.unsplash.com/photo-1580894908361-967195033215?w=400",
      productname: "Mechanical Keyboard",
      description:
        "RGB mechanical keyboard designed for gamers and programmers.",
    },
    {
      url: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
      productname: "4K Monitor",
      description:
        "Ultra HD monitor with vibrant colors and slim bezel design.",
    },
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
      productname: "Tablet",
      description:
        "Lightweight tablet perfect for entertainment and productivity.",
    },
  ]);
  return (
    <div className="products">
      {state.map(function (product) {
        return (
          <div className="product-card">
            <img src={product.url} width={"100%"} height={210} />
            <h3>{product.productname}</h3>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
