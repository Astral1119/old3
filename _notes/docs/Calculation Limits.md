---
title: Calculation Limits
blurb: Calculation Limits
tags:
- documentation
---

### Introduction

Google Sheets has a calculation limit for each cell. This calculation limit can broadly be split into two types:

1.  Function calls
2. Recursion calls

Evidence can be found in [this spreadsheet.](https://docs.google.com/spreadsheets/d/160UfdYEOoplAaKzm4Cx4rF0NNWwd6b2KC3LH3xAr-jk/edit#gid=0)

### Function Calls

The function call limit is approximately `2,000,000` (`2e6`) function calls per cell. The exact value is unknown as there is variance in the results of the functions used to reach that limit.

### Recursion Calls

The recursion limit is exactly `10,000` (`1e4`). This limit is the same when used in [[LAMBDA Recursion]] and in [[Iterative Calculation]].