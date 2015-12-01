var random = require('./random');

var all = [
  {name: 'A', sex: 'male'}, {name: 'B', sex: 'male'}, {name: 'C', sex: 'female'},
  {name: 'D', sex: 'male'}, {name: 'E', sex: 'male'}, {name: 'F', sex: 'male'},
  {name: 'G', sex: 'male'}, {name: 'H', sex: 'male'}, {name: 'I', sex: 'male'},
  {name: 'J', sex: 'male'}, {name: 'K', sex: 'male'}, {name: 'L', sex: 'male'},
  {name: 'M', sex: 'male'}, {name: 'N', sex: 'male'}, {name: 'O', sex: 'male'},
  {name: 'P', sex: 'male'}, {name: 'Q', sex: 'female'}, {name: 'R', sex: 'male'},
  {name: 'S', sex: 'male'}, {name: 'T', sex: 'female'}, {name: 'U', sex: 'male'},
  {name: 'V', sex: 'male'}, {name: 'W', sex: 'female'}, {name: 'X', sex: 'male'},
  {name: 'Y', sex: 'female'}, {name: 'Z', sex: 'male'}
];

var size = +process.argv[2] || 2;
var isSexSensitive = process.argv[3];
var isForceSizeAsMemberCountInGroup = process.argv[4]

console.log('- 结果:')
console.log('-', random(all, size, isSexSensitive, isForceSizeAsMemberCountInGroup));

console.log();
console.log('- Usage: 默认 size 为组的数量，可以强制为每组的人数')
console.log('-   分成多少组: node test <team> <size>');
console.log('-   区分性别，多少人为一组: node test <team> <size> true');
console.log('-   不区别性别，多少人为一组：node test <team> <size> false true');
