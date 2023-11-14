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
	
	<div class = "display">
		<p>hi</p>
	</div>
</div>

<style>
	.sidebar {
		height: 100%;
		width: 25rem;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background-color: #98bd95;
		overflow-x: hidden;
		padding-top: 10px;
	}
	.search_res {
		list-style: none;
		text-decoration: none;
		color: #555555;
	}
	
	.display {
		margin-left: 25rem;
	}
	
	.flex-container {
		display: flex;
	}
	
	nav {
		width: inherit;
	}
	
	a {
	    transition: background 300ms;
	    padding: 0 0.1em;
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