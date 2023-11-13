---
layout: page
title: Home
id: home
permalink: /
---

# Welcome! 🌱

<p style="padding: 3em 1em; background: #f5f7ff; border-radius: 4px;">
  Welcome to the [[about|The Astral Café]]!
</p>

This is a digital garden meant to serve as both a personal blog and a resource for Google Sheets users.

<strong>Recently updated notes</strong>

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

<style>
	.wrapper {
	    max-width: 46em;
	}
	  
	.feed-title-excerpt-block {
	    width: 100%;
	    cursor: pointer;
	    border-top: 1px solid #f7f7f7;
	    border-bottom: 1px solid #f7f7f7;
	}
	
	.feed-title-excerpt-block:hover {
	    background-color: #f7f7f7;
	}
	
	.feed-title {
	     color: #555555;
	    margin-left: 20px;
	    margin-right: 50px;
	    font-size: 16px;
	    font-family:  Inter, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	    font-weight: 600;
	}
	
	.feed-excerpt{
	    color: #555555;
	    margin-top: -12px;
	    margin-left: 20px !important;
	    margin-right: 30px;
	    font-family:  'IBM Plex Sans', Inter, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	    font-size: 15px;
	}
	
	.tags {
	    list-style: none;
	    margin: 0;
	    overflow: hidden; 
	    padding: 0;
	}
	
	.tags li {
	    float: left; 
	}
	
	.tag {
	    color: #555555;
	    background: #f7f7f7;
	    text-decoration: none;
	    display: inline-block;
	    padding: 0 12px;
	    border-radius: 32px;
	    height: auto;
	    vertical-align: middle;
	    font-family:  Inter, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	    font-weight: normal !important;
	    font-size: 13px;
	}
</style>
