var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crubs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
var access = myStorage.car.inside["glove box"];
console.log(access);
