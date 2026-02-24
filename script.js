function calculateMealPrice(item, quantity) {
  let price;

  switch (item) {
    case "Inyama":
      price = 2000;
      break;
    case "Ibishyimbo":
      price = 1000;
      break;
    case "Umuceri":
      price = 1500;
      break;
    default:
      return "Ibyo ntabwo tubifite!";
  }

  return price * quantity + " RWF";
}
