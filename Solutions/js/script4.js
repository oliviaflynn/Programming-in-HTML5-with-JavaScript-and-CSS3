
var drink;
switch (new drink().getDrink()) {
  case 0:
    drink = "Coke";
    break;
  case 1:
    drink = "Sprite";
    break;
  case 2:
    drink = "Fanta";
    break;
  case 3:
    drink = "Lemonade";
    break;
  case 4:
    drink = "Tea";
    break;
  case 5:
    drink = "Coffee";
    break;
  case  6:
    drink = "Water";
}
document.getElementById("drink").innerHTML = "You choose " + drink;