// Advanced OrderNow with Bottom Cart, Sticky Tabs, Highlight, Animations
import React, { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import menuData from "../data/menuData";
import "./OrderNow.css";
import { motion } from "framer-motion";

const OrderNow = () => {

  const [cart, setCart] = useState({});
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState(menuData[0].category);

  const updateQty = (itemName, price, type) => {
    setCart((prev) => {
      const item = prev[itemName] || { qty: 0, price };
      if (type === "inc") return { ...prev, [itemName]: { qty: item.qty + 1, price } };
      if (type === "dec" && item.qty > 0)
        return { ...prev, [itemName]: { qty: item.qty - 1, price } };
      return prev;
    });
  };

  const totalPrice = useMemo(() =>
    Object.values(cart).reduce((sum, i) => sum + i.qty * i.price, 0)
  , [cart]);

  const allItems = menuData.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const searchResults = allItems.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  const highlight = (text) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return parts.map((p, i) =>
      p.toLowerCase() === search.toLowerCase() ? <mark key={i}>{p}</mark> : p
    );
  };

  const navigate = useNavigate();

  return (
    <div className="order-container">
      {/* Header */}
      <div className="order-header">
        <h2>Order Food 😋</h2>
        <div className="search-box">
          <FaSearch />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search food" />
        </div>
      </div>

      {/* Sticky Tabs */}
      {!search && (
       <div className="sticky-tabs">
  {menuData.map((c) => (
    <motion.button
      key={c.category}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`tab-btn ${activeCat === c.category ? "active" : ""}`}
      onClick={() => {
        setActiveCat(c.category);
        document
          .getElementById(c.category)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {c.category}
    </motion.button>
  ))}
</div>

      )}

      {/* Search Results */}
      {search && (
        <div className="category-section">
          <h3 className="category-title">Search Results</h3>
          <div className="food-list">
            {searchResults.map((item) => (
              <div className="food-row" key={item.name}>
                <div>
                  <p className="food-name">{highlight(item.name)}</p>
                  <p className="price">₹{item.price}</p>
                  <small className="category-badge">{item.category}</small>
                </div>
                <div className="qty-controls">
                  <button onClick={() => updateQty(item.name, item.price, "dec")}>-</button>
                  <span>{cart[item.name]?.qty || 0}</span>
                  <button onClick={() => updateQty(item.name, item.price, "inc")}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menu */}
      {!search && menuData.map((cat) => (
        <div key={cat.category} id={cat.category} className="category-section">
          <h3 className="category-title">{cat.category}</h3>
          <div className="food-list">
            {cat.items.map((item) => (
              <div className="food-row" key={item.name}>
                <div>
                  <p className="food-name">{item.name}</p>
                  <p className="price">₹{item.price}</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => updateQty(item.name, item.price, "dec")}>-</button>
                  <span>{cart[item.name]?.qty || 0}</span>
                  <button onClick={() => updateQty(item.name, item.price, "inc")}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Bottom Cart Bar */}
      {totalPrice > 0 && (
        <div className="bottom-cart">
          <span>Total: ₹{totalPrice}</span>
          <button onClick={() => navigate("/checkout")}>
  Checkout
</button>

        </div>
      )}
    </div>
  );
};

export default OrderNow;
