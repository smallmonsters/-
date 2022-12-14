# Java相关知识

- [Java相关知识](#java相关知识)
  - [注解](#注解)
    - [案例](#案例)
      - [Bean的校验框架的注解](#bean的校验框架的注解)

## 注解
<!-- 
TODO: 
类似于Typescript的类型检测，让编译器检测错误，还有其他作用吗？？？
可以自定义注解，怎么自定义呢
 -->

### 案例

#### Bean的校验框架的注解

- @Null 被注释的元素必须为null
- @NotNull 被注释的元素不能为null，可以为空字符串
- @AssertTrue 被注释的元素必须为true
- @AssertFalse 被注释的元素必须为false
- @Min(value) 被注释的元素必须是一个数字，其值必须大于等于指定的最小值
- @Max(value) 被注释的元素必须是一个数字，其值必须小于等于指定的最大值
- @DecimalMin(value) 被注释的元素必须是一个数字，其值必须大于等于指定的最小值
- @DecimalMax(value) 被注释的元素必须是一个数字，其值必须小于等于指定的最大值
- @Size(max,min) 被注释的元素的大小必须在指定的范围内。
- @Digits(integer,fraction) 被注释的元素必须是一个数字，其值必须在可接受的范围内
- @Past 被注释的元素必须是一个过去的日期
- @Future 被注释的元素必须是一个将来的日期
- @Pattern(value) 被注释的元素必须符合指定的正则表达式。
- @Email 被注释的元素必须是电子邮件地址
- @Length 被注释的字符串的大小必须在指定的范围内
- @Range 被注释的元素必须在合适的范围内
- @NotEmpty：用在集合类上，不能为null，并且长度必须大于0
- @NotBlank：只能作用在String上，不能为null，而且调用trim()后，长度必须大于0
