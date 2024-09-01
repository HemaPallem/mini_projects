const apiKey = "58b38b3ddecc78e0ec88d28db9141f61";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=vijayawada";

const searchInput = document.querySelector('.search_input');
const searchBtn = document.querySelector('.search_icon');

var weatherIcon = document.querySelector('.weather_icon');

var weather = document.querySelector('.weather');
var errorMsg = document.querySelector('.error_msg');

async function checkWeather(city){
    console.log(city);
    var response = await fetch(apiURL + city + `&appid=${apiKey}`);
    console.log(response);
    var data = await response.json();
    if(response.status == 404){
        weather.style.display = 'none';
        errorMsg.style.display = 'block';
    }
    else{
        if(data.weather[0] == 'clouds'){
            weatherIcon.src = 'clouds.png'
        }
        else if(data.weather[0] == 'clear'){
            weatherIcon.src = 'clear.png'
        }
        else if(data.waether[0] == 'drizzle'){
            weatherIcon.src = 'drizzle.png'
        }
        else if(data.waether[0] == 'mist'){
            weatherIcon.src = 'mist.png'
        }
        else if(data.waether[0] == 'rain'){
            weatherIcon.src = 'rain.png'
        }
        else if(data.waether[0] == 'snow'){
            weatherIcon.src = 'snow.png'
        }
    
        var city=document.querySelector('.city').innerHTML=data.name;
        var temp=document.querySelector('.temp').innerHTML=math.round(data.main.temp) + '°c';
        var temp=document.querySelector('.humidity').innerHTML=data.main.humidity + '%';
        var temp=document.querySelector('.wind').innerHTML=data.wind.speed + 'km/h';
    
        weather.style.display = 'block';
        errorMsg.style.display = 'none';
    }



}
searchBtn.addEventListener("click",()=>{
    console.log("weather changes");
    checkWeather(searchInput.value);
})
