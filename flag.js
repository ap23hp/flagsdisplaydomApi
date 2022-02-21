
// const divss=document.createElement("div")
// divss.setAttribute("class","container")
// document.body.append(divss)

// const flagImg=document.createElement("img")
// flagImg.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png"

// flagImg.setAttribute("class", "flag")
// // document.body.append(flagImg)

// const head=document.createElement("h2")
// head.innerText="United States of America"
// // document.body.append(head)

// const head1=document.createElement("p")
// head1.innerText="Population:3,23947"
// // document.body.append(head1)


// const head2=document.createElement("p")
// head2.innerText="Region:Americas"
// // document.body.append(head2)

// const head3=document.createElement("p")
// head3.innerText="Capital:Washington,D.C."
// //DRY:do not repeat yourself
// document.body.append(flagImg,head,head1,head2,head3)


//1 rem =16px

//another way of doing it without using createElement
let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ];
  



// function createCountry(country){
// const container=document.createElement("div")
// container.setAttribute("class","container")
// console.log(country);
// container.innerHTML=`<img class="flag" src="${country.flag}">
// <div class="info">
//     <h2>${country.name}</h2>
//     <p><span>Population</span>${country.population}</p>
//     <p><span>Region</span>${country.region}</p>
//     <p><span>Capital</span>${country.capital}</p>
// </div>`

// document.body.append(container);

// }


// countriesInfo.forEach((country)=>createCountry(country));



// function createCountry(country){
//   const {name,flag,population,region,capital}=country
// const container=document.createElement("div")
// container.setAttribute("class","container")
// console.log(country);
// container.innerHTML=`<img class="flag" src="${country.flag}">
// <div class="info">
//     <h2>${country.name}</h2>
//     <p><span>Population</span>${population}</p>
//     <p><span>Region</span>${region}</p>
//     <p><span>Capital</span>${capital}</p>
// </div>`

// document.body.append(container);

// }


// countriesInfo.forEach((country)=>createCountry(country));


function createCountry({name,flag,population,region,capital}){

const container=document.createElement("div")
container.setAttribute("class","container")
// console.log(country);
container.innerHTML=`<img class="flag" src="${flag}">
<div class="info">
    <h2>${name}</h2>
    <p><span>Population</span>${population}</p>
    <p><span>Region</span>${region}</p>
    <p><span>Capital</span>${capital}</p>
</div>`

document.body.appendChild(container);

}
//append vs appendChild
//append can take multiple arguments 
//appendChild cannot -only takes one argument
//why do we have it then?- it was first thing which was developed first



//countriesInfo.forEach((country)=>createCountry(country));
fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((countries)=>{
countries.forEach((country)=>{
const newCountry={
name:country.name.official,
flag: country.flags.svg ,
population:country.population,
region:country.region,
capital:country.capital,
}
createCountry(newCountry)
});

} )