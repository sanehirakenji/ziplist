const first = ['a', 'b', 'c'];
const second = [1, 2, 3];

function zipList(list1, list2) {
  const x = [];
  for (let i = 0; i < list1.length; i++) {
    x.push(list1[i]);
    x.push(list2[i]);
  }
  return x;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(first, second));
console.log(zipListTheSimpleWay(first, second));
