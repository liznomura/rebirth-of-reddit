/*jshint esversion:6 */
// STRUCTURE OF AN XML REQUEST:
// var oReq = new XMLHttpRequest();

// function reqListener(){

  // var myObj = JSON.parse(this.responseText);

// }

// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://swapi.co/api/people/4/");
// oReq.send();


// *** ABSTRACTION *** //
// Http method object
// use this for the first param of startXHR
// HTTP_METHOD.GET
const HTTP_METHOD = {
  GET: 'GET'
};

// function for XHR
// use this for all XHR calls
function startXHR(method, source, cb) {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', cb);
  oReq.open(method, source);
  oReq.send();

  return oReq;
}

// urls
// use these for the source
const broadCityUrl = 'https://www.reddit.com/r/BroadCity.json';
const advTimeUrl = 'https://www.reddit.com/r/adventuretime.json';
const partyParrotUrl = 'https://www.reddit.com/r/PartyParrot.json';


const navBar = document.createElement('div');
navBar.className = 'nav-bar';
const ulNav = document.createElement('ul');
ulNav.className = 'ul-nav';


// **** MY BOARDS **** //
startXHR(HTTP_METHOD.GET, advTimeUrl, myBoardsListener);

function myBoardsListener() {
let myBoardsObj = JSON.parse(this.responseText);
console.log(myBoardsObj);
}






//RANDOM DIV
var oReq = new XMLHttpRequest();

function reqListener(){

  var myObj = JSON.parse(this.responseText);
  // console.log(myObj);

  randomDiv = document.createElement('div');
  randomDiv.innerHTML = `<a href="HTTP://WWW.google.com">click me</a>`;
  document.body.appendChild(randomDiv);




}

oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.reddit.com/r/BroadCity.json");
oReq.send();


