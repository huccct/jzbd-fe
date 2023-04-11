module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新增功能' },
    { value: 'fix', name: 'fix:      修复 bug' },
    { value: 'docs', name: 'docs:     文档更新' },
    { value: 'style', name: 'style:    代码格式（不影响功能，例如空格、分号等格式修正）' },
    { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     增加测试' },
    {
      value: 'build',
      name: 'build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）'
    },
    { value: 'ci', name: 'ci:       修改 CI 配置、脚本' },
    { value: 'chore', name: 'chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
    { value: 'revert', name: 'revert:   回滚 commit' },
    { value: 'wip', name: 'wip:      开发中' }
  ],
  scopes: [
    { name: 'components', description: '组件相关' },
    { name: 'hooks', description: 'hook 相关' },
    { name: 'utils', description: 'utils 相关' },
    { name: 'element-ui', description: '对 element-ui 的调整' },
    { name: 'styles', description: '样式相关' },
    { name: 'deps', description: '项目依赖' },
    { name: 'config', description: '配置相关' },
    { name: 'other', description: '其他修改' },
    { name: '*', description: '全局修改' },
    { name: 'custom', description: '以上都不是？我要自定义' }
  ].map(({ name, description }) => {
    return { name: `${name.padEnd(30)} (${description})` }
  }),

  // 步骤消息提示
  messages: {
    type: '确保本次提交遵循规范！\n选择你要提交的类型:',
    scope: '\n选择一个scope(可选):',
    customScope: '请输入修改范围(可选):',
    subject: '请输入变更描述(必填):',
    body: '填写更加详细的变更描述(可选):',
    breaking: '非兼容性说明 (可选):\n',
    footer: '请输入要关闭的 ISSUES(可选):',
    confirmCommit: '确认提交？(Y/N)'
  },
  // 允许自定义范围
  allowCustomScopes: true,
  // 要跳过的问题
  skipQuestions: ['footer'],
  allowBreakingChanges: ['feat', 'fix'],
  // subject文字默认值是72
  subjectLimit: 100
}
