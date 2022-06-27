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
  let countryName = countryInp.value.toUpperCase();
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("loader").classList.remove('loader');
        document.getElementById("search-btn").style.display = 'block';

      result.innerHTML = `
      <table class="table table-sm table-bordered table-striped table-reponsive">
   <tr>
        <td class="text-center" colspan="2"><img src="${data[0].flags.svg}" class="flag-img"></td>
      </tr>

      <tr>
      <td  id="countrydetails" class="text-center" colspan="2">${(data[0].name.common).toUpperCase()}</td>
    </tr>
    <tr>
    <td>Official Names </td>
    <td><h2 class="text-center">${data[0].name.official}<h2></td>
  </tr>
  
  <tr>
  <td> Coat of arms </td>
  <td><img width="50px" src="${data[0].coatOfArms.svg}" class="coa-img"></td>
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
        <td>${ data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</td>
       </tr>
       <tr>
        <td>Common Languages</td>
        <td>${Object.values(data[0].languages)
  .toString()
  .split(",")
  .join(", ")}</td>
        </tr>
        <tr>
        <td>Timezone</td>
     <td>${data[0].timezones} </td>
       <tr>
        <td>TLD</td>
        <td>${data[0].tld}</td>
      </tr>
        <tr>
        <td class="text-center" colspan="2"><button id="addFav" class="btn btn-sm btn-success rounded-0">Add Favourite</button></td>
      </tr>
  </table> `;

  let  addFav =document.getElementById('addFav')
  let  removeFav =document.getElementById('removeFav')

  addFav.addEventListener("click", () => {
    addFavourite(countryName)
  })


    })
    .catch(() => {
      if (countryName.length == 0) {
        document.getElementById("loader").classList.remove('loader');
        document.getElementById("search-btn").style.display = 'block';
      result.innerHTML = `<div class="alert alert-danger">The input field cannot be empty</div>`;
      setTimeout(function() {result.close();}, 5000)

      } else {
        document.getElementById("loader").classList.remove('loader');
        document.getElementById("search-btn").style.display = 'block';
        result.innerHTML = `<div class="alert alert-danger">Please enter a valid country name or check your internet connection<div>`;
      }
    });

});

function addFavourite(countryName){
let favContainer =  document.getElementById('favList')
const node = document.createElement("li");
const span = document.createElement("span");

const textnode = document.createTextNode(countryName);
span.setAttribute('id','star');
node.appendChild(textnode);
node.appendChild(span);
  favContainer.appendChild(node);
  
  }


    if(navigator.onLine) {
     
      result.innerHTML = `<div class="alert alert-success">Internet connection  available.Proceeed with your search<div>` 
      document.getElementById("search-btn").style.display = 'block';

     } else {
       result.innerHTML = `<div class="alert alert-danger">Oops! You're offline. Please check your network connection...<div>`;
       document.getElementById("search-btn").style.display = 'none';

     }


  
