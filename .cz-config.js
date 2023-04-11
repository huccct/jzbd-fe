'use strict';
module.exports = {
  types: [
    { value: 'feat', name: '新增：新增功能、页面' },
    { value: 'fix', name: 'bug：修复某个bug' },
    { value: 'docs', name: '文档：修改增加文档、注释' },
    { value: 'style', name: '格式：不影响代码运行的变动、空格、格式化等等' },
    { value: 'ui', name: 'ui修改：布局、css样式等等' },
    { value: 'hotfix', name: 'bug：修复线上紧急bug' },
    { value: 'build', name: '测试：添加一个测试' },
    { value: 'refactor', name: '重构：代码重构，未新增任何功能和修复任何bug' },
    { value: 'revert', name: '回滚：代码回退到某个版本节点' },
    { value: 'perf', name: '优化：提升性能、用户体验等' },
    { value: 'ci', name: '自动化构建：对CI/CD配置文件和脚本的更改' },
    { value: 'chore', name: '其他修改：不修改src目录或测试文件的修改' },
    { value: 'test', name: '测试：包括单元测试、集成测试' },
    { value: 'update', name: '更新：普通更新' },
  ],
  // 交互提示信息
  messages: {
    type: '选择一种你的提交类型：',
    scope: '选择一个影响范围（可选）:',
    customScope: '表示此更改的范围：',
    subject: '短说明：\n',
    body: '长说明，使用"|"符号换行（可选）：\n',
    breaking: '非兼容性说明（可选）：\n',
    footer: '关闭的issue，例如：#31, #34（可选）：\n',
    confirmCommit: '确定提交说明?（yes/no）',
  },
  allowCustomScopes: true,
  // 设置选择了那些type，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix', 'ui', 'hotfix', 'update', 'perf'],
  subjectLimit: 100,
};
