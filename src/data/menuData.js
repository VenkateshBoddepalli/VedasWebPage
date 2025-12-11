// menuData.js

const menuData = [
  // ---------------- IDLY ----------------
  {
    category: "IDLY",
    items: [
      { name: "IDLY", qty: "(4 PCS)", price: 35 },
      { name: "HALF PLATE IDLY", qty: "(2 PCS)", price: 20 },
      { name: "SAMBAR IDLY", qty: "(3 PCS)", price: 45 },
      { name: "BUTTER IDLY", qty: "(4 PCS)", price: 55 },
      { name: "GHEE IDLY", qty: "(4 PCS)", price: 50 },
      { name: "GHEE KARAM IDLY", qty: "(4 PCS)", price: 50 },
      { name: "TAWA IDLY", qty: "(4 PCS)", price: 55 },
    ],
  },

  // ---------------- BONDA ----------------
  {
    category: "BONDA",
    items: [
      { name: "MYSORE BONDA", qty: "(4 PCS)", price: 35 },
      { name: "HALF PLATE BONDA", qty: "(4 PCS)", price: 20 },
      { name: "ONION BONDA", qty: "(4 PCS)", price: 35 },
      { name: "TAWA BONDA", qty: "(4 PCS)", price: 55 },
    ],
  },

  // ---------------- PURI ----------------
  {
    category: "PURI",
    items: [
      { name: "PURI", qty: "(4 PCS)", price: 40 },
      { name: "HALF PLATE PURI", qty: "(2 PCS)", price: 25 },
    ],
  },

  // ---------------- WADA ----------------
  {
    category: "WADA",
    items: [
      { name: "WADA", qty: "(4 PCS)", price: 40 },
      { name: "HALF PLATE WADA", qty: "(2 PCS)", price: 25 },
      { name: "SAMBAR WADA", qty: "(3 PCS)", price: 50 },
      { name: "DAHI WADA", qty: "(3 PCS)", price: 55 },
      { name: "TAWA WADA", qty: "(4 PCS)", price: 55 },
      { name: "PONGAL", qty: "", price: 50 },
      { name: "UGGANI BAJJI", qty: "", price: 45 },
    ],
  },

  // ---------------- COMBO'S ----------------
  {
    category: "COMBO'S",
    items: [
      { name: "IDLY + BONDA", price: 35 },
      { name: "IDLY + ONION BONDA", price: 35 },
      { name: "IDLY + WADA", price: 40 },
      { name: "WADA + BONDA", price: 40 },
      { name: "PURI + IDLY", price: 40 },
      { name: "PURI + WADA", price: 40 },
      { name: "PURI + BONDA", price: 40 },
      { name: "SAMBAR IDLY WADA (2 IDLY + 1 WADA)", price: 45 },
    ],
  },

  // ---------------- DOSA ----------------
  {
    category: "DOSA",
    items: [
      { name: "PLAIN DOSA", price: 35 },
      { name: "MASALA DOSA", price: 40 },
      { name: "ONION DOSA", price: 40 },
      { name: "UPMA DOSA", price: 40 },
      { name: "KARAM DOSA", price: 40 },
      { name: "PLAIN PESARA DOSA", price: 40 },
      { name: "ONION PESARA DOSA", price: 45 },
      { name: "UPMA PESARA DOSA", price: 45 },
      { name: "MASALA PESARA DOSA", price: 45 },
      { name: "UTTAPAM", price: 50 },
      { name: "SET DOSA", price: 50 },
      { name: "GHEE KARAM DOSA", price: 50 },
      { name: "GHEE MASALA DOSA", price: 55 },
    ],
  },

  // ---------------- RAVA DOSA ----------------
  {
    category: "RAVA DOSA",
    items: [
      { name: "RAVA PLAIN DOSA", price: 50 },
      { name: "RAVA MASALA DOSA", price: 55 },
      { name: "RAVA ONION", price: 55 },
    ],
  },

  // ---------------- SPL. DOSA ----------------
  {
    category: "SPECIAL DOSA",
    items: [
      { name: "BEGUM BAZAR DOSA", price: 55 },
      { name: "CORN DOSA", price: 55 },
      { name: "CORN PANNER DOSA", price: 65 },
      { name: "CHOCOLATE DOSA", price: 60 },
      { name: "BUTTER DOSA", price: 55 },
      { name: "BUTTER KARAM DOSA", price: 60 },
      { name: "BUTTER PANNER DOSA", price: 65 },
      { name: "BUTTER CHEESE DOSA", price: 65 },
      { name: "BUTTER CORN DOSA", price: 65 },
      { name: "BUTTER CREAM DOSA", price: 65 },
      { name: "BUTTER CHEESE KARAM", price: 70 },
      { name: "BUTTER CHEESE PANNER", price: 75 },
      { name: "BUTTER CHEESE CREAM", price: 75 },
      { name: "BUTTER CHEESE CORN DOSA", price: 75 },
      { name: "BUTTER CHEESE CORN PANNER DOSA", price: 80 },
      { name: "SCHEZWAN DOSA", price: 60 },
      { name: "SCHEZWAN CREAM DOSA", price: 75 },
      { name: "SCHEZWAN PANNER DOSA", price: 75 },
      { name: "SCHEZWAN CREAM CHEESE DOSA", price: 80 },
      { name: "SCHEZWAN CHEESE PANNER DOSA", price: 80 },
      { name: "SCHEZWAN BUTTER PANNER DOSA", price: 80 },
      { name: "SCHEZWAN PIZZA DOSA", price: 85 },
      { name: "VEDA SPECIAL DOSA (Must Try)", price: 120 },
      { name: "MLA DOSA", price: 130 },
    ],
  },

  // ---------------- CHAPATI ----------------
  {
    category: "CHAPATI",
    items: [
      { name: "CHAPATI", price: 45 },
      { name: "SINGLE CHAPATI", price: 25 },
    ],
  },

  // ---------------- RICE ----------------
  {
    category: "RICE",
    items: [
      { name: "LEMON RICE", price: 50 },
      { name: "TOMATO RICE", price: 50 },
      { name: "JEERA RICE", price: 50 },
      { name: "VEG RICE", price: 50 },
      { name: "CURD RICE", price: 50 },
      { name: "SAMBAR RICE", price: 50 },
    ],
  },

  // ---------------- SNACKS ----------------
  {
    category: "SNACKS",
    items: [
      { name: "MIRCHI BAJJI", price: 30 },
      { name: "PUNUGULU", price: 30 },
      { name: "ALOO BHAJJI", price: 30 },
      { name: "CUT MIRCHI", price: 40 },
    ],
  },
];

export default menuData;
