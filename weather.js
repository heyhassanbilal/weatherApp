const btn = document.querySelector(".search");
const text = document.querySelector(".city");
const temp = document.querySelector(".temperature");
const place = document.querySelector(".place");
btn.addEventListener("click",(e)=>{
    city = text.value
    // console.log(city);
    e.preventDefault()
    const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        // headers: {
        //     'X-RapidAPI-Key': '7e926b61efmsh912547cc4ccf36dp10dfcdjsn22fb9d891ea8',
        //     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        // }
    };
    
    fetch(url)
        .then(response=>response.json())
        .then(response => {
            temp.textContent = `${response.temp}°C`;
            place.textContent = city;
            console.log(response)
        
        }) 
        .catch(error => console.error(error));
    
})


