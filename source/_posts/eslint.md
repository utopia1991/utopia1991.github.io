---
EsLint入门
---

## 介绍

官方地址：http://eslint.org/
EsLint帮助我们检查Javascript编程时的语法错误。比如：在Javascript应用中，你很难找到你漏泄的变量或者方法。EsLint能够帮助我们分析JS代码，找到bug并确保一定程度的JS语法书写的正确性。
EsLint是建立在Esprima(ECMAScript解析架构)的基础上的。Esprima支持ES5.1,本身也是用ECMAScript编写的，用于多用途分析。EsLint不但提供一些默认的规则（可扩展），也提供用户自定义规则来约束我们写的Javascript代码。
EsLint提供以下支持：
- ES6AngularJSJSXStyle检查自定义错误和提示
EsLint提供以下几种校验：
- 语法错误校验不重要或丢失的标点符号，如分号没法运行到的代码块（使用过WebStorm的童鞋应该了解）未被使用的参数提醒漏掉的结束符，如}确保样式的统一规则，如sass或者less检查变量的命名

## 使用

### 一、安装

Npm install gulp-eslint –save-dev
在你的项目目录下，运行：eslint –init将会产生一个.eslintrc的文件，文件内容包含一些校验规则
``` bash
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

其中”semi”和”quotes”是规则名称。EsLint还提供了error的级别，对应数字，数字越高错误的提示越高，如0代码错误不提示、1代表警告提醒但不影响现有编译、2error会抛出错误。
"extends": "eslint:recommended"
Extends是EsLint默认推荐的验证，你可以使用配置选择哪些校验是你所需要的，可以登录npmjs.com查看

### 二、自定义配置EsLint

之前提到你可以关掉所有EsLint默认的验证，自行添加所确切需要的验证规则。为此EsLint提供了2个种方式进行设置：
- Configuration Comments: 在所要验证的文件中，直接使用Javascript注释嵌套配置信息Configuration Files: 使用JavaScript、JSON或YAML文件，比如前面提到的.eslintrc文件，当然你也可以在package.json文件里添加eslintConfig字段，EsLint都会自动读取验证。
开始介绍EsLint的用法
parserOptions

EsLint通过parserOptions，允许指定校验的ecma的版本，及ecma的一些特性
``` bash
{
    "parserOptions": {
        "ecmaVersion": 6, //指定ECMAScript支持的版本，6为ES6
        "sourceType": "module", //指定来源的类型，有两种”script”或”module”
        "ecmaFeatures": {
            "jsx": true//启动JSX
        },
    }
}
```

#### Parser

EsLint默认使用esprima做脚本解析，当然你也切换他，比如切换成babel-eslint解析
``` bash
{
    "parser": "esprima" //默认，可以设置成babel-eslint，支持jsx
}
```

#### Environments

Environment可以预设好的其他环境的全局变量，如brower、node环境变量、es6环境变量、mocha环境变量等
``` bash
{
    "env": {
        "browser": true,
        "node": true
    }
}
```

如果你想使用插件中的环境变量，你可以使用plugins指定，如下
``` bash
{
    "plugins": ["example"],
    "env": {
        "example/custom": true
    }
}
```

#### Globals

指定你所要使用的全局变量，true代表允许重写、false代表不允许重写
``` bash
{
    "globals": {
        "var1": true,
        "var2": false
    }
}
```

#### Plugins

EsLint允许使用第三方插件
``` bash
{
    "plugins": [
        "react"   
    ]
}
```

#### Rules

自定义规则，一般格式：”规则名称”:error级别系数。系数0为不提示(off)、1为警告(warn)、2为错误抛出(error)，可指定范围，如[1,4]
可以包括Strict模式、也可以是code的方式提醒，如符号等。还可以是第三方的校验，如react。
默认校验的地址http://eslint.org/docs/rules/
``` bash
{
    "plugins": [
        "react"
    ],
    "rules": {
         //Javascript code 默认校验
        "eqeqeq": "off", //off = 0
        "curly": "error", //error = 2
        "quotes": ["warn", "double"], //warn = 1
         //使用第三方插件的校验规则
        "react/jsx-quotes": 0
    }
}
```

https://www.npmjs.com/package/eslint-plugin-react ， 此链接是react的eslint使用

### 三、Gulp中使用

``` bash
var eslint = require('gulp-eslint');

gulp.task('validate-eslint',function(){

    return gulp.src(['app/**/*.js']) //指定的校验路径

        .pipe(eslint({configFle:"./.eslintrc"})) //使用你的eslint校验文件

        .pipe(eslint.format())

});
```
