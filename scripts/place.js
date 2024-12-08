const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}  | Alexia White | Utah, USA</span>  `;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`; 

const windchill = document.querySelector('#windchill');

function windChillFactor(){
    let wind = 20;
    let temperature = 29;
    if((wind > 3) && (temperature <=50)){
        calculateWindChill(wind, temperature);
    }
    else{
     windchill.innerHTML = `N/A`;
    }
}
function calculateWindChill(wind, temperature){
    const windChillCalc = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temperature * Math.pow(wind, 0.16));
    
    windchill.innerHTML = windChillCalc.toFixed(2);
}
windChillFactor();