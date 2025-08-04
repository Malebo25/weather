



function apiData(response){

    let date =new Date(response.data.time*1000);

    
    let city =document.querySelector("#userCity");
    let currentDate =document.querySelector("#today");
    let temperature  =document.querySelector("#temperature-value");
    let weatherDescription=document.querySelector("#weatherDescription");
    let descriptionIcon=document.querySelector("#descriptionIcon");
    let humidity =document.querySelector("#humidity-level");
    let windSpeed=document.querySelector("#wind-speed");


    city.innerHTML=response.data.city;
    temperature.innerHTML=`${Math.round(response.data.temperature.current)} °C`;
    weatherDescription.innerHTML=response.data.condition.description;
    humidity.innerHTML=response.data.temperature.humidity;
    windSpeed.innerHTML=response.data.wind.speed;
    currentDate.innerHTML=formatDate(date);
    descriptionIcon.innerHTML =`<img class="icon" src="${response.data.condition.icon_url}" alt="" width="45" ></img>`

}

function formatDate(date){
    let day = date.getDay();
    let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let chosenday=days[day];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let currentMonth =months[date.getMonth()]

    let currentDate=date.getDate();

    let hour  = date.getHours();
    let minutes  =date.getMinutes()

    if (hour < 10) {
        hour = "0" + hour;
    }

   
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return `${hour}:${minutes} ${chosenday} , ${currentDate} ${currentMonth}`;
}

function apiCall(city){
   
        let key = "t48f904c37f90502d04b44aabcf03oaf";
        let url  =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
        axios.get(url).then(apiData);
    

}

function inputBoxOperation(e){
    e.preventDefault()

   let  userCity=document.querySelector("#search-input");

 
   apiCall(userCity.value);

}


let formElement =document.querySelector("#form");

formElement.addEventListener('submit',inputBoxOperation);