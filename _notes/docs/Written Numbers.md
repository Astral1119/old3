---
title: Calculation Limits
blurb: Calculation Limits
tags:
- technique
---

### Introduction

Generating the written form of numerals is not a trivial problem. However, there is one commonly used trick that resolves this problem for small numbers.

### Syntax

```
SUBSTITUTE(GOOGLETRANSLATE(BAHTTEXT([number])), " baht", )
```

### Notes

* The efficacy of this technique is dependent on the accuracy of Google Translate.