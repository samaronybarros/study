// var a = 2
// var b = 3
function compare(a, b) {
  console.log("a:", a, "b:", b); // console.log("a: 2 b: 3")

  if (typeof a === "number" && typeof b === "number") {
    if (a === b) {
      return "a igual a b";
    } else if (a > b) {
      return "a maior que b";
    } else {
      return "a menor que b";
    }
  }

  return;
}

// console.log(compare(2, 3)); // console.log("a menor que b")
// console.log(compare(3, 3));
// console.log(compare(4, 3));
// console.log(compare(4, "bunda"));

// console.log(true !== true);

var a = 2;
// console.log("2" === 2);
// console.log("2");
// console.log(2);

// =    | X
// ==   | !=
// ===  | !==

function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// console.log(isArrayEqual([2, 3, 4], [2, 3, 4]));
// console.log(isArrayEqual([2, 3, 4], [2, 4, 3]));
// console.log(isArrayEqual([], []));
// console.log(
//   isArrayEqual(
//     [false, false, false, false, false],
//     [false, false, false, false, false]
//   )
// );
// console.log(isArrayEqual([1, 2], ["1", "2"]));

function foo() {
  // console.log(arguments);
}

foo();
foo(4);
foo(4, 5);
foo(4, 5, 6, 7, 8, 9);

function sumArgs() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }

  return sum;
}

// console.log("sum:", sumArgs());
// console.log("sum:", sumArgs(4));
// console.log("sum:", sumArgs(4, 5));
// console.log("sum:", sumArgs(4, 5, 6, 7, 8, 9));

var matrix = [
  [0, 6, 12, 18, 24, 30, 36],
  [1, 7, 13, 19, 25, 31, 37],
  [2, 8, 14, 20, 26, 31, 38],
  [3, 9, 15, 21, 27, 33, 39],
  [4, 10, 16, 22, 28, 34, 40],
  [5, 11, 17, 23, 29, 35, 41],
];

for (var i = 0; i < matrix.length; i++) {
  // console.log("-->", matrix[i]);
  var row = matrix[i];
  for (var j = 0; j < row.length; j++) {
    // console.log("----->", matrix[i][j]);
    // console.log("BUNDAAAAAAAAA");
    // console.log(`[${i}, ${j}, ${matrix[i][j]}],`);
  }
}

var mapPositionByIndex = [
  { value: 0, col: 0, row: 0 },
  { value: 6, col: 1, row: 0 },
  { value: 12, col: 2, row: 0 },
  { value: 18, col: 3, row: 0 },
  { value: 24, col: 4, row: 0 },
  { value: 30, col: 5, row: 0 },
  { value: 36, col: 6, row: 0 },
  { value: 1, col: 0, row: 1 },
  { value: 7, col: 1, row: 1 },
  { value: 13, col: 2, row: 1 },
  { value: 19, col: 3, row: 1 },
  { value: 25, col: 4, row: 1 },
  { value: 31, col: 5, row: 1 },
  { value: 37, col: 6, row: 1 },
  { value: 2, col: 0, row: 2 },
  { value: 8, col: 1, row: 2 },
  { value: 14, col: 2, row: 2 },
  { value: 20, col: 3, row: 2 },
  { value: 26, col: 4, row: 2 },
  { value: 32, col: 5, row: 2 },
  { value: 38, col: 6, row: 2 },
  { value: 3, col: 0, row: 3 },
  { value: 9, col: 1, row: 3 },
  { value: 15, col: 2, row: 3 },
  { value: 21, col: 3, row: 3 },
  { value: 27, col: 4, row: 3 },
  { value: 33, col: 5, row: 3 },
  { value: 39, col: 6, row: 3 },
  { value: 4, col: 0, row: 4 },
  { value: 10, col: 1, row: 4 },
  { value: 16, col: 2, row: 4 },
  { value: 22, col: 3, row: 4 },
  { value: 28, col: 4, row: 4 },
  { value: 34, col: 5, row: 4 },
  { value: 40, col: 6, row: 4 },
  { value: 5, col: 0, row: 5 },
  { value: 11, col: 1, row: 5 },
  { value: 17, col: 2, row: 5 },
  { value: 23, col: 3, row: 5 },
  { value: 29, col: 4, row: 5 },
  { value: 35, col: 5, row: 5 },
  { value: 41, col: 6, row: 5 },
];

var possibilitiesToWin = [
  [0, 7, 14, 21],
  [1, 8, 15, 22],
  [2, 9, 16, 23],
  [3, 8, 13, 18],
  [4, 9, 14, 19],
  [5, 10, 15, 20],
  [6, 13, 20, 27],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 14, 19, 24],
  [10, 15, 20, 25],
  [11, 16, 21, 26],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
  [14, 21, 28, 35],
  [15, 20, 25, 30],
  [16, 21, 26, 31],
  [17, 22, 27, 32],
  [18, 25, 32, 39],
  [19, 26, 33, 40],
  [20, 27, 34, 41],
  [21, 26, 31, 36],
  [22, 27, 32, 37],
  [23, 28, 33, 38],
];

var slotsInDiagonal = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "r", "", "", ""],
  ["", "", "r", "y", "", "", ""],
  ["y", "r", "r", "y", "", "", ""],
  ["r", "y", "y", "y", "", "", ""],
];

function findInMapPositionByIndex(index) {
  for (var i = 0; i < mapPositionByIndex.length; i++) {
    if (mapPositionByIndex[i][2] === index) {
      mapPositionByIndex[i][2];
    }
  }
}

// var matrix = [
//   [A00, A10, A20, A30, A40, A50, A60],
//   [A01, A11, A21, A31, A41, A51, A61],
//   [A02, A12, A22, A32, A42, A52, A62],
//   [A03, A13, A23, A33, A43, A53, A63],
//   [A04, A14, A24, A34, A44, A54, A64],
//   [A05, A15, A25, A35, A45, A55, A65],
// ];

function checkForVictoryInDiagonal(slots) {
  var playerWin = false;

  for (var i = 0; i < possibilitiesToWin.length; i++) {
    for (var j = 0; j < possibilitiesToWin[i].length; j++) {
      console.log(
        "🚀 ~ file: index.js ~ line 207 ~ checkForVictoryInDiagonal ~ possibilitiesToWin[i][j]",
        possibilitiesToWin[i][j]
      );
      var index = mapPositionByIndex.find(
        (item) => item.value === possibilitiesToWin[i][j]
      );

      var col = index.col;
      var row = index.row;

      if (slots[col][row] !== "r") {
        playerWin = false;
        break;
      } else {
        playerWin = true;
      }
    }

    if (playerWin === true) {
      return true;
    }
  }
}

console.log(checkForVictoryInDiagonal(slotsInDiagonal));

var person = {
  firstName: "Thalita",
  lastName: "Cathala",
  age: 42,
};

var people = [
  {
    firstName: "Thalita",
    lastName: "Cathala",
    age: 42,
  },
  {
    firstName: "Sam",
    lastName: "Barros",
    age: 34,
  },
];

// console.log(people.find((element) => element.lastName === "Cathala"));

// console.log(person.lastName);
