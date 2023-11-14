---
layout: other
title: Blog Homepage
excerpt: Blog Homepage
permalink: /blog
tags:
---

<div id = "flex container">
	<div id = "sidebar">
		<nav>{% include nav.html %}</nav>
		{% include search.html %}
	</div>
	
	<div id = "display">
		<div id = "background-image"></div>
	</div>
</div>

<style>
	#background-image {
	  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url("https://cdnb.artstation.com/p/assets/images/images/058/720/667/4k/jen-ingertila-larry-s-house-lined-final.jpg");
	  background-position: center 40%;
	  background-size: 100vmax;
	  background-color: black;
	  height: 100%;
	  left: 25rem; 
	  opacity: 0.7;
	  position: absolute;
	  top: 0px;
	  transition: opacity 800ms ease,
	    background-size 800ms ease,
	    background-position 800ms ease;
	  width: 100%;
	  z-index: 0;
	}
	
	#sidebar {
		height: 100%;
		width: 25rem !important;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background-color: #98bd95;
		overflow: auto;
		padding-top: 10px;
	}
	
	#results-container:hover > .menu-item {
	  opacity: 0.3;
	}
	
	#results-container:hover > .menu-item:hover {
	  opacity: 1;
	  background: -webkit-linear-gradient(135deg, #e3d09d, #b4e0bc);
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	}
	
	.menu-item {
	  cursor: pointer;
	  display: block;
	  font-family: 'Ibarra Real Nova', serif;
	  font-size: clamp(1rem, 3vw, 2rem);
	  transition: opacity 400ms ease;
	}
	
	.menu-item a {
		color: white;
		text-decoration: none;
	}
	
	.flex-container {
		display: flex;
	}
	
	nav {
		width: 80%;
		transition: background 300ms;
	    text-align: center;
	    padding: 10%;
	}
	
	nav a {
	    color: #1a1a1a;
	    font-size: 2rem;
	}
	
	body {
	    box-sizing: content-box;
	    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
	    line-height: 1.7;
	    overflow-x: hidden;
	    color: #333;
	    font-size: 1rem;
	    max-width: 63em;
	}
</style>