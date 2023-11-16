---
title: The QUERY Function
excerpt: The QUERY function
tags:
  - function
  - documentation
  - query
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

#### Language Clauses

Language clauses determine how information is gathered and processed.

|Clause|Usage|
|---|---|
|`[select](https://developers.google.com/chart/interactive/docs/querylanguage#Select)`|Selects which columns to return, and in what order. If omitted, all of the table's columns are returned, in their default order.|
|`[where](https://developers.google.com/chart/interactive/docs/querylanguage#Where)`|Returns only rows that match a condition. If omitted, all rows are returned.|
|`[group by](https://developers.google.com/chart/interactive/docs/querylanguage#Group_By)`|Aggregates values across rows.|
|`[pivot](https://developers.google.com/chart/interactive/docs/querylanguage#Pivot)`|Transforms distinct values in columns into new columns.|
|`[order by](https://developers.google.com/chart/interactive/docs/querylanguage#Order_By)`|Sorts rows by values in columns.|
|`[limit](https://developers.google.com/chart/interactive/docs/querylanguage#Limit)`|Limits the number of returned rows.|
|`[offset](https://developers.google.com/chart/interactive/docs/querylanguage#Offset)`|Skips a given number of first rows.|
|`[label](https://developers.google.com/chart/interactive/docs/querylanguage#Label)`|Sets column labels.|
|`[format](https://developers.google.com/chart/interactive/docs/querylanguage#Format)`|Formats the values in certain columns using given formatting patterns.|
|`[options](https://developers.google.com/chart/interactive/docs/querylanguage#Options)`|Sets additional options.|


### Useful Techniques

There are various ways one can use QUERY. Here is a short list.

