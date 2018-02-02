var pikachu = document.getElementById("pikachu");
var bulbasaur = document.getElementById("bulbasaur");
pikachu.addEventListener("click", function(){
  this.setAttribute("class", "raceMove");
});
bulbasaur.addEventListener("click", function(){
  this.setAttribute("class", "raceMove");
});
// var pikachuPosition=pikachu.getBoundingClientRect();
// var bulbasaurPosition=bulbasaur.getBoundingClientRect();
// var headingChange = document.getElementById("result");
// if ((pikachuPosition.x < bulbasaurPosition.x + bulbasaurPosition.width  && pikachuPosition.x + pikachuPosition.width  > bulbasaurPosition.x &&
// 		pikachuPosition.y < bulbasaurPosition.y + bulbasaurPosition.height && pikachuPosition.y + pikachuPosition.height > bulbasaurPosition.y)){
//   headingChange.innerHTML = "Bulbasaur is the Winner!";
// } else{
//   headingChange.innerHTML = "Pikachu is the Winner!";
// }
