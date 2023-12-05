---
title: LAMBDA Recursion
blurb: 
tags:
- technique
- documentation
- lambda
- algorithms
permalink: /recursion
---

### Introduction

LAMBDA Recursion is a technique that uses a [[LAMBDA]] term that calls itself in order to perform recursion.

### Syntax

```
LET(func, LAMBDA(func, <variables>, <expression>), func(func, <variables>))
```

```
LAMBDA(func, func(func, <variables>))(LAMBDA(func, <variables>, <expression>))
```