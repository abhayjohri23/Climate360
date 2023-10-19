let units = 'auto';
const dbCoords = {
    'Sunny' : [0,9],  
    'Mostly sunny' : [0,9], 
    'Partly sunny' : [25,91], 
    'Mostly cloudy' : [25,91], 
    'Cloudy' : [102,47], 
    'Overcast' : [102,47], 
    'Overcast with low clouds' : [102,49], 
    'Fog': [25,49],
    'Light rain' : [0,91],
    'Rain': [74,9],
    'Hail':[74,49],
    'Possible rain' : [0,91],
    'Rain shower' : [74,9],
    'Thunderstorm' : [74,49],
    'Local thunderstorms' : [0,91],
    'Light snow' : [50,9], 
    'Snow': [74,9],
    'Possible snow' : [50,91], 
    'Snow shower' : [102,9], 
    'Rain and snow' : [102,9], 
    'Possible rain and snow' : [50,91], 
    'Rain and snow' : [102,0], 
    'Freezing rain' : [102,9], 
    'Possible freezing rain' : [50,9], 
    'Clear (night)' : [50,49], 
    'Clear' : [50,49], 
    'Mostly clear (night)' : [50,49], 
    'Partly clear (night)' : [25,9], 
    'Mostly cloudy (night)' : [25,9], 
    'Cloudy (night)' : [25,9], 
    'Overcast with low clouds (night)' : [102,0], 
    'Rain shower (night)' : [102,0], 
    'Local thunderstorms (night)' : [0,49], 
    'Snow shower (night)' : [0,49], 
    'Rain and snow (night)' : [0,49], 
    'Possible freezing rain (night)' : [102,0]   
};
function searchWeather(whichPage){
    const inputFieldText = document.querySelector('input.box').value;
    const objects = getPlaceDetails(inputFieldText);

    if(whichPage === 'Dashboard'){
        objects.then(data => {
            return data[0];
        })
        .then(placeData => {
            return [placeData.name, placeData.country, getCurrentForecast(placeData.lat,placeData.lon,units)];
        })
        .then(data => {
            return fillDataPane(data[2],data[0],data[1]);
        });


        let hourlyForecast = getHourlyForecast(lat,lon,units);
        let dailyForecast = getDailyForecast(lat,lon,units);
        
        

    }
    else if(whichPage === 'Cities'){
        let cityArr = getNearbyPlaces(lat,lon);
        let currentForecast;
    }
    else{
        return ;
    }
}

function getPlaceDetails(placeName){
    placeName = placeName.trim().replaceAll(" ","%20");
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${placeName}&language=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e0b7c2f57mshbaf13e7cc92be15p16369bjsnc34a01c4c15a',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const result = fetch(url, options).then(response => {
            return response.json();
        });
        return result;
    } catch (error) {
        alert(error);
    }
} 

function getDailyForecast(lat,lon,units){
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=${lat}&lon=${lon}&language=en&units=${units}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e0b7c2f57mshbaf13e7cc92be15p16369bjsnc34a01c4c15a',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const result = fetch(url, options).then(response => {
            return response.json();
        });
        return result;
    } catch (error) {
        alert(error);
    }
}

function getHourlyForecast(lat,lon,units){
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/hourly?lat=${lat}&lon=${lon}&timezone=auto&language=en&units=${units}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e0b7c2f57mshbaf13e7cc92be15p16369bjsnc34a01c4c15a',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };
    
    try {
        const result = fetch(url, options).then(response => {
            return response.json();
        });
        return result;
    } catch (error) {
        alert(error);
    }
}

function getCurrentForecast(lat,lon,units){
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=${lat}&lon=${lon}&timezone=auto&language=en&units=${units}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e0b7c2f57mshbaf13e7cc92be15p16369bjsnc34a01c4c15a',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const result = fetch(url, options).then(response => {
            return response.json();
        });
        return result;
    } catch (error) {
        alert(error);
    }
}

function getNearbyPlaces(lat,lon){
    let queryParam = ((lat<0) ? lat.toString() : ('+'+lat.toString())) + ((lon<0) ? lon.toString() : ('+'+lon.toString()));
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${queryParam}/nearbyCities?radius=100`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e0b7c2f57mshbaf13e7cc92be15p16369bjsnc34a01c4c15a',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    try {
        const result = fetch(url, options).then(response => {
            return response.json();
        });
        return result;
    } catch (error) {
        alert(error);
    }
}

function fillDataPane(currentForecast,name,country){
    currentForecast.then(data => {
        let mainInfo = data.current;
        let dataPane = document.querySelector('#dataPane');
        let airConditionBox = document.querySelector('.airConditions');
    
        //Main Data Pane population 
        dataPane.querySelector('#cityName').innerHTML = name;
        console.log(dataPane.querySelector('#countryName'));
        dataPane.querySelector('#countryName').innerHTML = ` , ${country}`;

        dataPane.querySelector('#chanceOfRain').innerHTML = `Chance of rain: ${(100 - mainInfo.cloud_cover)}%`;
        dataPane.querySelector('#avgTemp').innerHTML = `${mainInfo.temperature.toFixed(1).toString()}°`;
        
        let iconName = mainInfo.summary.toString();
        let points = dbCoords[iconName];

        console.log("Main Data consoles");
        console.log(iconName);
        console.log(points);

        document.querySelector('.mainImageIcon').style.backgroundPosition = `${points[0]}% ${points[1]}%`;

        //Air conditions Population
        let airCondsOutput = airConditionBox.querySelectorAll('.airCondValue');
        let airCondsInput = [mainInfo.feels_like,mainInfo.wind.speed,mainInfo.humidity,mainInfo.visibility,mainInfo.dew_point,mainInfo.uv_index,mainInfo.wind_chill,mainInfo.cloud_cover];
        
        console.log("Airconditions");
        console.log(airCondsInput);

        for(let i=0;i<airCondsInput.length;++i){
            airCondsOutput[i].innerHTML = airCondsInput[i].toFixed(1).toString();
        }
    });


    return ;
}