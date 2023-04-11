module.exports = {
  tabWidth: 2, // tab缩进大小,默认为2
  useTabs: false, // 使用tab缩进，默认false
  semi: false, // 使用分号, 默认true
  singleQuote: true, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  proseWrap: 'preserve', // "always" - 当超出print width（上面有这个参数）时就折行 "never" - 不折行 "perserve" - 按照文件原样折行
  trailingComma: 'none', // 对象最后一项默认格式化会加逗号
  arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 avoid(能省略括号的时候就省略)| always(总是有括号)
  bracketSpacing: true, // 对象中的空格 默认true{ foo: bar } false:{foo: bar}
  printWidth: 100 // 一行多长，超过的会换行
}
