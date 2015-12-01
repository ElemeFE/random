var random = function() {

  return function random(team, size, isSexSensitive, isForceSizeAsMemberCountInGroup) {
    return didive(split(team), size, isSexSensitive, isForceSizeAsMemberCountInGroup);
  };

  function split(team) {
    return team.reduce(function(result, current) {
      result[current.sex].push(current);
      return result;
    }, { female: [], male: [], length: team.length })
  }

  function didive(team, size, isSexSensitive, isForceSizeAsMemberCountInGroup) {
    var female = team.female;
    var male = team.male;

    // 当选择 sex sensitive 的时候，我们大多数情况希望以每组多少人来算
    // 比如分房，每组是 2 人，所以 size 在这里的设定不是「多少组」
    if(isSexSensitive) {
      return loop(female, Math.ceil(female.length / size))
        .concat(loop(male, Math.ceil(male.length / size)));
    }

    // 可以强制按每组多少人来计算，而不区分性别
    if(isForceSizeAsMemberCountInGroup) size = Math.ceil(team.length / size);

    var females = loop(female, size);
    var males = loop(male, size).reverse();

    if(females.length - males.length < 0) females = [males, males = females][0];
    return females.map(function(group, i) {
      return group.concat(males[i] || []);
    });
  }

  function loop(arr, size){
    var i = 0;
    var result = [];

    while(arr.length) {
      var index = Math.floor(Math.random() * arr.length);
      if(!result[i]) result[i] = [];
      result[i].push(arr.splice(index, 1)[0]);
      if(++i === size) i = 0;
    }

    return result;
  }
}();

// node
try{
  process.argv;
  module.exports = random;
} catch(e) {};
