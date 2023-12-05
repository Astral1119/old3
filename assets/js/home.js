document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll("#menu-items .menu-item a");
  const backgroundImage = document.getElementById("menu-background-image");

  menuItems.forEach((item, index) => {
    item.addEventListener("mouseover", function() {
      const backgroundPosition = 35 + index * 10; // Adjust this calculation as needed
      backgroundImage.style.backgroundPosition = `center ${backgroundPosition}%`;
    });
  });
});
