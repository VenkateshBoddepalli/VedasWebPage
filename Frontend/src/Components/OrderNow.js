// Advanced OrderNow with UX-first rendering (Search / Category driven)
import React, { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import menuData from "../data/menuData";
import "./OrderNow.css";

const OrderNow = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState({});
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Update quantity
  const updateQty = (itemName, price, type) => {
    setCart((prev) => {
      const item = prev[itemName] || { qty: 0, price };

      if (type === "inc") {
        return { ...prev, [itemName]: { qty: item.qty + 1, price } };
      }

      if (type === "dec" && item.qty > 0) {
        return { ...prev, [itemName]: { qty: item.qty - 1, price } };
      }

      return prev;
    });
  };

  // Total price
  const totalPrice = useMemo(() => {
    return Object.values(cart).reduce(
      (sum, item) => sum + item.qty * item.price,
      0
    );
  }, [cart]);

  // Flatten menu for search
  const allItems = menuData.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const searchResults = allItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Highlight searched text
  const highlight = (text) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="order-container">
      {/* Header */}
      <div className="order-header">
        <h2>Order Food 😋</h2>
        <div className="search-box">
          <FaSearch />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedCategory(null);
            }}
            placeholder="Search food"
          />
        </div>
      </div>

      {/* Sticky Category Tabs */}
      <div className="sticky-tabs">
        {menuData.map((cat) => (
          <motion.button
            key={cat.category}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={`tab-btn ${
              selectedCategory === cat.category ? "active" : ""
            }`}
            onClick={() => {
              setSearch("");
              setSelectedCategory(cat.category);
            }}
          >
            {cat.category}
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <div className="content-area">
        {/* Empty State */}
        {!search && !selectedCategory && (
          <div className="empty-state">
            <p>🍽️ Start by searching or selecting a category</p>
          </div>
        )}

        {/* Search Results */}
        {search && (
          <div className="category-section">
            <h3 className="category-title">Search Results</h3>

            {searchResults.length === 0 ? (
              <p className="no-results">No items found</p>
            ) : (
              <div className="food-list">
                {searchResults.map((item) => (
                  <motion.div
                    key={item.name}
                    className="food-row"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div>
                      <p className="food-name">{highlight(item.name)}</p>
                      <p className="price">₹{item.price}</p>
                      <small className="category-badge">
                        {item.category}
                      </small>
                    </div>

                    <div className="qty-controls">
                      <button
                        onClick={() =>
                          updateQty(item.name, item.price, "dec")
                        }
                      >
                        -
                      </button>
                      <span>{cart[item.name]?.qty || 0}</span>
                      <button
                        onClick={() =>
                          updateQty(item.name, item.price, "inc")
                        }
                      >
                        +
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Category Items */}
        {!search && selectedCategory && (
          <div className="category-section">
            <h3 className="category-title">{selectedCategory}</h3>

            <div className="food-list">
              {menuData
                .find((c) => c.category === selectedCategory)
                ?.items.map((item) => (
                  <motion.div
                    key={item.name}
                    className="food-row"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div>
                      <p className="food-name">{item.name}</p>
                      <p className="price">₹{item.price}</p>
                    </div>

                    <div className="qty-controls">
                      <button
                        onClick={() =>
                          updateQty(item.name, item.price, "dec")
                        }
                      >
                        -
                      </button>
                      <span>{cart[item.name]?.qty || 0}</span>
                      <button
                        onClick={() =>
                          updateQty(item.name, item.price, "inc")
                        }
                      >
                        +
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Cart Bar */}
      {totalPrice > 0 && (
        <div className="bottom-cart">
          <span>Total: ₹{totalPrice}</span>
         <button
  onClick={() => {
    localStorage.setItem("orderCart", JSON.stringify(cart));
    localStorage.setItem("orderTotal", totalPrice);

    navigate("/checkout");
  }}
>
  Checkout
</button>

        </div>
      )}
    </div>
  );
};

export default OrderNow;