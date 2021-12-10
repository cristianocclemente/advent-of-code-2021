const fs = require("fs");
const _ = require("lodash");

const parseInput = (filename) => {
  const lines = fs
    .readFileSync(filename)
    .toString()
    .split("\n")
    .map((line) => [...line]);
  return lines;
};

const getClosingChars = (line) => {
  const openingChars = ["(", "[", "{", "<"];

  const openingCharToClosingChar = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
  };

  const closingCharToOpeningChar = _.invert(openingCharToClosingChar);

  const openingCharStack = [];
  for (const char of line) {
    if (openingChars.includes(char)) openingCharStack.push(char);
    else if (openingCharStack.pop() !== closingCharToOpeningChar[char])
      return "";
  }
  const closingChars = _.reverse(openingCharStack)
    .map((openingChar) => openingCharToClosingChar[openingChar])
    .join("");

  return closingChars;
};

const getMiddleScore = (arrayClosingChars) => {
  const charToPoints = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4,
  };

  const arrayScores = arrayClosingChars.map((closingChars) =>
    [...closingChars].reduce(
      (prevScore, closingChar) => prevScore * 5 + charToPoints[closingChar],
      0
    )
  );
  const middleScore = arrayScores.sort((a, b) => a - b)[
    (arrayScores.length - 1) / 2
  ];
  return middleScore;
};

const filename = process.argv.slice(2)[0];
const lines = parseInput(filename);
const arrayClosingChars = lines
  .map((line) => getClosingChars(line))
  .filter((closingChars) => closingChars);
const middleScore = getMiddleScore(arrayClosingChars);
console.log(middleScore);
