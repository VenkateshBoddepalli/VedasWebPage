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
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  // mobile menu items nav bar
  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "About", icon: <InfoIcon />, path: "/about" },
    { text: "Testimonial",icon: <CommentRoundedIcon />,path: "/testimonial"},
    { text: "Contact", icon: <PhoneRoundedIcon />, path: "/contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, path: "/icon" },
    { text: "Order Now",icon: <FastfoodRoundedIcon  />,path: "/ordernow"},
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
                <NavLink
                  to={item.path}
                  style={{
                    width: "100%",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  onClick={() => setOpenMenu(false)} // CLOSE DRAWER + NAVIGATE
                >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
