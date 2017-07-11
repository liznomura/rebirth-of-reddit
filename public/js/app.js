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

const broadCityNav = document.createElement('div');
broadCityNav.className = 'broad-city-nav';
broadCityNav.innerHTML = 'broad city';
//broadCityNav.addEventListener("click", displayBroadCity)

const advTimeNav = document.createElement('div');
advTimeNav.className = 'adv-time-nav';
advTimeNav.innerHTML = 'adv time';
//advTimeNav.addEventListener("click", displayAdvTime);

const partyParrotNav = document.createElement('div');
partyParrotNav.className = 'party-parrot-nav';
partyParrotNav.innerHTML = 'party parrot';
//partyParrotNav.addEventListener("click", displayPartyParrot);

// body.appendChild(navBar);
// navBar.appendChild('broadCityNav');
// navBar.appendChild('advTimeNav');
// navBar.appendChild('partyParrotNav');

// **** MY BOARDS **** //
function displayAdvTime(){
  startXHR(HTTP_METHOD.GET, advTimeUrl, myBoardsListener);


  function myBoardsListener() {
    let myBoardsObj = JSON.parse(this.responseText);


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
}

//BROAD CITY BOARD
function displayBroadCity(){
  startXHR(HTTP_METHOD.GET, broadCityUrl, myListener);

    function myListener() {
      let myBoardsObj = JSON.parse(this.responseText);

      myArray = myBoardsObj.data.children;

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
}






