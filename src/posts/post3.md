---
slug: "/satic-site-generator"
date: "2019-12-02"
title: "Static Site Generator"
---

The typical CMS driven website works by building each page on-demand, fetching content from a database and running it through a template engine. This means each page is assembled from templates and content on each request to the server.

For most sites this is completely unnecessary overhead and only adds complexity, performance problems and security issues. After all, by far the most websites only change when the content authors or their design team makes changes.

A Static Site Generator takes a different approach and generates all the pages of the website once when there's actually changes to the site. This means there's no moving parts in the deployed website. Caching gets much easier, performance goes up and static sites are far more secure.