function screemdata(dates){
    document.querySelector(".local").innerHTML = "Tempo em " + dates.name
    document.querySelector(".temp").innerHTML = Math.floor(dates.main.temp) + "C°"
    document.querySelector(".temp-clima").innerHTML = dates.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dates.main.humidity + "%"
    document.querySelector(".time-img").src = `https://openweathermap.org/img/wn/${dates.weather[0].icon}.png`
    console.log(dates)
}

async function searhcity(city){
    const dates = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())

    screemdata(dates)
}
c
function buttonclick(){
    const city = document.querySelector(".searh").value

    searhcity(city)
}


const key = "5acb4749c14bd56a93f66f2491cc113c"