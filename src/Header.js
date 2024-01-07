import React from "react";

function Header() {
  return (
    <header>
      <div className="head">
        <img src="https://i.imgur.com/hXilvl8.png" width="120px" height="120px"/>
        <h1 id="sportify">SPORTIFY</h1>
        <i id="cart" class="fa-solid fa-cart-shopping fa-2x"></i>
        <i id="user" class="fa-solid fa-user fa-2x"></i>
      </div>
    </header>
  );
}

export default Header;
