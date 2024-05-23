---
title: Retrieving Values From Properties File
description: How to retrieve values from the application.properties file
slug: java/spring/value
authors: dmslabbert
tags: [Java, Spring]
hide_table_of_contents: true
---

How to retrieve values from the application.properties file

## application.properties

```
mode=development
```

## myClass.java

```java
@Value(value = "${mode}")
private String mode;
```