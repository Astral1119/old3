---
title: The QUERY Function
excerpt: The QUERY function
tags:
  - function
  - documentation
---
### Introduction

The [QUERY](https://support.google.com/docs/answer/3093343?hl=en) function allows the user to make SQL-lite queries on arrays.

### Syntax

QUERY syntax is made up of two parts: the function syntax and the query syntax.

#### Function Syntax

```
QUERY(data, [query], [headers])
```

* *`data` - The array to perform the query on.
    - Each column of `data` can only hold boolean, numeric (including date/time types), or string values.
    - In case there are multiple data types in a single column, the majority data type determines the data type of the column for query purposes. Minority data types are considered null values.

* `query` - The query to perform, written in [the Google Visualization API Query Language](https://developers.google.com/chart/interactive/docs/querylanguage). By default, it is set to "select \*".
    - The query must be submitted as a string. It has a separate syntax, which is explained below. 
    - See [Query Language Reference](https://developers.google.com/chart/interactive/docs/querylanguage) for further details on the query language.

* `headers` - The number of header rows at the top of `data`. If omitted or set to `-1`, the value is guessed based on the content of `data`.
	- It is currently unclear how QUERY guesses the number of header rows in `data`. Therefore, it is recommended that you always submit a header argument.
	- Header rows are combined by joining with a delimiter `" "`. This is the reason why QUERY SMUSH works.

#### Query Syntax

```
"[select] [where] [group by] [pivot by] [order by] [skipping] [limit] [offset] [label] [format] [options]"
```

Query syntax is divorced from formula syntax. Queries are characterized by three important concepts.
1. Language Clauses
	- These are the broader elements that define the query.
2. Data Manipulation Functions
	- These functions expand the capabilities of the query function and can be used throughout the clauses.
3. Language Elements
	- These elements will be
This section will go over each.

### Useful Techniques

There are various ways one can use QUERY that do 