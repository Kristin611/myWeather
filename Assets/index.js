const APIkey = '0db0ce786ae41bdff606b62d15ada316';
//curl https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=0db0ce786ae41bdff606b62d15ada316

const searchBox = document.getElementById('search'); //grabbing search input box--need to create a function for this like searchCities() to fetch data
//for search button should I do an on-click=searchCities(), or .addEventListener?

const currentCityDisplay = document.getElementById('current-cty'); //grabbing <h3>Current City</h3> to populate fetch data depending on which city has been searched. Need to create a separate function for this like currentCityDisplay()?
const ccTemp = document.getElementById('cc-temp') //grabbing <p> to populate fetch data for current city's temp.
const ccWind = document.getElementById('cc-wind') //grabbing <p> to populate fetch data for current city's wind.
const ccHumid = document.getElementById('cc-humid') //grabbing <p> to populate fetch data for current city's humidity.
//will the variables above go inside the currentCityDisplay()? 

//5-Day Forecast 

//maybe don't use day.js to populate data--can retreive date from fetch data
