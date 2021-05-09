---
title: Modal demo
description: Vamos a cerrar por obras
include:
  - label: 'Post Author'
    name: 'author'
    widget: 'relation'
    collection: 'authors'
    search_fields: ['name.first', 'twitterHandle']
    value_field: 'name.first'
    display_fields: ['twitterHandle', 'followerCount']
---
