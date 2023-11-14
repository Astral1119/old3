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
	
	.menu-items:hover > .menu-item {
	  opacity: 0.3;
	}
	
	.menu-items:hover > .menu-item:hover {
	  opacity: 1;
	  background: -webkit-linear-gradient(135deg, #e3d09d, #b4e0bc);
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	}
	
	.menu-item {
	  cursor: pointer;
	  display: block;
	  font-family: 'Ibarra Real Nova', serif;
	  font-size: clamp(3rem, 5vw, 4rem);
	  padding: clamp(0.25rem, 0.2vw, 1rem) clamp(1rem, 10vw, 16rem);
	  transition: opacity 400ms ease;
	}
	
	.menu-item a {
		color: white;
		text-decoration: none;
	}
	
	.display {
		margin-left: 25rem;
	}
	
	.flex-container {
		display: flex;
	}
	
	nav {
		width: inherit;
		transition: background 300ms;
	    text-decoration: none;
	    border-bottom: 1px solid #d9d9d9;
	    color: #1a1a1a;
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