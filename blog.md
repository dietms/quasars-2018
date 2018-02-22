---
layout: default
title: Blog
permalink: /blog/
custom_css: blog.css
---

<section class="container">
    <h3 class="typography--display1">Blog.</h3>
    <br>
    {% if site.posts.size > 0 %}
    <ul class="row">
        {% for post in site.posts %}
        <li class="col s12 post-item">
            {% if post.feature_img %}
            <img src="{{ post.feature_img }}" alt="{{ post.title }}" class="responsive-img feature-img">
            {% endif %}
            <div class="typography--headline">
                <a href="{{ post.url }}" class="white-text">{{ post.title | escape }}</a>
            </div>
            <span class="typography--caption">{{ post.date | date: site.date_format }}</span>
            &ndash;
            <span class="typography--caption">{{ post.author }}</span>
            {% if site.show_excerpts %}
            <div class="typography--body1">{{ post.excerpt }}</div>
            {% endif %}
        </li>
        {% endfor %}
    </ul>
    {% endif %}
</section>