const Key="7717d4483e695d398b186449985acc7e"


function infTemp(info){

    console.log(info)
    document.querySelector(".temp").innerHTML = "Tempo em " + info.name
    document.querySelector(".wind").innerHTML = Math.floor(info.main.temp) + "°C"
    document.querySelector(".txt-prev").innerHTML = info.weather[0].description
    document.querySelector(".umid").innerHTML = info.main.humidity + "%"
    document.querySelector(".img-prev").src= `https://openweathermap.org/img/wn/${info.weather[0].icon}.png`
}  

async function findCity(city){
    const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&lang=pt_br&units=metric`).then(reply=> reply.json())   
    
    infTemp(info)

}

function cliTemp(){
    const city = document.querySelector(".container-city").value

    findCity(city)
}