---
title: Query Arithmetic
blurb: 
tags:
- technique
- documentation
- query
---

### Introduction

[[QUERY|The QUERY function]] is able to process arithmetic functions by default, being processed on the same level as other data manipulation functions. As such, it allows for arithmetic processing via strings.

### Syntax

```
INDEX(QUERY(, "select "&expression, ), 2)
```

Alternative Syntax (non-array enabled)

```
+SORT(QUERY(, "select "&expression, ))
```

* `expression` should be an arithmetic expression using only `+`, `-`, `*`,  and `/`. It should be submitted as a string.