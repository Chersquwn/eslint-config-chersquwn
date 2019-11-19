# Eslint-config-chersquwn

## 使用方法

### 安装

```bash
yarn add -D eslint-config-chersquwn
```

### Javascript

在项目根目录下创建`.eslintrc.js`文件，文件内容如下：

```javascript
module.exports = {
  extends: [
    'chersquwn'
  ],
  globals: {
    // 全局变量
  },
  rules: {
    // 要覆盖的规则配置
  }
}
```

### React

在项目根目录下创建`.eslintrc.js`文件，文件内容如下：

```javascript
module.exports = {
  extends: [
    'chersquwn/react'
  ],
  globals: {
    // 全局变量
  },
  rules: {
    // 要覆盖的规则配置
  }
}
```

### TypeScript

在项目根目录下创建`.eslintrc.js`文件，文件内容如下：

```javascript
module.exports = {
  extends: [
    'chersquwn/typescript'
  ],
  globals: {
    // 全局变量
  },
  rules: {
    // 要覆盖的规则配置
  }
}
```
