import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Experience culinary excellence at our restaurant, where innovative
          dishes crafted from the finest ingredients await. Indulge in a dining
          experience that blends tradition with innovation for an unforgettable
          meal.
        </p>
        <button> <a href="#explore-menu">View Menu</a></button>
      </div>
    </div>
  );
};

export default Header;
