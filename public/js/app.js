/*jshint esversion:6 */

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
const awwUrl = 'https://www.reddit.com/r/aww.json';


const navBar = document.createElement('div');
navBar.className = 'nav-bar';

const broadCityNav = document.getElementById('broadcity');

const advTimeNav = document.getElementById('advtime');

const awwNav = document.getElementById('aww');


//HOVER
const fbIcon = document.getElementById('fbIcon');
const igIcon = document.getElementById('igIcon');

// // // *** BROAD CITY BOARD *** //

// // broadCityNav.addEventListener("click", function() {
//   startXHR(HTTP_METHOD.GET, broadCityUrl, myListener);
//   function myListener() {
//     let myBoardsObj = JSON.parse(this.responseText);
//     let myArray = myBoardsObj.data.children;

//     myArray
//     .forEach( post => {

//       let randomNum = Math.floor(Math.random()*30);
//       let imageTag = "http://placebeard.it/640x480/"+randomNum;

//       const postDiv = document.createElement('div');
//       const titleDiv = document.createElement('h2');
//       const authorDiv = document.createElement('h3');
//       const utcDiv = document.createElement('h3');
//       const upVotesDiv = document.createElement('h3');
//       const descrDiv = document.createElement('p');
//       const contentDiv = document.getElementById('content');

//       postDiv.innerHTML = `<img src = ${imageTag}></img>`;
//       postDiv.className = postDiv;
//       titleDiv.innerText = post.data.title;
//       authorDiv.innerText = post.data.author;
//       utcDiv.innerText = moment.unix(post.data.created_utc).fromNow();
//       upVotesDiv.innerText = post.data.ups + ' upvotes';
//       descrDiv.innerText = post.data.selftext;

//       contentDiv.appendChild(postDiv);
//       contentDiv.appendChild(titleDiv);
//       contentDiv.appendChild(authorDiv);
//       contentDiv.appendChild(utcDiv);
//       contentDiv.appendChild(upVotesDiv);
//       contentDiv.appendChild(descrDiv);
//       if(contentDiv.children.length === 0) {
//         contentDiv.appendChild(postDiv);
//       } else {
//         contentDiv.replaceChild(postDiv, contentDiv.children[0]);
//       }
//     });
//   }
// });

// // // **** MY BOARDS **** //
// advTimeNav.addEventListener("click", function(){
  startXHR(HTTP_METHOD.GET, advTimeUrl, myBoardsListener);
  function myBoardsListener() {

    let myBoardsObj = JSON.parse(this.responseText);
    let myBoardsChildren = myBoardsObj.data.children;

    myBoardsChildren.forEach( post => {
      console.log(myBoardsObj);
      const postDiv = document.createElement('div');
      postDiv.className = 'postDiv';
      const imageDiv = document.createElement('div');
      imageDiv.className = 'imageDiv';
      const titleDiv = document.createElement('div');
      titleDiv.className = 'titleDiv';
      const authorDiv = document.createElement('div');
      authorDiv.className = 'authorDiv';
      const utcDiv = document.createElement('div');
      utcDiv.className = 'utcDiv';
      const upVotesDiv = document.createElement('div');
      upVotesDiv.className = 'upVotesDiv';
      const descrDiv = document.createElement('p');
      descrDiv.className = 'descrDiv';
      const contentDiv = document.getElementById('content');

    //image validation
    const myImage = document.createElement('img');
    myImage.onerror = function(event) {
      myImage.src ='https://upload.wikimedia.org/wikipedia/en/3/37/Adventure_Time_-_Title_card.png';
    };
    myImage.src = `${post.data.url}`;
    imageDiv.appendChild(myImage);

    titleDiv.innerHTML = post.data.title;
    authorDiv.innerHTML = post.data.author;
    utcDiv.innerHTML = moment.unix(post.data.created_utc).fromNow();
    upVotesDiv.innerHTML = post.data.ups + ' upvotes';
    descrDiv.innerHTML = post.data.selftext;

    postDiv.appendChild(imageDiv);
    postDiv.appendChild(titleDiv);
    postDiv.appendChild(authorDiv);
    postDiv.appendChild(utcDiv);
    postDiv.appendChild(upVotesDiv);
    postDiv.appendChild(descrDiv);
    // if(contentDiv.children.length === 0) {
      contentDiv.appendChild(postDiv);
    // } else {
    //   contentDiv.replaceChild(postDiv, contentDiv.children[0]);
    // }
  });
  }
// });





// // // **** GET THE APP **** //
// awwNav.addEventListener("click", function() {

//   startXHR(HTTP_METHOD.GET, awwUrl, getTheAppListener);

//   function getTheAppListener() {

//     let getTheAppObj = JSON.parse(this.responseText);
//     let getTheAppChildren = getTheAppObj.data.children;

//     getTheAppChildren
//     .forEach( post => {
//       const postDiv = document.createElement('div');
//       postDiv.className = 'postDiv';
//       const imageDiv = document.createElement('div');
//       const titleDiv = document.createElement('h2');
//       const authorDiv = document.createElement('h3');
//       const utcDiv = document.createElement('h3');
//       const upVotesDiv = document.createElement('h3');
//       const descrDiv = document.createElement('p');
//       const contentDiv = document.getElementById('content');

//     //image validation
//     const myImage = document.createElement('img');
//     myImage.onerror = function(event) {
//       myImage.src = 'https://s-media-cache-ak0.pinimg.com/736x/44/11/aa/4411aa3d0a35c1e19121275e0eda757e--simple-doodles-cute-doodles-tumblr.jpg';
//     };
//     myImage.src = `${post.data.url}`;
//     imageDiv.appendChild(myImage);

//     titleDiv.innerHTML = post.data.title;
//     authorDiv.innerHTML = post.data.author;
//     utcDiv.innerHTML = moment.unix(post.data.created_utc).fromNow();
//     upVotesDiv.innerHTML = post.data.ups + ' upvotes';
//     descrDiv.innerHTML = post.data.selftext;

//     postDiv.appendChild(imageDiv);
//     postDiv.appendChild(titleDiv);
//     postDiv.appendChild(authorDiv);
//     postDiv.appendChild(utcDiv);
//     postDiv.appendChild(upVotesDiv);
//     postDiv.appendChild(descrDiv);
//     if(contentDiv.children.length === 0) {
//       contentDiv.appendChild(postDiv);
//     } else {
//       contentDiv.replaceChild(postDiv, contentDiv.children[0]);
//     }
//   });
//   }
// });