const loc = document.getElementById("ip");
const searchbtn = document.getElementById("i1");
const image = document.getElementById("image");
const location_not_found = document.querySelector(".error");

searchbtn.addEventListener('click',()=>{
    fetchdata();
});

const fetchdata = async() =>{
    
    const apikey = "b6dd89b235c8ece59fe954890150f1d2";
    const city = loc.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const weather_data = await fetch(url).then(response => response.json());
    
    if(weather_data.cod === `400`){
        location_not_found.style.display = "block";
        document.querySelector(".desc").style.display = "none";
        document.querySelector(".details").style.display = "none"; 

    }
    else{
    location_not_found.style.display = "none";
    document.querySelector(".desc").style.display = "block";
    document.querySelector(".details").style.display = "flex";   

    document.querySelector(".temp").innerHTML = Math.round(weather_data.main.temp - 273.15) + "°C";
    document.getElementsByClassName("cmt")[0].innerHTML = weather_data.weather[0].description.toUpperCase();
    document.querySelector("#hum").innerHTML = weather_data.main.humidity + "%";
    document.getElementById("speed").innerHTML = weather_data.wind.speed + " Km/H";

    switch(weather_data.weather[0].main){
        case "Mist":
            image.src = "mist.png";
            break;
        case "Rain":
            image.src= "rain.png";
            break;
        case "Haze":
            image.src = "mist.png";
            break;
        case "Clear":
            image.src = "clear.png";
            break;
        case "Clouds":
            image.src = "cloud.png";
            break;
    }

    
    
}
}
