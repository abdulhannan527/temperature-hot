
let appId = '1acec66c004ce56b26a08261c4c237f5';

document.getElementById('searchBtn').addEventListener('click',function(){
    const cityName = document.getElementById('cityName').value;
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}`)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}`)
    .then(res => res.json())
    .then(data => {
        getAllInfo(data);
    })
});

function getAllInfo(data){
    console.log(data);
    document.getElementById('city').innerText = data.name;
    document.getElementById('temperature').innerText = Math.round(data.main.temp - 273.15);
    document.getElementById('lead').innerText = data.weather[0].main;
    const iconCode = data.weather[0].icon;
    const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    document.getElementById('icon').src = iconUrl;
}

