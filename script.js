console.log("start");

let base = [];
let first = [];
let second = [];
let third = [];
for (let i = 0; i < 21; i++) {
  base.push(i + 1);
}
console.log("printing base");
console.log(base);

function ordering(num) {
  base.length = 0;

  if (num == 1) {
    base.push(...second);
    base.push(...first);
    base.push(...third);
  } else if (num == 2) {
    base.push(...first);
    base.push(...second);
    base.push(...third);
  } else if (num == 3) {
    base.push(...first);
    base.push(...third);
    base.push(...second);
  } else console.log("the number entered is wrong");
  return base;
}

function grouping(arr, num) {
  arr.length = 0;
  let start;
  if (num == 1) {
    start = 0;
  } else if (num == 2) {
    start = 1;
  } else if (num == 3) {
    start = 2;
  } else {
    console.log(`The number you entered is wrong ❌`);
  }
  for (let i = start; i < 21; i += 3) {
    arr.push(base[i]);
  }
  return arr;
}

function printing() {
  let answer;
  for (let i = 0; i < 3; i++) {
    first = grouping(first, 1);
    second = grouping(second, 2);
    third = grouping(third, 3);

    console.log(first);
    console.log(second);
    console.log(third);

    answer = prompt("choose the group");
    ordering(answer);

    console.log(`================================================`);
  }

  const chosenNumber = Math.floor(first.length - first.length / 2);
  if (answer == 1) {
    console.log(first[chosenNumber]);
  } else if (answer == 2) {
    console.log(second[chosenNumber]);
  } else if (answer == 3) {
    console.log(third[chosenNumber]);
  } else console.log(`The number you entered is wrong ❌`);
}

printing();
