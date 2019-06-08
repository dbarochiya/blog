---
title: "Two git accounts on a single machine"
description: "If you are working with multiple git accounts on a single machine then this article will help you out in sorting the messy life you are…"
date: "2019-06-08T11:07:34.241Z"
categories: []
published: false
---

> If you are working with multiple git accounts on a single machine then this article will help you out in sorting the messy life you are living :P 

### Premise > 

So it all started when I was working on some open source project on my work laptop, then one day this happened !!!

  

  

This is horrible, right? — 

  

Author — 

Committer —  

Pusher — 

  

### Now to the solution …..

The root of the problem here lies in the file  `.gitconfig` which stores configuration information which will be used by the git clients while working on the git repositories.

So if you run this command `git config --global user.name 'xxx'` , it will change the `.gitconfig` file accordingly

  

There are three types of `.gitconfig` files 

-   local
-   system
-   global
