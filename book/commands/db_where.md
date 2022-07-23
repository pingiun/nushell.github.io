---
title: db where
version: 0.64.0
usage: |
  Includes a where statement for a query
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> db where (where)```

## Parameters

 -  `where`: Where expression on the table

## Examples

selects a column from a database with a where clause
```shell
> db open db.mysql
    | db select a
    | db from table_1
    | db where ((db col a) > 1)
    | db describe
```