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
const broadCityNav = document.createElement('div');
broadCityNav.className = 'broad-city-nav';
broadCityNav.innerHTML = 'broad city';
const advTimeNav = document.createElement('div');
advTimeNav.className = 'adv-time-nav';
advTimeNav.innerHTML = 'adv time';
const partyParrotNav = document.createElement('div');
partyParrotNav.className = 'party-parrot-nav';
partyParrotNav.innerHTML = 'party parrot';

document.body.appendChild(navBar);
navBar.appendChild('broadCityNav');
navBar.appendChild('advTimeNav');
navBar.appendChild('partyParrotNav');

// **** MY BOARDS **** //
startXHR(HTTP_METHOD.GET, advTimeUrl, myBoardsListener);


function myBoardsListener() {
  let myBoardsObj = JSON.parse(this.responseText);
  // console.log(myBoardsObj);


  for(let i = 0; i < myBoardsObj.data.children.length; i++) {
    const postDiv = document.createElement('div');
    postDiv.className = 'postDiv';
    const imageDiv = document.createElement('div');
    const titleDiv = document.createElement('h2');
    const authorDiv = document.createElement('h3');
    const utcDiv = document.createElement('h3');
    const upVotesDiv = document.createElement('h3');
    const descrDiv = document.createElement('p');
    const contentDiv = document.getElementById('content');

    const possibleThumbnails = ['self', 'nsfw', 'spoiler'];

if(possibleThumbnails.indexOf(myBoardsObj.data.children[i].data.thumbnail) >= 0) {
  imageDiv.innerHTML = `<img src=https://upload.wikimedia.org/wikipedia/en/3/37/Adventure_Time_-_Title_card.png alt="place-img"></img>`;
} else {
    imageDiv.innerHTML = `<img src=${myBoardsObj.data.children[i].data.url} alt="img"></img>`;
  }
    titleDiv.innerHTML = `${myBoardsObj.data.children[i].data.title}`;
    authorDiv.innerHTML = `${myBoardsObj.data.children[i].data.author}`;
    utcDiv.innerHTML = moment.unix(myBoardsObj.data.children[i].data.created_utc).fromNow();
    upVotesDiv.innerHTML = `${myBoardsObj.data.children[i].data.ups}`;
    descrDiv.innerHTML = `${myBoardsObj.data.children[i].data.selftext}`;

    postDiv.appendChild(imageDiv);
    postDiv.appendChild(titleDiv);
    postDiv.appendChild(authorDiv);
    postDiv.appendChild(utcDiv);
    postDiv.appendChild(upVotesDiv);
    postDiv.appendChild(descrDiv);
    contentDiv.appendChild(postDiv);
  }
}


// //RANDOM DIV
// startXHR(HTTP_METHOD.GET, broadCityUrl, myBoardsListener);

// let randomDiv = document.createElement('div');
// randomDiv.innerHTML = `<a href="HTTP://WWW.google.com">click me</a>`;
// document.body.appendChild(randomDiv);








