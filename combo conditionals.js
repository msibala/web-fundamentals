combo conditionals.js
function goDancing() {
  console.log("Dancing")
}
var today, moodLevel, raining, distanceMiles, snowing, weather, distanceToStatdium, bravelyDonSomeShorts, distanceToStadium


if (today == "Friday" && moodLevel >= 100)
{
  goDancing() ;
}//this had an errors
if (raining == true || distanceMiles > 3) 
{ 
  callUber(); 
} //this did not print
if (!snowing)
{
  bravelyDonSomeShorts 
}
if (weather != "rainy")
{
  if (distanceToStadium <3){
    console.log("I think I'll walk to the game.");
  }
  else {
  console.log("it's a bit far, so maybe I'll fly.") ;
  }
}
else 
{
  console.log("Hey, I'm a duck! A little water is OK. I'll swim.")
}// didn't print

if (weather != "rainy") 
{
  if (distanceToStadium < 3) 
  {
    console.log("I think I’ll walk to the game.");
  } 
  else 
  {
    console.log("It’s a bit far, so maybe I’ll fly.");
  }
} 
else 
{
  console.log("Hey, I’m a duck! A little water is OK. I’ll swim.");
}

