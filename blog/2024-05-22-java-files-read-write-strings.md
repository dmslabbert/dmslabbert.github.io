---
title: Strings File Reading/Writing
description: Reading strings from file & writing strings to file
slug: java/strings/files
authors: dmslabbert
tags: [Java, Files, Path]
hide_table_of_contents: true
---

## Read String from File

```java
var fileName = Path.of("myfile.txt");
var content = Files.readString(fileName);
```

## Write String to File

```java
var fileName = Path.of("myfile.txt");
var content  = "this is a test";
Files.writeString(fileName, content);
```
