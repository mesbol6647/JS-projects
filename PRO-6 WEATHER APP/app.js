const form =document.querySelector("form");
const input =document.querySelector("form input");
const msgSpan =form.querySelector(".msg");
const list =document.querySelector(".container .cities");

// localStorage.setItem("apiKey",EncryptStringAES("7b24cfa1eff8245df1d6a0faa9b737a6"));
 
// html inline assign, addEventListener, onclick, setAttribute
form.addEventListener("submit", (e)=>{
    e.preventDefault();
   getWeatherDataFormApi();
    // form.reset();
    // input.value=""
    e.currentTarget.reset();
    // e.target.reset();

})

const getWeatherDataFormApi = async() =>{
    const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    console.log(apiKey);
    const cityName =input.value;
    const units ="metric";
    const lang ="tr"

    // https request url(endpoint)
    const url =` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}
    `;

    try { 
        const response =await  fetch(url).then(response=>response.json());
        // //  console.log(response);

        // const response =await  axios(url);//!burada fetch yerine axios kullanırsak syntax bu şekilde oluyor.
         //obj.destructions
         const{main, name, sys, weather}=response;
        //  const{main, name, sys, weather}=response.data;//! burada axios yaptığımız zaman bunu eklemememiz gerekiyor.
         const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        //  console.log(iconUrl);

         const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
         console.log(response);

        const cityNameSpans =list.querySelectorAll("span");
        // filter, map,reduce,forEach==> array
        // forEach ==> nodeList
        if (cityNameSpans.length > 0) {
            const filteredArray =[...cityNameSpans].filter
            (span => span.innerText == name);
            if (filteredArray.length> 0) {
                msgSpan.innerText =`You already know the weather for ${name}, Please search for another city 😉 `;
                setTimeout(()=> {msgSpan.innerText=""}, 5000)
            return;
            }
        }
        const createdLi =document.createElement("li");
        createdLi.classList.add("city");
        createdLi.innerHTML =

        ` <h2 class="city-name" data-name="${name},${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
                <img class="city-icon" src="${iconUrlAWS}">
                <figcaption>${weather[0].description}</figcaption>
          </figure>`;
          list.append(createdLi);

    } catch (error) {
        // error logging
        // postErrorLog("app.js, getWeatherDataFromApi", date.now(), error)
        msgSpan.innerText ="City not found!";
        setTimeout(()=> {msgSpan.innerText=""}, 5000)
    }
  

}