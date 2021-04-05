var Airtable = require("airtable");
console.log(Airtable);

//use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keymS2olAIhZo74QZ" }).base(
    "appUDThuDnjdhS7NW"
);
//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("artwork").select({}).eachPage(gotPageOfArts, gotAllArts);
// an empty array to hold our book data
const arts = [];

// callback function that receives our data
function gotPageOfArts(records, fetchNextPage) {
  console.log("gotPageOfArts()");
  // add the records from this page to our array
  arts.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllArts(err) {
  console.log("gotAllArts()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogArts();
  showArts();
}

// just loop through the books and console.log them
function consoleLogArts() {
  console.log("consoleLogArts()");
  arts.forEach((art) => {
    console.log("Art:", art);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showArts() {
  console.log("showArts()");
  arts.forEach((art) => {
    
    var artContainer = document.createElement("div");
    artContainer.classList.add("art-container");
    document.querySelector(".container").append(artContainer);


var artTitle = document.createElement("h1");
artTitle.classList.add("art-title");
artTitle.innerText = art.fields.name;
artContainer.append(artTitle);

//add artists 


var artArtist = document.createElement("h1");
artArtist.classList.add("art-artist");
artArtist.innerText = art.fields.artist;
artContainer.append(artArtist);

var artDescription = document.createElement("h1");
artDescription.classList.add("art-description");
artDescription.innerText = art.fields.description;
artContainer.append(artDescription);

var artImage = document.createElement("img");
artImage.classList.add("art-image");
artImage.src = art.fields.attachments[0].url;
artContainer.append(artImage);

artContainer.addEventListener("click", function(event){
  artDescription.classList.toggle("active");
  artImage.classList.toggle("active");

})
var artGenre = art.fields.genre;
artContainer.classList.add(artGenre);
// artGenre.forEach(function (genre) {
//   artContainer.classList.add(genre);
// });
//add event listener to our filter
//to add an active class to our song
//add event listener to our filter 
//to add an active class to our song

var filterBlue = document.querySelector('.blue');
filterBlue.addEventListener("click", function(){

  if (artContainer.classList.contains("blue")){
    artContainer.style.background="blue";
  }else{
    artContainer.style.background="white";
  }

})


var filterPink = document.querySelector('.pink');
filterPink.addEventListener("click", function(){

  if (artContainer.classList.contains("pink")){
    artContainer.style.background="pink";
  }else{
    artContainer.style.background="white";
  }

})


var filterYellow = document.querySelector('.yellow');
filterYellow.addEventListener("click", function(){

  if (artContainer.classList.contains("yellow")){
    artContainer.style.background="yellow";
  }else{
    artContainer.style.background="white";
  }

})





    });
  


}











    
   
  

