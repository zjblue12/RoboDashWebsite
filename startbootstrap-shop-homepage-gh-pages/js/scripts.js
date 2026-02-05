/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener("DOMContentLoaded", () => {
    const cartBtn = document.getElementById("cartBtn");

    cartBtn.addEventListener("click", () => {
      // If you're already inside /pages/, go to cart.html in the same folder.
      // If you're on home (index.html), go into /pages/cart.html.
      const path = window.location.pathname;
      const isInPagesFolder = path.includes("/pages/");

      window.location.href = isInPagesFolder ? "cart.html" : "pages/cart.html";
    });
  });