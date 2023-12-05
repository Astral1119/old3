---
title: Query Smush
blurb: 
tags: 
- technique
- documentation
- query
---

### Introduction

In the days before [[BYCOL]] and other [[LAMBDA Helper Functions]], if we wanted to concatenate the vectors of an array, we would have to use a technique known as Query Smush. It takes advantage of how the header argument of [[QUERY]] combines data. While the same functionality can be achieved in a more intuitive way using [[LAMBDA Helper Functions|LHFs]], it does not count against [[Calculation Limits]].

### Syntax

```
QUERY(array, , 9^9)
```

The syntax is the same as [[QUERY]]. By leaving the second argument blank, it defaults to `"select *"`. The third argument, `9^9`, represents a sufficiently high value (i.e. a number larger than the number of rows in `array`.

### Things to Note

This technique joins each row by `" "`. It is effectively the same as `BYCOL(array, LAMBDA(col, JOIN(" ", col)))` except for how it does not allow mixed data types. If you expect to have null values throughout, you may have to use [[REGEX functions]] in order to format the output.