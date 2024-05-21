# JdbcTemplate Examples

All these examples are copied from [Using JdbcTemplate](https://docs.spring.io/spring-framework/reference/data-access/jdbc/core.html#jdbc-JdbcTemplate) on the [Spring](https://spring.io/) website.

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
String lastName = this.jdbcTemplate.queryForObject(
    "select last_name from t_actor where id = ?",
    String.class, 1212L);
```

```java
Actor actor = jdbcTemplate.queryForObject(
    "select first_name, last_name from t_actor where id = ?",
    (resultSet, rowNum) -> {
        Actor newActor = new Actor();
        newActor.setFirstName(resultSet.getString("first_name"));
        newActor.setLastName(resultSet.getString("last_name"));
        return newActor;
    }, 1212L);
```

```java
List<Actor> actors = this.jdbcTemplate.query(
    "select first_name, last_name from t_actor",
    (resultSet, rowNum) -> {
        Actor actor = new Actor();
        actor.setFirstName(resultSet.getString("first_name"));
        actor.setLastName(resultSet.getString("last_name"));
        return actor;
        });
```

### Row Mapper

```java
private final RowMapper<Actor> actorRowMapper = (resultSet, rowNum) -> {
    Actor actor = new Actor();
    actor.setFirstName(resultSet.getString("first_name"));
    actor.setLastName(resultSet.getString("last_name"));
    return actor;
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
