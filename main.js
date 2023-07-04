// Get data from api or json to render it on dom
// uses an array iteration or a loop
// 2 distinct event listeners 

// Ideas 
// search nba player - and get his stats and render them on the dom
// -- points,rebounds,assist per game 
// search a players name, with  input box, -- event listener, when its entered it uses a function with a fetch
// player comparison tools would be useful and image of player appearing would nice features
getFunction() 
function getFunction (){
   fetch("https://www.balldontlie.io/api/v1/players")
   .then(res => res.json())
   .then(stats => console.log(stats))
   //.catch(error => alert("try again",error))
}
// this function will be used as event handler
// once the fetch is successful, the player stats appear on the dom
// use a search eventListener
// create a search button
addEventListener('search',getFunction)

// stats will be shown by year to year basis, from recent time to past time- top to bottom 

// will need to render to dom so some functions for that 
// function renderFN(){}

// search will be by last name, and itwill have a autocomplete with only the available players

