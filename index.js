// Write your code in this file!
function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return "This one is on me!";
  }
  else if (ride > 2000 && ride < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip > 0) {
    case 4:
      return "Thank you so much."
      break;
    case 2:
      return "Thank you."
      break;
    default:
      return "Bye."
  }
}