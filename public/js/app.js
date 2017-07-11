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

const body = document.body;

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



}

//BROAD CITY BOARD

startXHR(HTTP_METHOD.GET, broadCityUrl, myListener);

function myListener() {
let myBoardsObj = JSON.parse(this.responseText);
//console.log(myBoardsObj);

myArray = myBoardsObj.data.children;
console.log (myArray);

myArray.forEach(function(post){

  let randomNum = Math.floor(Math.random()*30);
  let imageTag = "http://placebeard.it/640x480/"+randomNum;

  const postDiv = document.createElement('div');
  postDiv.innerHTML = `<img src = ${imageTag}></img>`;
  postDiv.className = postDiv;
  body.appendChild(postDiv);

  const titleDiv = document.createElement('h2');
  titleDiv.innerText = post.data.title;
  body.appendChild(titleDiv);

  const authorDiv = document.createElement('h3');
  authorDiv.innerText = post.data.author;
  body.appendChild(authorDiv);

  const utcDiv = document.createElement('h3');

  utcDiv.innerText = moment.unix(post.data.created_utc).fromNow();
  body.appendChild(utcDiv);

  const upVotesDiv = document.createElement('h3');
  upVotesDiv.innerText = post.data.ups;
  body.appendChild(upVotesDiv);

  const descrDiv = document.createElement('p');
  descrDiv.innerText = post.data.selftext;
  body.appendChild(descrDiv);

});


}





