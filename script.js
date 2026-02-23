function calculateMealPrice(items, quantity) {
  var quantity = "";
  var price = "";
  switch (items) {
    case "inyama":
      price = 2000 * quantity;
      break;
    case "inishyimbo":
      price = 1000 * quantity;
      break;
    case "umuceri":
      price = 1500 * quantity;
    default:
      price = "ibyo ntabwo tubifite";
  }
  return price;
}
console.log(calculateMealPrice("inyama", 2));
