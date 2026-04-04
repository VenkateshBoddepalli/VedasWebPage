/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.PNG";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import { useNavigate } from "react-router-dom";
import MessCard from "./MessCard";

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [openMessCard, setOpenMessCard] = useState(false);

  // mobile menu items nav bar
  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "About", icon: <InfoIcon />, path: "/about" },
    { text: "Testimonial", icon: <CommentRoundedIcon />, path: "/testimonial" },
    { text: "Contact", icon: <PhoneRoundedIcon />, path: "/contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, path: "/icon" },
    { text: "Order Now", icon: <FastfoodRoundedIcon />, path: "/ordernow" },
    // { text: "Mess Card", icon:<PaymentRoundedIcon />,path:"/messcard"},
    {
      text: "Mess Card",
      icon: <PaymentRoundedIcon />,
      action: () => setOpenMessCard(true),
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img
          src={Logo}
          alt="Logo"
          style={{ borderRadius: "20% 80% 8% 92% / 80% 20% 80% 20%" }}
        />
      </div>

      {/* Desktop Links */}
      <nav className="navbar-links-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/testimonial">Testimonial</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/icon">
          <BsCart2 className="navbar-cart-icon" />
        </NavLink>
        {/* <NavLink to="/messcard">Mess Card</NavLink> */}

        <button className="mess-card-btn" onClick={() => setOpenMessCard(true)}>
          Mess Card
        </button>

        {/* <button className="primary-button" onClick={() => navigate("/icon")}>Order Now</button> */}
        <button className="order-now-btn" onClick={() => navigate("/ordernow")}>
          🍽️ Order Now
        </button>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* MOBILE DRAWER */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          // onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                {item.path ? (
                  <NavLink
                    to={item.path}
                    style={{
                      width: "100%",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                    onClick={() => setOpenMenu(false)}
                  >
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </NavLink>
                ) : (
                  <ListItemButton
                    onClick={() => {
                      item.action();
                      setOpenMenu(false);
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

    <MessCard
  open={openMessCard}
  onClose={() => setOpenMessCard(false)}
/>
    </nav>
  );
};

export default Navbar;
