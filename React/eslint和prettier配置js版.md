# eslint和prettier配置js版

- [eslint和prettier配置js版](#eslint和prettier配置js版)
  - [eslint 配置](#eslint-配置)
    - [安装依赖](#安装依赖)
    - [初始化](#初始化)
    - [忽略文件](#忽略文件)
    - [使用react hook](#使用react-hook)
    - [无法检测](#无法检测)
    - [修复命令](#修复命令)
    - [rules](#rules)
  - [prettier配置](#prettier配置)
    - [安装prettier](#安装prettier)
    - [.prettierrc.js](#prettierrcjs)
    - [vscode配置](#vscode配置)
  - [eslint和prettier冲突](#eslint和prettier冲突)

## eslint 配置

### 安装依赖

> yarn add babel-eslint eslint-plugin-react eslint-plugin-import eslint --dev

### 初始化

> ./node_modules/eslint/bin/eslint.js --init

### 忽略文件

```json
// .eslintignore
.eslintrc.js
node_modules
```

### 使用[react hook](https://www.npmjs.com/package/eslint-plugin-react-hooks)

> yarn add eslint-plugin-react-hooks --dev
> .eslintrc.js："plugin:react-hooks/recommended"替换"plugin:react/recommended"
> .eslintrc.js："plugins: ['react-hook'],"替换" plugins: ['react'],"

### 无法检测

- Parsing error: Unexpected token

```js
// .eslintrc.js
"parser": "babel-eslint"
```

- Parsing error: require() of ES Module

原因parser使用了babel-eslint，改为使用@babel/eslint-parser

- Parsing error: No Babel config file detected

方法一：生成一个babel配置文件：.babelrc
方法二：

```js
// .eslintrc.js 添加配置
"parserOptions": {
    "requireConfigFile": false
  },

```

- Parsing error: This experimental syntax requires enabling one of the following parser plugin(s): "jsx", "flow", "typescript"

> yarn add @babel/preset-react --dev

```js
// .eslintrc.js 添加配置
"parserOptions": {
   "babelOptions": {
      "presets": ["@babel/preset-react"]
    },
  },

```

### 修复命令

```json
{
  "scripts": {
    "lint": "eslint --ext .js --ext .jsx src"
  }
}
```

### rules

```js
 /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  "rules": {
    "no-cond-assign": 2,
    "no-console": [
      "error", {
        "allow": ["log", "warn", "error", "info"]
      }
    ],
    // 禁止 function 定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止重复的 case 标签
    "no-duplicate-case": 2,
    // 禁止空语句块
    "no-empty": 2,
    // 禁止对 catch 子句的参数重新赋值
    "no-ex-assign": 2,
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast": 2,
    // 禁止不必要的括号 //(a * b) + c;//报错
    "no-extra-parens": 0,

    //强制所有控制语句使用一致的括号风格
    "curly": [2, "all"],
    // 禁止 catch 子句的参数与外层作用域中的变量同名
    "no-catch-shadow": 0,
    // 不允许标签与变量同名
    "no-label-var": 2,
    // 禁用特定的全局变量
    "no-restricted-globals": 2,
    // 禁止 var 声明 与外层作用域的变量同名
    "no-shadow": 0,
    // 禁止覆盖受限制的标识符
    "no-shadow-restricted-names": 2,
    // 禁止将变量初始化为 undefined
    "no-undef-init": 2,
    // 禁止将 undefined 作为标识符
    "no-undefined": 0,
    // 不允许在变量定义之前使用它们
    "no-use-before-define": 0,
    //////////////
    // 风格指南 //
    //////////////
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    "array-bracket-spacing": [2, "never"],
    // 禁止或强制在单行代码块中使用空格(禁用)
    "block-spacing": [1, "never"],
    //强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
    // if while function 后面的{必须与if在同一行，java风格。
    "brace-style": [2, "1tbs", {
      "allowSingleLine": true
    }],
    // 控制逗号前后的空格
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    // http://eslint.org/docs/rules/comma-style
    "comma-style": [2, "last"],
    //"SwitchCase" (默认：0) 强制 switch 语句中的 case 子句的缩进水平
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    "computed-property-spacing": [2, "never"],
    // 用于指统一在回调函数中指向this的变量名，箭头函数中的this已经可以指向外层调用者，应该没卵用了
    // e.g [0,"self"] 指定只能 var that = this. self不能指向其他任何值，this也不能赋值给self以外的其他值
    "consistent-this": [2, "self","that","_self","_that","me","_this"],
    // 强制使用命名的 function 表达式
    "func-names": 0,
    // 文件末尾强制换行
    "eol-last": 2,
    "indent": [
      "error", 2
    ],
    //要求或禁止在函数标识符和其调用之间有空格
    "func-call-spacing": 2,
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }],
    // 要求在注释周围有空行 ( 要求在块级注释之前有一空行)
    "lines-around-comment": [2, {
      "beforeBlockComment": true
    }],
    "func-style": 0,
    // 强制回调函数最大嵌套深度 5层
    "max-nested-callbacks": [2, 5],
    // 禁止使用指定的标识符
    "id-blacklist": 0,
    // 强制标识符的最新和最大长度
    "id-length": 0,
    // 要求标识符匹配一个指定的正则表达式
    "id-match": 0,
    // 强制在 JSX 属性中一致地使用双引号或单引号
    "jsx-quotes": 0,
    // 强制在关键字前后使用一致的空格 (前后腰需要)
    "keyword-spacing": 2,
    // 强制一行的最大长度
    "max-len": [2, 200, { "ignoreUrls": true }],
    // 强制最大行数
    "max-lines": 0,
    // 强制 function 定义中最多允许的参数数量
    "max-params": [1, 5],
    // 强制 function 块最多允许的的语句数量
    "max-statements": [1, 200],
    // 强制每一行中所允许的最大语句数量
    "max-statements-per-line": 0,
    // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
    "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": false
    }],
    // 要求调用无参构造函数时有圆括号
    "new-parens": 2,
    // 要求或禁止 var 声明语句后有一行空行
    "newline-after-var": 0,
    // 禁止使用 Array 构造函数
    "no-array-constructor": 2,
    // 禁用按位运算符
    "no-bitwise": 0,
    // 要求 return 语句之前有一空行
    "newline-before-return": 0,
    // 要求方法链中每个调用都有一个换行符
    "newline-per-chained-call": 1,
    // 禁用 continue 语句
    "no-continue": 0,
    // 禁止在代码行后使用内联注释
    "no-inline-comments": 0,
    // 禁止 if 作为唯一的语句出现在 else 语句中
    "no-lonely-if": 0,
    // 禁止混合使用不同的操作符
    "no-mixed-operators": 0,
    //禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": [
      "error", "smart-tabs"
    ],
    // 不允许多个空行
    "no-multiple-empty-lines": [2, {
      "max": 2
    }],
    // 不允许否定的表达式
    "no-negated-condition": 0,
    // 不允许使用嵌套的三元表达式
    "no-nested-ternary": 0,
    // 禁止使用 Object 的构造函数
    "no-new-object": 2,
    // 禁止使用一元操作符 ++ 和 --
    "no-plusplus": 0,
    // 禁止使用特定的语法
    "no-restricted-syntax": 0,
    // 禁止 function 标识符和括号之间出现空格
    "no-spaced-func": 2,
    // 不允许使用三元操作符
    "no-ternary": 0,
    // 禁用行尾空格
    "no-trailing-spaces": 2,
    // 禁止标识符中有悬空下划线_bar
    "no-underscore-dangle": 0,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-unneeded-ternary": 2,
    // 禁止属性前有空白
    "no-whitespace-before-property": 2,
    // 要求或禁止在 var 声明周围换行
    "one-var-declaration-per-line": 0,
    // 要求或禁止在可能的情况下要求使用简化的赋值操作符
    "operator-assignment": 0,
    // 强制操作符使用一致的换行符
    "operator-linebreak": [2, "after", {
      "overrides": {
        "?": "before",
        ":": "before"
      }
    }],
    // 要求或禁止块内填充
    "padded-blocks": 0,
    // 要求对象字面量属性名称用引号括起来
    "quote-props": 0,
    // 强制使用一致的反勾号、双引号或单引号
    "quotes": [2, "single", "avoid-escape"],
    // 要求使用 JSDoc 注释
    "require-jsdoc": 0,
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    // "semi": [2, "always"],
    // 强制分号之前和之后使用一致的空格
    "semi-spacing": 2,
    // 要求同一个声明块中的变量按顺序排列
    "sort-vars": 0,
    // 强制在块之前使用一致的空格
    "space-before-blocks": [2, "always"],
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [2, "always"],
    // 强制在圆括号内使用一致的空格
    "space-in-parens": [2, "never"],
    // 要求操作符周围有空格
    "space-infix-ops": 2,
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": [2, {
      "words": true,
      "nonwords": false
    }],
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": [2, "always", {
      "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!"]
    }],
    // 要求或禁止 Unicode BOM
    "unicode-bom": 2,
    // 要求正则表达式被括号括起来
    "wrap-regex": 0,
    //禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中
    "no-case-declarations": ["warn"],

    //////////////
    // ES6.相关 //
    //////////////
    // 要求箭头函数体使用大括号
    "arrow-body-style": 2,
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 2,
    "arrow-spacing": [2, {
      "before": true,
      "after": true
    }],
    // 强制 generator 函数中 * 号周围使用一致的空格
    "generator-star-spacing": [2, {
      "before": true,
      "after": true
    }],
    // 禁止修改类声明的变量
    "no-class-assign": 2,
    // 不允许箭头功能，在那里他们可以混淆的比较
    "no-confusing-arrow": 0,
    // 禁止修改 const 声明的变量
    "no-const-assign": 2,
    // 禁止类成员中出现重复的名称
    "no-dupe-class-members": 2,
    // 每个模块只能使用一个import
    "no-duplicate-imports": 2,
    // 禁止 Symbolnew 操作符和 new 一起使用
    "no-new-symbol": 2,
    // 允许指定模块加载时的进口
    "no-restricted-imports": 0,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    "no-this-before-super": 2,
    // 禁止不必要的计算性能键对象的文字
    "no-useless-computed-key": 0,
    // 要求使用 let 或 const 而不是 var
    "no-var": 1,
    // 要求或禁止对象字面量中方法和属性使用简写语法
    "object-shorthand": 0,
    // 要求使用箭头函数作为回调
    "prefer-arrow-callback": 0,
    // 要求使用 const 声明那些声明后不再被修改的变量
    "prefer-const": 0,
    // 要求在合适的地方使用 Reflect 方法
    "prefer-reflect": 0,
    // 要求使用扩展运算符而非 .apply()
    "prefer-spread": 0,
    // 要求使用模板字面量而非字符串连接
    "prefer-template": 0,
    // Suggest using the rest parameters instead of arguments
    "prefer-rest-params": 0,
    // 要求generator 函数内有 yield
    "require-yield": 2,
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    "template-curly-spacing": 1,
    // 强制在 yield* 表达式中 * 周围使用空格
    "yield-star-spacing": 2,



    // 强制使用一致的换行风格
    "linebreak-style": [2, "unix"],
    //在JSX中强制布尔属性符号
    "react/jsx-boolean-value": 2,
    //在JSX中验证右括号位置
    // "react/jsx-closing-bracket-location": 1,
    //在JSX属性和表达式中加强或禁止大括号内的空格。
    "react/jsx-curly-spacing": [2, {
      "when": "never",
      "children": true
    }],
    //在数组或迭代器中验证JSX具有key属性
    "react/jsx-key": 2,
    // 限制JSX中单行上的props的最大数量
    "react/jsx-max-props-per-line": [1, {
      "maximum": 5
    }],
    //防止在JSX中重复的props
    "react/jsx-no-duplicate-props": 2,
    //  //防止使用未包装的JSX字符串
    // "react/jsx-no-literals": 0,
    //在JSX中禁止未声明的变量
    "react/jsx-no-undef": 2,
    //为用户定义的JSX组件强制使用PascalCase
    "react/jsx-pascal-case": 0,
    //防止反应被错误地标记为未使用
    "react/jsx-uses-react": 2,
    //防止在JSX中使用的变量被错误地标记为未使用
    "react/jsx-uses-vars": 2,
    //防止在componentDidMount中使用setState
    "react/no-did-mount-set-state": 2,
    //防止在componentDidUpdate中使用setState
    "react/no-did-update-set-state": 2,
    //防止使用未知的DOM属性
    "react/no-unknown-property": 2,
    //为React组件强制执行ES5或ES6类
    "react/prefer-es6-class": 2,
    //防止在React组件定义中丢失props验证
    // "react/prop-types": 1,
    //使用JSX时防止丢失React
    "react/react-in-jsx-scope": 2,
    //防止没有children的组件的额外结束标签
    "react/self-closing-comp": 0,
    //禁止不必要的bool转换
    // "no-extra-boolean-cast": 0,
    //防止在数组中遍历中使用数组key做索引
    // "react/no-array-index-key": 0,
    //不使用弃用的方法
    "react/no-deprecated": 2,
    //在JSX属性中强制或禁止等号周围的空格
    "react/jsx-equals-spacing": 2,
    "react/jsx-filename-extension": [2, {
      "extensions": [".js", ".jsx"]
    }],
    // 禁止未使用的变量
    "no-unused-vars": 0,
  }
```

## prettier配置

### 安装prettier

> yarn add prettier --dev

### .prettierrc.js

```js
module.exports = {
  // 1.一行代码的最大字符数，默认是80(printWidth: <int>)
  printWidth: 80,
  // 2.tab宽度为2空格(tabWidth: <int>)
  tabWidth: 2,
  // 3.是否使用tab来缩进，我们使用空格(useTabs: <bool>)
  useTabs: false,
  // 4.结尾是否添加分号，false的情况下只会在一些导致ASI错误的其工况下在开头加分号，我选择无分号结尾的风格(semi: <bool>)
  semi: false,
  // 5.使用单引号(singleQuote: <bool>)
  singleQuote: true,
  // 6.object对象中key值是否加引号（quoteProps: "<as-needed|consistent|preserve>"）as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
  quoteProps: 'as-needed',
  // 7.在jsx文件中的引号需要单独设置（jsxSingleQuote: <bool>）
  jsxSingleQuote: false,
  // 8.尾部逗号设置，es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况，需要node8和es2017以上的环境。（trailingComma: "<es5|none|all>"）
  trailingComma: 'es5',
  // 9.object对象里面的key和value值和括号间的空格(bracketSpacing: <bool>)
  bracketSpacing: true,
  // 10.jsx标签多行属性写法时，尖括号是否另起一行(jsxBracketSameLine: <bool>)
  jsxBracketSameLine: false,
  // 11.箭头函数单个参数的情况是否省略括号，默认always是总是带括号（arrowParens: "<always|avoid>"）
  arrowParens: 'always',
  // 12.range是format执行的范围，可以选执行一个文件的一部分，默认的设置是整个文件（rangeStart: <int>  rangeEnd: <int>）
  rangeStart: 0,
  rangeEnd: Infinity,
  // 18. vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
  vueIndentScriptAndStyle: false,
  // 19.    endOfLine: "<lf|crlf|cr|auto>" 行尾换行符,默认是lf,
  endOfLine: 'lf',
  // 20.embeddedLanguageFormatting: "off",默认是auto,控制被引号包裹的代码是否进行格式化
  embeddedLanguageFormatting: 'off',
}

// 14. requirePragma: <bool>,格式化有特定开头编译指示的文件 比如下面两种
/**
 * @prettier
 */
// or
/**
 * @format
 */

// 15.insertPragma: <bool> 自当插入pragma到已经完成的format的文件开头

// 16. proseWrap: "<always|never|preserve>" 文章换行,默认情况下会对你的markdown文件换行进行format会控制在printwidth以内

// 13. 指定parser,因为pretter会自动选择,所以一般不用指定(parser: "<string>"  parser: require("./my-parser"))
// "babel" (via @babel/parser) Named "babylon" until v1.16.0
// "babel-flow" (same as "babel" but enables Flow parsing explicitly to avoid ambiguity) First available in v1.16.0
// "babel-ts" (similar to "typescript" but uses Babel and its TypeScript plugin) First available in v2.0.0
// "flow" (via flow-parser)
// "typescript" (via @typescript-eslint/typescript-estree) First available in v1.4.0
// "espree" (via espree) First available in v2.2.0
// "meriyah" (via meriyah) First available in v2.2.0
// "css" (via postcss-scss and postcss-less, autodetects which to use) First available in v1.7.1
// "scss" (same parsers as "css", prefers postcss-scss) First available in v1.7.1
// "less" (same parsers as "css", prefers postcss-less) First available in v1.7.1
// "json" (via @babel/parser parseExpression) First available in v1.5.0
// "json5" (same parser as "json", but outputs as json5) First available in v1.13.0
// "json-stringify" (same parser as "json", but outputs like JSON.stringify) First available in v1.13.0
// "graphql" (via graphql/language) First available in v1.5.0
// "markdown" (via remark-parse) First available in v1.8.0
// "mdx" (via remark-parse and @mdx-js/mdx) First available in v1.15.0
// "html" (via angular-html-parser) First available in 1.15.0
// "vue" (same parser as "html", but also formats vue-specific syntax) First available in 1.10.0
// "angular" (same parser as "html", but also formats angular-specific syntax via angular-estree-parser) First available in 1.15.0
// "lwc" (same parser as "html", but also formats LWC-specific syntax for unquoted template attributes) First available in 1.17.0
// "yaml" (via yaml and yaml-unist-parser) First available in 1.14.0

// 17. htmlWhitespaceSensitivity: "<css|strict|ignore>" html中的空格敏感性

// 针对不同文件或目录设置不同配置的方法,json格式例子
// {
//   "semi": false,
//   "overrides": [
//     {
//       "files": "*.test.js",
//       "options": {
//         "semi": true
//       }
//     },
//     {
//       "files": ["*.html", "legacy/**/*.js"],
//       "options": {
//         "tabWidth": 4
//       }
//     }
//   ]
// }


```

### vscode配置

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  // 每次代码保存执行的操作
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // 每次保存的时候将代码按eslint格式进行修复
    "source.fixAll.markdownlint": true // 每次保存格式化markdown
  },
  // "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true, // 保存自动格式化
  // eslint检查文件
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue"
  ],
  "editor.tabSize": 2,
}
```

## eslint和prettier冲突

<https://juejin.cn/post/7012160233061482532>
