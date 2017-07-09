/*jshint esversion:6 */
// STRUCTURE OF AN XML REQUEST:
// var oReq = new XMLHttpRequest();

// function reqListener(){

  // var myObj = JSON.parse(this.responseText);

// }

// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://swapi.co/api/people/4/");
// oReq.send();

//Http method object
const HTTP_METHOD = {
  GET: 'GET'
};

const ulNav = document.createElement('ul');


//RANDOM DIV
var oReq = new XMLHttpRequest();

function reqListener(){

  var myObj = JSON.parse(this.responseText);
  console.log(myObj);

  randomDiv = document.createElement('div');
  randomDiv.innerHTML = `<a href="HTTP://WWW.google.com">click me</a>`;
  document.body.appendChild(randomDiv);




}

oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.reddit.com/r/BroadCity.json");
oReq.send();


