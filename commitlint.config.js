/*
"off"或者0:关闭规则 "warn"或1:开启规则抛出警告 "error"或2:开启规则抛出错误
*/
module.exports = {
  extends: ['cz'],
  rules: {
    'body-leading-blank': [2, 'always'], // body上面有换行
    'footer-leading-blank': [1, 'always'], // footer上面有换行
    'header-max-length': [2, 'always', 108], // header上最大108字符
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能、页面
        'fix', // 修补bug
        'docs', // 修改文档、注释
        'style', // 格式：不影响代码运行的变动、空格、格式化等等
        'ui', // ui修改：布局、css样式等等
        'hotfix', // 修复线上紧急bug
        'build', // 改变构建流程，新增依赖库、工具等（例如:修改webpack）
        'refactor', // 代码重构，未新增任何功能和修复任何bug
        'revert', // 回滚到上一个版本
        'perf', // 优化：提升性能、用户体验等
        'ci', // 对CI/CD配置文件和脚本的更改
        'chore', // 其他不修改src或测试文件的更改
        'test', // 测试用例：包括单元测试、集成测试
        'update', // 更新：普通更新
      ],
    ],
  },
};
