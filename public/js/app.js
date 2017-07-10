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


// **** MY BOARDS **** //
startXHR(HTTP_METHOD.GET, advTimeUrl, myBoardsListener);

const postDiv = document.createElement('div');
postDiv.className = postDiv;
const titleDiv = document.createElement('h2');
const authorDiv = document.createElement('h3');
const utcDiv = document.createElement('h3');
const upVotesDiv = document.createElement('h3');
const descrDiv = document.createElement('p');

function myBoardsListener() {
let myBoardsObj = JSON.parse(this.responseText);
console.log(myBoardsObj);


}


// //RANDOM DIV
// startXHR(HTTP_METHOD.GET, broadCityUrl, myBoardsListener);

// let randomDiv = document.createElement('div');
// randomDiv.innerHTML = `<a href="HTTP://WWW.google.com">click me</a>`;
// document.body.appendChild(randomDiv);








