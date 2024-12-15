const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}  | Alexia White | Utah, USA</span>  `;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`; 

function toggleNav() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');  // Toggle the 'active' class on the nav element
}
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. Georege, Utah",
        dedicated: "1877, January, 1 ",
        area: 143969,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40449.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Zollikofen, Switzerland",
        dedicated: "1955, September, 11 ",
        area: 35456,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641.jpg"
    },
    {
        templeName: "Vancouver British Columbia",
        location: "Langley, British Coumbia, Canada",
        dedicated: "2010, May, 2 ",
        area: 28165,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-3285.jpg"
    },
    {
      templeName: "Anchorage Alaska",
      location: "Anchorage, Alaska",
      dedicated: "1999, January, 9 ",
      area: 11937,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-44885.jpg"
    },
    {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21 ",
    area:44175,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2054.jpg"
  },
    // Add more temple objects here...
  ];
 
//   createCard(temples);

//   function createCard(temples){
//     temples.forEach(temple=>{
//         let card = document.createElement("section");
//         let templename = document.createElement("h3");
//         let templelocation = document.createElement("p");
//         let templededicated = document.createElement("p");
//         let templearea = document.createElement("p");
//         let templeimage = document.createElement("img");

//         // templeName: "Vancouver British Columbia Temple",
//         // location: "Langley, British Coumbia, Canada",
//         // dedicated: "2010, May, 2 ",
//         // area: 28165,
//         // imageUrl:

//         templename.textContent = temple.templeName;
//         templelocation.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
//         templededicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
//         templearea.innerHTML = `<span class="label">Area:</span> ${temple.area}`;
//         templeimage.setAttribute("src", temple.imageUrl);
//         templeimage.setAttribute("alt", `${temple.templeName} Temple`);
//         templeimage.setAttribute("loading", "lazy");
//         templeimage.setAttribute("width", 400);
//         templeimage.setAttribute("height", 200)

//         card.appendChild(templename);
//         card.appendChild(templelocation);
//         card.appendChild(templededicated);
//         card.appendChild(templearea);
//         card.appendChild(templeimage);

//         document.querySelector(".temple-grid").appendChild(card);

//     })
//   }

createCard(temples);

  function createCard(templeFilter){
    document.querySelector(".temple-grid").innerHTML = "";
    templeFilter.forEach(temple=>{
        let card = document.createElement("section");
        let templename = document.createElement("h3");
        let templelocation = document.createElement("p");
        let templededicated = document.createElement("p");
        let templearea = document.createElement("p");
        let templeimage = document.createElement("img");

        // templeName: "Vancouver British Columbia Temple",
        // location: "Langley, British Coumbia, Canada",
        // dedicated: "2010, May, 2 ",
        // area: 28165,
        // imageUrl:

        templename.textContent = temple.templeName;
        templelocation.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        templededicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        templearea.innerHTML = `<span class="label">Area:</span> ${temple.area}`;
        templeimage.setAttribute("src", temple.imageUrl);
        templeimage.setAttribute("alt", `${temple.templeName} Temple`);
        templeimage.setAttribute("loading", "lazy");
        templeimage.setAttribute("width", "400px");
        templeimage.setAttribute("height", "200px");

        card.appendChild(templename);
        card.appendChild(templelocation);
        card.appendChild(templededicated);
        card.appendChild(templearea);
        card.appendChild(templeimage);

        document.querySelector(".temple-grid").appendChild(card);

    })
  }
//  Old - temples built before 1900
// New - temples built after 2000
// Large - temples larger than 90000 square feet
// Small - temples smaller than 10000 square feet
// Home - displays all the temples stored in the array.

  function originalTemples(){
    createCard(temples);
  }
  function newTemples(){
    const newtemple = temples.filter(temple => {
        const newyear = temple.dedicated.match(/\d{4}/);
        return newyear && parseInt(newyear[0]) > 2000;
    });
    createCard(newtemple);
    // console.log(newtemple);
  }

  function smallTemples(){
    const smalltemple = temples.filter(temple => temple.area < 10000);
    createCard(smalltemple);
  }

  function largeTemples(){
    const smalltemple = temples.filter(temple => temple.area > 90000);
    createCard(smalltemple);
  }
  function oldTemples(){
    const oldtemple = temples.filter(temple => {
        const oldyear = temple.dedicated.match(/\d{4}/);
        return oldyear && parseInt(oldyear[0]) < 1900;
    });
    createCard(oldtemple);
    // console.log(newtemple);
  }
