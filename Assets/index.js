const APIkey = '0db0ce786ae41bdff606b62d15ada316';

//Grabbing elements that I will dynamically update using the DOM
const spanEl = document.getElementById('emoji')
const ccHumid = document.getElementById('cc-humid')
const ccWind = document.getElementById('cc-wind')
const ccTemp = document.getElementById('cc-temp')
const currentCityDisplay = document.getElementById('current-city');
const searchBtn = document.getElementById('searchBtn')
const searchBox = document.getElementById('search'); 

// Function to update the city history
function updateCityHistory(city) {
    let cityHistory = JSON.parse(localStorage.getItem("cityHistory")) || [];
    cityHistory.push(city);
    localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
  
    // Call a function to update the display of city history, e.g., renderCityHistory();
  }
  
  // Function to render the city history
  function renderCityHistory() {
    const cityHistory = JSON.parse(localStorage.getItem("cityHistory")) || [];
    historyContainer.innerHTML = "";
  
    cityHistory.forEach((city) => {
      const historyItem = document.createElement("div");
      historyItem.textContent = city;
      historyContainer.appendChild(historyItem);
    });
  }
  
  // Initial rendering of city history on page load
  renderCityHistory();

  //function to display weather data for cities which contains the fetch() to the API data.
async function searchCities(city) {
    
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIkey}`
    ) .then(function(res){
        return res.json()
        
    }) .then(function(weatherData){
        console.log(weatherData.list[0])
        currentCityDisplay.textContent = weatherData.city.name
        ccTemp.textContent = 'Temp: ' + weatherData.list[0].main.temp
        ccHumid.textContent = 'Humidity: ' + weatherData.list[0].main.humidity
        ccWind.textContent = 'Wind Speed: ' + weatherData.list[0].wind.speed
        const icon = weatherData.list[0].weather[0].icon
        const iconLink = `https://openweathermap.org/img/wn/${icon}.png`
        const iconImg = `<img src='${iconLink}' alt='weather image'>`
        spanEl.innerHTML = iconImg


        let fiveDayArray = weatherData.list.filter(day => day.dt_txt.includes('12:00:00'))
        let fiveDaySection = document.querySelector('.five-day-section')
        let fiveDayCards = ''
        for (let i = 0; i < fiveDayArray.length; i++) {
            let cardDate = new Date(fiveDayArray[i].dt_txt).toLocaleString().split(',')[0]
            let cardIcon = fiveDayArray[i].weather[0].icon
            let cardLink = `https://openweathermap.org/img/wn/${cardIcon}.png`
            fiveDayCards += `
           
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title" id="day-1">${cardDate}</h5>
                                <div id="emoji-1"><img src='${cardLink}' alt='weather image'></div>
                                <p id="temp-d1">Temp: ${fiveDayArray[i].main.temp}</p>
                                <p id="wind-d1">Wind: ${fiveDayArray[i].wind.speed}f</p>
                                <p id="humid-d1">Humidity: ${fiveDayArray[i].main.humidity}</p>
                            </div>
                          </div>
                        </div>
            `;
            fiveDaySection.innerHTML = fiveDayCards
        }
    })

   
    
}

function updateCityHistory(city) {
    let cityHistory = JSON.parse(localStorage.getItem("cityHistory")) || [];
    cityHistory.push(city);
    localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
  

  }
  
  
//click event for city search
searchBtn.addEventListener('click', function(event){
    event.preventDefault()
    let city = searchBox.value.trim()
    searchCities(city)
})
