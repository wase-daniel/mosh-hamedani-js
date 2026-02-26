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
var accessAddress = student.address.location.street;
console.log(accessAddress);
