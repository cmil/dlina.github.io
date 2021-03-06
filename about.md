---
layout: page
author: [dario, frank, mathias, peer]
permalink: /about/index.html
title: Network Analysis of Dramatic Texts
tags: []
imagefeature: dramennetzwerke-3.jpg
chart: true
---

{% assign total_words = 0 %}
{% assign total_readtime = 0 %}
{% assign featuredcount = 0 %}
{% assign statuscount = 0 %}

{% for post in site.posts %}
    {% assign post_words = post.content | strip_html | number_of_words %}
    {% assign readtime = post_words | append: '.0' | divided_by:200 %}
    {% assign total_words = total_words | plus: post_words %}
    {% assign total_readtime = total_readtime | plus: readtime %}
    {% if post.featured %}
    {% assign featuredcount = featuredcount | plus: 1 %}
    {% endif %}
{% endfor %}
## About the Project

In 2013, Peer Trilcke proposed a Digital Literary Network Analysis (dlina). Since then, Frank Fischer, Mathias Göbel, Dario Kampkaspar, Christopher Kittel, Hanna-Lena Meiners, and Danil Skorinkin have joined the working group. In the meantime, we processed hundreds of dramatic texts ranging from Greek tragedies to 20th-century plays. We're especially looking into large German, French, English, and Russian corpora. First results have been presented [at several conferences](/talks/), and there's more to come.

We will publish all our results, code, corpora, teaching material here on our GitHub. Plus, we will keep you posted [on our blog](/recent/).

