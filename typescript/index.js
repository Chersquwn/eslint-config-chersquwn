/**
 * Chersquwn 个人使用的React Eslint规则
 *
 * @fix 表示此配置支持 --fix
 * @warn 警告
 * @off 关闭
 */

module.exports = {
  extends: ['../index.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 覆盖掉 ESLint 的规则
    //
    // 禁止使用未定义的变量
    // @off 接口定义会报错
    'no-undef': 'off',

    // 注释的斜线或 * 后必须有空格
    // @off 三斜线注释会报错
    'spaced-comment': 'off',

    //
    //
    // eslint-plugin-typescript 的规则
    //
    // 函数有重载时，必须将重载成员分组在一起
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // @fix 使用数组类型使用T[]，而不是Array<T>
    '@typescript-eslint/array-type': ['error', 'array'],

    // 禁止使用 "// @ts-ignore" 的注释
    '@typescript-eslint/ban-ts-ignore': 'error',

    // @fix 禁止使用特定类型。 不禁止使用相应的运行时对象
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Array: null,
          Object: 'Use {} instead',
          String: {
            message: 'Use string instead',
            fixWith: 'string'
          }
        }
      }
    ],

    // 变量名必须是 camelcase 风格的，除了对象的属性
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],

    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    '@typescript-eslint/class-name-casing': 'error',

    // 函数和类方法必须指定返回类型
    '@typescript-eslint/explicit-function-return-type': 'error',

    // 必须手动指定类的属性和方法的可访问性（private 或 public）
    '@typescript-eslint/explicit-member-accessibility': 'error',

    // 允许您对类型变量强制执行约定。
    // @off 太严格了，匈牙利命名方式不一定可取
    '@typescript-eslint/generic-type-naming': 'off',

    // 一个缩进必须用四个空格替代
    // @off eslint 已支持
    '@typescript-eslint/indent': 'off',

    // 接口必须以 I 开头
    // @off 没必要限制
    '@typescript-eslint/interface-name-prefix': 'off',

    // @fix 接口和类型字面量中每一行都必须以分号结尾
    '@typescript-eslint/member-delimiter-style': 'error',

    // 私有变量命名必须以下划线开头
    // @off 没必要限制
    '@typescript-eslint/menber-naming': 'off',

    // 属性和方法必须按照排序规则排序
    '@typescript-eslint/member-ordering': 'error',

    // 必须使用 as 进行类型断言
    // @off 没必要限制，在 React 项目中需要限制
    'typescript/no-angle-bracket-type-assertion': 'off',

    // @fix 禁止使用 Array 构造函数来初始化数组，除非指定了泛型，或传入的是单个数字
    '@typescript-eslint/no-array-constructor': 'error',

    // 禁止使用空接口
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false
      }
    ],

    // 禁止使用 any
    // @off 太严格了
    '@typescript-eslint/no-explicit-any': 'off',

    // 禁止将类用作命名空间
    // @off 不推荐
    '@typescript-eslint/no-extraneous-class': 'off',

    // 禁止使用for-in循环遍历数组
    // @off 太严格了
    '@typescript-eslint/no-for-in-array': 'off',

    // 对于初始化为数字，字符串或布尔值的变量或参数，禁止显式类型声明。
    // @off 开启，可以帮助定位错误
    '@typescript-eslint/no-inferrable-types': 'off',

    // 禁止为接口定义构造函数或为类定义新构造函数。
    '@typescript-eslint/no-misused-new': 'error',

    // 禁止使用 namespace 和 module
    // 用 namespace 或 module 来定义模块是以前的用法，现在已经有了 import 和 export
    '@typescript-eslint/no-namespace': 'error',

    // 禁止使用非空断言 后缀运算符！
    '@typescript-eslint/no-non-null-assertion': 'error',

    // 禁止对象文字出现在类型断言表达式中
    // @off 太严格了，在jsx中只能使用 as
    '@typescript-eslint/no-object-literal-type-assertion': 'off',

    // 禁止在给构造函数的参数添加修饰符
    '@typescript-eslint/no-parameter-properties': 'error',

    // 禁止使用require
    // @warn 太严格了，在 node 环境开发中需要使用 requrie 的方式，此处改为警告
    '@typescript-eslint/no-require-imports': 'warn',

    // 禁止给this设置别名，除非是解构或者命名为self
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['self'] // Allow `const self = this`; `[]` by default
      }
    ],

    // 禁止使用三斜线注释
    '@typescript-eslint/no-triple-slash-reference': 'error',

    // 限制 type 的使用
    // @off 没必要限制
    '@typescript-eslint/no-type-alias': 'off',

    // 禁止错误使用命名空间限定符
    // @off 非推荐
    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    // 禁止不必要的类型断言
    // @off 非推荐
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    // 定义过的变量必须使用
    // eslint 原生的 no-unused-vars 无法使用，需要使用 typescript-eslint/no-unused-vars
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],

    // 变量必须先定义后使用
    // @off eslint 原生已支持 no-use-before-define
    '@typescript-eslint/no-unused-vars/no-use-before-define': 'off',

    // 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
    // @off eslint 已开启
    '@typescript-eslint/no-useless-constructor': 'off',

    // 除import语句外，不允许使用require语句
    // @warn 太严格了，node 环境下需要使用 require
    '@typescript-eslint/no-var-requires': 'warn',

    // 使用函数类型而不是带有调用签名的接口
    // @off 非推荐
    '@typescript-eslint/prefer-function-type': 'off',

    // @fix 首选类型文字的接口声明
    '@typescript-eslint/prefer-interface': 'error',

    // 使用 namespace 代替 module
    // @off typescirpt/no-namespace 已经禁用了 namespace 和 module
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // 返回promise的函数必须是异步的
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowedPromiseNames: ['Thenable'],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true
      }
    ],

    // 强制给出array＃sort的compare参数
    '@typescript-eslint/require-array-sort-compare': 'error',

    // 添加两个变量时，操作数必须是数字类型或字符串类型。
    // @off 太严格了
    '@typescript-eslint/restrict-plus-operands': 'off',

    // 类型定义的冒号前后是否需要空格
    // 默认冒号前必须没有空格，冒号后必须有空格
    '@typescript-eslint/type-annotation-spacing': 'error',

    // 如果通过使用union或optional / rest参数可以统一为一个的重载，禁止拆成多个。
    '@typescript-eslint/unified-signatures': 'warn'
  }
};
