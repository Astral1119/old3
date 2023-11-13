---
layout:
title: Home
id: home
permalink: /
---

<div id="menu">
  <div id="menu-items">
    <div class="menu-item">[[Documentation]]</div>
    <div class="menu-item">[[Blog]]</div>
    <div class="menu-item">[[About]]</div>
    <div class ="menu-item">[[About|Contact Me]]</div>
  </div>
  <div id="menu-background-image"></div>
</div>


<script>
	const menu = document.getElementById("menu");

	Array.from(document.getElementsByClassName("menu-item"))
	  .forEach((item, index) => {
	    item.onmouseover = () => {
	      menu.dataset.activeIndex = index;
	    }
	  });
</script>

<style>
	.fbody {
	  background-color: rgb(20, 20, 20);
	  margin: 0px;
	}

	#menu {  
	  align-items: center;
	  display: flex;
	  height: 100vh;
	  width: 100vw;
	}
	
	#menu-items {
	  margin-left: clamp(1rem, 20vw, 32rem);
	  position: relative;
	  z-index: 2;
	}
	
	#menu[data-active-index="0"] > #menu-background-image {
	  background-position: center 45%;
	}
	
	#menu[data-active-index="1"] > #menu-background-image {
	  background-position: center 50%;
	}
	
	#menu[data-active-index="2"] > #menu-background-image {
	  background-position: center 55%;
	}
	
	#menu[data-active-index="3"] > #menu-background-image {
	  background-position: center 60%;
	}
	
	#menu-background-image {
	  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url("https://cdnb.artstation.com/p/assets/images/images/058/720/667/4k/jen-ingertila-larry-s-house-lined-final.jpg");
	  background-position: center 40%;
	  background-size: 110vmax;
	  background-color: black;
	  height: 100%;
	  left: 0px;  
	  opacity: 0.7;
	  position: absolute;
	  top: 0px;
	  transition: opacity 800ms ease,
	    background-size 800ms ease,
	    background-position 800ms ease;
	  width: 100%;
	  z-index: 0;
	}
	
	#menu-items:hover ~ #menu-background-image {
	  background-size: 100vmax;
	  opacity: 0.6;
	  background-color: black;
	}
	
	#menu-items:hover > .menu-item {
	  opacity: 0.3;
	}
	
	#menu-items:hover > .menu-item:hover {
	  opacity: 1; 
	}
	
	.menu-item {
	  cursor: pointer;
	  display: block;
	  font-family: 'Ibarra Real Nova', serif;
	  font-size: clamp(3rem, 5vw, 4rem);
	  padding: clamp(0.25rem, 0.2vw, 1rem) 0rem;
	  transition: opacity 400ms ease;
	}
	
	.menu-item a {
		color: white;
		text-decoration: none;
	}
	body { 
		overflow: hidden; /* Hide scrollbars */
		margin: 0px !important;
	}
</style>
