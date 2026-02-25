var student = {
  name: "Daniel",
  age: 17,
  address: {
    country: "Rwanda",
    "MY city": "Kigali",
    location: {
      sector: "Kicukiro",
      street: "KK 15 Ave",
    },
  },
};
var accessStudentAddress = student.address["MY city"];
console.log(accessStudentAddress);
