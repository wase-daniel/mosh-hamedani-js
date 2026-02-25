var testObject = {
  "my name": "pazo",
  "your age": 3,
  "his tail": 1,
  "to freinds": "two friends",
};

delete testObject["to freinds"];

var munyanyu = testObject["to freinds"];
console.log(munyanyu);
