var student = {
  name: "Daniel",
  age: 17,
  address: {
    country: "Rwanda",
    city: "Kigali",
    location: {
      sector: "Kicukiro",
      street: "KK 15 Ave",
    },
  },
};
var accessStudent = student.address.location.street;
console.log(accessStudent);
