function scuberGreetingForFeet(distance){
  // Write your code here!
  let cost;
  if (distance <= 400){
    cost = 'This one is on me!'; 
  } else if (distance > 400 && distance < 2000){
    cost = 10;
  } else if (distance >= 2000 && distance <= 2500){
    cost = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.'
  }
  return cost;
}

function ternaryCheckCity(city){
  // Write your code here!
  let answer;
  if (city === 'NYC'){
    answer = 'Ok, sounds good.';
  } else {
    answer = 'No go.';
  }
  return answer;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let charm;
  if (tip === 'generous'){
    charm = 'Thank you so much.';
  } else if (tip === 'not as generous'){
    charm = 'Thank you.';
  } else {
    charm = 'Bye.';
  }
  return charm;
};