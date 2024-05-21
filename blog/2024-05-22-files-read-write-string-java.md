# Files - Read & Write Strings in Java

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
