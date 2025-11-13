import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

import SmartHome from "../assets/images/SmartHome.jpg";
import Electric from "../assets/images/Electrical.jpg";
import Electrical from "../assets/docs/ElectricalEquipment.pdf";
import Master from "../assets/docs/MasterSmartHome.pdf";

const Products = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  if (window.innerWidth <= 768) {
    // 👇 On mobile, show immediately
    setIsVisible(true);
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);


  // ======== DATA STRUCTURE ==========
  const categories = [
    {
      name: "MASTER SMART HOME",
      products: [
        { name: "ILLUMINATION" },
        { name: "SHADING SYSTEMS" },
        { name: "APPLIANCES CONTROL" },
        { name: "HEATING / COOLING" },
        { name: "VISUALIZATION" },
      ],
    },
    {
      name: "LED CONTROLLERS",
      products: [
        { name: "LD-250W" },
        { name: "LD-250W-RF" },
        { name: "LD-250W-BST" },
        { name: "LD-RGB-BST" },
        { name: "LD-RGB" },
      ],
    },
    {
      name: "WALL – MOUNTING DIMMER",
      products: [{ name: "DM-400L/N" }, { name: "DM-1000W" }],
    },
    {
      name: "FLUSH – MOUNTING DIMMER",
      products: [{ name: "DM-400B" }, { name: "DM-400B-RF" }],
    },
    {
      name: "RAIL – MOUNTING DIGITAL DIMMER",
      products: [{ name: "DM-300/b" }, { name: "DM-DGL/b" }],
    },
    {
      name: "SURFACE – MOUNTING DIMMER",
      products: [
        { name: "DM-2500W" },
        { name: "DM-2500" },
        { name: "DM-PRO 1-10V" },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`products-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container">
        <h2 className="products-title">Our Products</h2>

        {/* ===== CATEGORY LIST ===== */}
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-block">
              <h3 className="category-heading">{category.name}</h3>
              <hr className="category-line" />
              <ul className="product-list">
                {category.products.map((product, i) => (
                  <li key={i} className="product-item">
                    <Link
                      to={`/k-watt-electric/products/${product.name
                        .toLowerCase()
                        .replace(/\s+|\//g, "-")}`}
                      className="product-code"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===== DOWNLOAD SECTION ===== */}
        <div className="downloads-section">
          <h2 className="downloads-title">Product Catalogue</h2>

          <div className="downloads-grid">
            <div className="download-card">
              <img src={SmartHome} alt="MASTER Smart Home" />
              <h3>MASTER Smart Home</h3>
              <a href={Master} target="_blank" rel="noopener noreferrer">
                View PDF
              </a>
            </div>

            <div className="download-card">
              <img src={Electric} alt="Electrical Equipment" />
              <h3>Electrical Equipment</h3>
              <a href={Electrical} target="_blank" rel="noopener noreferrer">
                View PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
