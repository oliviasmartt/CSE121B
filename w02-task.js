/* W02-Task - Profile Home Page */
<link rel="stylesheet" type="css" href="main.css"></link>

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Olivia Smart';
let currentYear = "2023";
let profilePicture = "me.jpeg";
/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('image');


/* Step 4 - Adding Content */

nameElement.innerHTML = '<strong>${fullName}</strong>';
imageElement.setAttribute('src',profilePicture);




/* Step 5 - Array */

let favFoods = ["Pizza", "Sushi", "Burgers", "Ice Cream"];
let newFavoriteFood = "Tacos";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += '<br>${favFoods}';