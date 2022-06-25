/*!
* Moringa School Phase1 Project
*Project Name :BookTab 
*Author: Milton Ouma
* Copyright 2022 Ouma Nyang
* Github - OumaNyang
* Open Project Licensed under MIT

*/
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
    
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
            <button onclick="addFavourite()" class="btn-favourite">Add to Favourite</button>
        </div>
      `;

   
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<span class="alert alert-danger">The input field cannot be empty</span>`;
      } else {
        result.innerHTML = `<span class="alert alert-danger">Please enter a valid country name.<span>`;
      }
    });
});

function addFavourite(){
  document.getElementById("fav-alert").innerHTML = "<br><br><span class='alert alert-success'>Country added to favourite <span>";

}


// let addFavourite = document.getElementsByClassName("btn-favourite");

// function displayMessage(){
//   
// }   

// addFavourite.addEventListener("click", displayMessage);