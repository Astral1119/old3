---
layout: other
title: Blog Homepage
excerpt: Blog Homepage
permalink: /blog
tags:
---

<div id = "sidebar">
	<nav>{% include nav.html %}</nav>
	<!-- HTML elements for search -->
	<div class="searchbar search-container">
        <i class="fa fa-search" aria-hidden="true"></i>
        <label for="search-input"></label>
        <input type="text" oninput="changeResultContainerDisp(this.value)" id="search-input" autocomplete="off" placeholder="Search..."/>
        <ul id="results-container"></ul>
    </div>
    <script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
    <script>
        function changeResultContainerDisp(val) {
            if (val) {
                document.getElementById("results-container").style.display = "block";
                document.getElementById("search-input").addEventListener('blur', function() {
                    document.addEventListener('click', function(event) {
                        var isClickInside = document.getElementById("results-container").contains(event.target);
                        if (!isClickInside) {
                            document.getElementById("results-container").style.display = "none";
                        }
                    })
                }) 
            }  else {
                document.getElementById("results-container").style.display = "none";
            }
        }
        var sjs = SimpleJekyllSearch({
                    searchInput: document.getElementById('search-input'),
                    resultsContainer: document.getElementById('results-container'),
                    json: '/search.json',
                    searchResultTemplate: '<li class="search_res" style="list-style: none;"><a href="{{ site.url }}{url}" style="text-decoration: none; color: #555555;"><p style="font-size: 1.0rem; font-family: "Inter !important"; font-weight: 600;">{title}</p></a></li>',
                    noResultsText: 'No results found',
                    fuzzy: false,
                    limit: 4
                    })
    </script>
</div>



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
	.display {
		margin-left: 200px;
	}
</style>