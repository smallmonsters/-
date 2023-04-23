# xml标签

- [xml标签](#xml标签)
  - [attr](#attr)
    - [常见的attr标签属性](#常见的attr标签属性)
    - [示例](#示例)

## attr

attr 标签用于定义自定义属性。

### 常见的attr标签属性

- format: 定义属性的数据类型，可以是 string、integer、float、boolean、color、referenceId、fraction(百分比) 等。
- name: 属性名称。
- description: 属性描述，通常用于自动生成文档或工具提示。
- enum: 定义枚举类型的属性，该属性包含一个或多个值。

```xml
<attr name="textAlignment">
    <enum name="left" value="0" />
    <enum name="center" value="1" />
    <enum name="right" value="2" />
</attr>

```

- flag: 定义标志类型的属性，该属性包含一个或多个标志值

```xml
<attr name="state">
    <flag name="selected" value="0x0001" />
    <flag name="pressed" value="0x0002" />
    <flag name="focused" value="0x0004" />
</attr>

```

- reference: 定义引用类型的属性，该属性引用其他资源

```xml
<attr name="image" format="reference" />

```

- min 和 max: 定义数值类型的属性的最小和最大值

```xml
<attr name="progress" format="integer" min="0" max="100" />

```

- required: 定义属性是否为必需属性。如果设置为 true，则在使用该自定义 View 或样式时必须指定该属性

```xml
<attr name="text" format="string" required="true" />

```

### 示例

```xml
<declare-styleable name="CustomView">
    <attr name="background_color" format="color" />
    <attr name="text_color" format="color" />
    <attr name="text_size" format="dimension" />
    <attr name="font_family" format="string" />
    <attr name="custom_enum" format="enum">
        <enum name="option_1" value="0" />
        <enum name="option_2" value="1" />
        <enum name="option_3" value="2" />
    </attr>
    <attr name="custom_flag" format="integer">
        <flag name="flag_1" value="1" />
        <flag name="flag_2" value="2" />
        <flag name="flag_3" value="4" />
        <flag name="flag_4" value="8" />
    </attr>
    <attr name="custom_reference" format="reference" />
    <attr name="custom_min_max" format="integer">
        <min value="0" />
        <max value="100" />
    </attr>
    <attr name="required_attribute" format="string" required="true" />
</declare-styleable>

```
