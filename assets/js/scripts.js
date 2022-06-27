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
    document.getElementById("loader").classList.add('loader');
    document.getElementById("search-btn").style.display = 'none';
;

  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("loader").classList.remove('loader');
        document.getElementById("search-btn").style.display = 'block';

      result.innerHTML = `
      <table class="table table-sm table-bordered table-striped">
    <tr>
        <td class="text-center" colspan="2">${data[0].name.common}</td>
      </tr>
    <tr>
        <td class="text-center" colspan="2"><img src="${data[0].flags.svg}" class="flag-img"></td>
      </tr>
    <tr>
        <td>Capital</td>
        <td>${data[0].capital[0]}</td>
      </tr>
      <tr>
        <td>Continent</td>
        <td>${data[0].continents[0]}</td>
      </tr>
       <tr>
        <td>Population</td>
        <td>${data[0].population}</td>
      </tr>
       <tr>
        <td>Currency</td>
        <td>${
  data[0].currencies[Object.keys(data[0].currencies)].name
} - ${Object.keys(data[0].currencies)[0]}</td>
       </tr>
       <tr>
        <td>Common Languages</td>
        <td>${Object.values(data[0].languages)
  .toString()
  .split(",")
  .join(", ")}</td>
        </tr>
        <tr>
        <td>Currency</td>
     <td> </td>
       <tr>
        <td>Currency</td>
        <td>2</td>
      </tr>
        <tr>
        <td class="text-center" colspan="2"><button onclick="addFavourite(${data[0].name.common})" class="btn btn-sm btn-success rounded-0">Add Favourite</button></td>
      </tr>
  </table> `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        document.getElementById("loader").classList.remove('loader');
        document.getElementById("search-btn").style.display = 'block';
      setTimeout(() => {  result.innerHTML = `<div class="alert alert-danger">The input field cannot be empty</div>`}, 3000);
      } else {
        document.getElementById("loader").classList.remove('loader');
        document.getElementById("search-btn").style.display = 'block';
       setTimeout(() => {   result.innerHTML = `<div class="alert alert-danger">Please enter a valid country name or check your internet connection<div>` }, 3000);
      }
    });
});

let countryName;
function addFavourite(countryName){

let favContainer =  document.getElementById('favList')
//const heading_text = document.createTextNode("Kenya");

favContainer.appendChild(countryName);

//alert(' Hi there' );

}

// window.addEventListener("load", () => {

//     addFavourite()

// });