let units = 'auto';

function searchWeather(whichPage){
    const inputFieldText = document.querySelector('input.box').value;
    const objects = getPlaceDetails(inputFieldText);
    const {name,country,lat,lon} = objects.then(data => {
        let firstResult = data[0];
        return firstResult;
    });

    if(whichPage === 'Dashboard'){
        let currentForecast = getCurrentForecast(lat,lon,units);
        let hourlyForecast = getHourlyForecast(lat,lon,units);
        let dailyForecast = getDailyForecast(lat,lon,units);
        

    }
    else if(whichPage === 'Cities'){
        let cityArr = getNearbyPlaces(lat,lon);

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
        console.error(error);
    }
}