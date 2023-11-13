---
layout: 
title: Blog Homepage
excerpt: Blog Homepage
permalink: /blog
tags:
---
<div id = "sidebar">
	<nav>{% include nav.html %}</nav>
<\div>

<div class = "display">
	<ul>
	  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
	  {% for item in recent_notes limit: 5 %}
	    <div class="feed-title-excerpt-block disable-select" data-url="{{site.url}}{{item.url}}">
	            <a href="{{ item.url }}" style="text-decoration: none; color: #555555;">
	            {%- if item.status == "Ongoing" or item.status == "ongoing" -%}
	                <ul style="padding-left: 20px; margin-top: 20px;" class="tags">
	                    <li style="padding: 0 5px; border-radius: 10px;" class="tag"><b>Status: </b>{{item.status | capitalize }}</li>
	                </ul>
	                <p style="margin-top: 0px;" class="feed-title">{{ item.title }}</p>
	            {%- else -%}
	                <p class="feed-title">{{ item.title }}</p>
	            {%- endif -%}
	                <p class="feed-excerpt">{{ item.content | strip_html | strip | escape | truncate: 200}}</p>
	            </a>
	        </div>
	  {% endfor %}
	</ul>
</div>

<style>
	.sidebar {
		height: 100%;
		width: 200px;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background-color: #98bd95;
		overflow-x: hidden;
		padding-top: 10px;
	}
	.main {
		margin-left: 200px;
	}
</style>