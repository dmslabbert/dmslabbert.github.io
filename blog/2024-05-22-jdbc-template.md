---
title: Using JdbcTemplate
description: JdbcTemplate query & update examples
slug: java/spring/jdbc
authors: dmslabbert
tags: [Java, Spring, JDBC]
hide_table_of_contents: true
---

All these examples have been taken (and adapted) from [Spring JdbcTemplate](https://docs.spring.io/spring-framework/reference/data-access/jdbc/core.html#jdbc-JdbcTemplate).

## SELECT

```java
int rowCount = this.jdbcTemplate.queryForObject(
    "select count(*) from t_actor", Integer.class);
```

```java
int countOfActorsNamedJoe = this.jdbcTemplate.queryForObject(
  "select count(*) from t_actor where first_name = ?", Integer.class, "Joe");
```

```java
var id = 123L;
var lastName = this.jdbcTemplate.queryForObject(
    "select last_name from t_actor where id = ?",
    String.class, id);
```

```java {3} showLineNumbers
var id = 123L;
var sql = "select first_name, last_name from t_actor where id = ?";
var actor = jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
    new Actor(rs.getString("first_name"), rs.getString("last_name"));
}, id);
```

```java
var sql = "select first_name, last_name from t_actor";
var actors = this.jdbcTemplate.query(sql, (rs, rowNum) -> {
    new Actor(rs.getString("first_name"), rs.getString("last_name"));
});
```

### Row Mapper

```java
private final RowMapper<Actor> actorRowMapper = (rs, rowNum) -> {
    return new Actor(rs.getString("first_name"), rs.getString("last_name"));
};

public List<Actor> findAllActors() {
    return this.jdbcTemplate.query("select first_name, last_name from t_actor", actorRowMapper);
}
```

## INSERT, UPDATE, and DELETE

```java
this.jdbcTemplate.update(
    "insert into t_actor (first_name, last_name) values (?, ?)",
    "Leonor", "Watling");
```

```java
this.jdbcTemplate.update(
    "update t_actor set last_name = ? where id = ?",
    "Banjo", 5276L);
```

```java
this.jdbcTemplate.update(
    "delete from t_actor where id = ?",
    Long.valueOf(actorId));
```
