let units = 'us';
String.prototype.formulate = function(){
    return this.substring(0,1).toUpperCase() + this.substring(1).toLowerCase();
}
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
    'Mostly clear' : [50,49],  
    'Partly clear (night)' : [25,9], 
    'Partly clear' : [25,9], 
    'Mostly cloudy (night)' : [25,9], 
    'Cloudy (night)' : [25,9], 
    'Overcast with low clouds (night)' : [102,0],
    'Rain shower (night)' : [102,0], 
    'Local thunderstorms (night)' : [0,49], 
    'Snow shower (night)' : [0,49],
    'Rain and snow (night)' : [0,49], 
    'Possible freezing rain (night)' : [102,0],
    'Possible freezing rain' : [102,0]      
};

const hfCoords = {
    'Sunny' : [8,11],  
    'Mostly sunny' : [8,11], 
    'Partly sunny' : [29,89], 
    'Mostly cloudy' : [29,89], 
    'Cloudy' : [93,49], 
    'Overcast' : [93,49], 
    'Overcast with low clouds' : [93,49], 
    'Fog': [29,49],
    'Light rain' : [8,89],
    'Rain': [72,11],
    'Hail':[72,49],
    'Possible rain' : [8,89],
    'Rain shower' : [72,11],
    'Thunderstorm' : [72,49],
    'Local thunderstorms' : [8,89],
    'Light snow' : [51,11], 
    'Snow': [72,11],
    'Possible snow' : [51,89], 
    'Snow shower' : [93,11], 
    'Rain and snow' : [93,11], 
    'Possible rain and snow' : [51,89], 
    'Rain and snow' : [93,11], 
    'Freezing rain' : [93,11], 
    'Possible freezing rain' : [51,11], 
    'Clear (night)' : [51,49], 
    'Clear' : [51,49], 
    'Mostly clear (night)' : [51,50], 
    'Mostly clear' : [51,50], 
    'Partly clear (night)' : [29,11], 
    'Partly clear' : [29,11], 
    'Mostly cloudy (night)' : [29,11], 
    'Cloudy (night)' : [29,11], 
    'Overcast with low clouds (night)' : [93,11], 
    'Rain shower (night)' : [93,11], 
    'Local thunderstorms (night)' : [8,49], 
    'Snow shower (night)' : [8,49], 
    'Rain and snow (night)' : [8,49], 
    'Possible freezing rain (night)' : [93,11]
};

const dailyCoords = {
    'Sunny' : [0,9],  
    'Mostly sunny' : [0,9], 
    'Partly sunny' : [28,96], 
    'Mostly cloudy' : [28,96], 
    'Cloudy' : [95,52], 
    'Overcast' : [95,52], 
    'Overcast with low clouds' : [95,52], 
    'Fog': [28,52],
    'Light rain' : [0,96],
    'Rain': [72,9],
    'Hail':[72,52],
    'Possible rain' : [0,96],
    'Rain shower' : [72,9],
    'Thunderstorm' : [72,52],
    'Local thunderstorms' : [0,96],
    'Light snow' : [49,9], 
    'Snow': [72,9],
    'Possible snow' : [49,96], 
    'Snow shower' : [95,9], 
    'Rain and snow' : [95,9], 
    'Possible rain and snow' : [51,96], 
    'Rain and snow' : [95,9], 
    'Freezing rain' : [95,9], 
    'Possible freezing rain' : [49,9], 
    'Clear (night)' : [49,52], 
    'Clear' : [49,52], 
    'Mostly clear (night)' : [49,52], 
    'Mostly clear' : [49,52], 
    'Partly clear (night)' : [28,9], 
    'Partly clear' : [28,9], 
    'Mostly cloudy (night)' : [28,9], 
    'Cloudy (night)' : [28,9], 
    'Overcast with low clouds (night)' : [95,9], 
    'Rain shower (night)' : [95,9], 
    'Local thunderstorms (night)' : [0,52], 
    'Snow shower (night)' : [0,52], 
    'Rain and snow (night)' : [0,52], 
    'Possible freezing rain (night)' : [95,9]
};

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const ukUnits = ['°C','m/s','%','km','°C','%','°C','%'];
const usaUnits = ['°F','mph','%','miles','°F','%','°F','%'];

function searchWeather(whichPage){
    document.querySelector('#seeMoreBtn').style.visibility='visible';
    document.querySelector('.airConditions').style.overflowY='hidden';

    const inputFieldText = document.querySelector('input.box').value;
    const objects = getPlaceDetails(inputFieldText);

    if(whichPage === 'Dashboard'){
        //Current forecast filling in box:nth-child(3/4).
        objects.then(data => {
            return data[0];
        })
        .then(placeData => {
            return [placeData.name, placeData.country, getCurrentForecast(placeData.lat,placeData.lon,units)];
        })
        .then(data => {
            return fillDataPane(data[2],data[0],data[1]);
        });

        //Hourly forecast filling up in box:nth-child(5)
        objects.then(placeData => {
            return getHourlyForecast(placeData[0].lat,placeData[0].lon,units);
        })
        .then(data => {
            return fillHourlyDataPane(data);
        });

        //Daily Forecast filling in the box:nth-child(6)
        objects.then(placeData => {
            return getDailyForecast(placeData[0].lat,placeData[0].lon,units);
        })
        .then(data => {
            return fillDailyDataPane(data);
        });

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
            'X-RapidAPI-Key': '75c0bdbadamshcac043a0763c7c1p144fd0jsn7b1f28fe6afc',
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
            'X-RapidAPI-Key': '75c0bdbadamshcac043a0763c7c1p144fd0jsn7b1f28fe6afc',
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
            'X-RapidAPI-Key': '75c0bdbadamshcac043a0763c7c1p144fd0jsn7b1f28fe6afc',
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
            'X-RapidAPI-Key': '75c0bdbadamshcac043a0763c7c1p144fd0jsn7b1f28fe6afc',
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
    console.log(currentForecast);
    currentForecast.then(data => {
        let mainInfo = data.current;
        let dataPane = document.querySelector('#dataPane');
        let airConditionBox = document.querySelector('.airConditions');
        let iconName = mainInfo.summary.toString();
        let points = dbCoords[iconName];
    
        //Main Data Pane population 
        dataPane.querySelector('#cityName').innerHTML = name;
        dataPane.querySelector('#countryName').innerHTML = ` , ${country}`;

        dataPane.querySelector('#chanceOfRain').innerHTML = mainInfo.summary.replaceAll('_',' ').formulate();
        dataPane.querySelector('#avgTemp').innerHTML = `${mainInfo.temperature.toFixed(1).toString()}°`;
        
        document.querySelector('.mainImageIcon').style.backgroundPosition = `${points[0]}% ${points[1]}%`;

        //Air conditions Population
        let airCondsOutput = airConditionBox.querySelectorAll('.airCondValue');
        let unitPlace = airConditionBox.querySelectorAll('.units');
        let airCondsInput = [mainInfo.feels_like,mainInfo.wind.speed,mainInfo.humidity,mainInfo.visibility,mainInfo.dew_point,mainInfo.uv_index,mainInfo.wind_chill,mainInfo.cloud_cover];
        const currUnits = (units==='us') ? usaUnits : ukUnits;

        for(let i=0;i<airCondsInput.length;++i){
            airCondsOutput[i].innerHTML = airCondsInput[i].toFixed(1).toString();
            unitPlace[i].innerHTML = currUnits[i];
        }
    });


    return ;
}

function fillHourlyDataPane(hourlyForecast){
    const mainInfo = hourlyForecast.hourly.data;          //Returns an array of mainInfo for each hour
    const hourlyModules = document.querySelectorAll('.hourlyModules');
    
    let i = 0; 
    for(let module of hourlyModules){
        const time = module.querySelector('.divSpans');

        const imageDiv = module.querySelector('.foreCastcontainer').querySelector('.forecastBox');
        const tempDiv = module.querySelector('.foreCastcontainer').querySelector('.divSpans');
        
        time.innerHTML = mainInfo[i].date.substr(11,5);
        tempDiv.innerHTML = `${mainInfo[i].feels_like}°`;
        
        let iconName = mainInfo[i].summary;
        let points = hfCoords[iconName];

        imageDiv.style.backgroundPosition = `${points[0]}% ${points[1]}%`;
        i+=3;
    }

    return ;
}

function fillDailyDataPane(dailyForecast){
    const mainInfo = dailyForecast.daily.data;
    let containers = document.querySelectorAll('.daysFCitem');
    let i = 0;

    for(let container of containers){
        let whichDay = container.querySelector('.whichDay');
        let fcIcon = container.querySelector('.fcIcon');
        let whatWeather = container.querySelector('.whatWeather');
        let temp = container.querySelector('.max_min');

        whichDay.innerHTML = days[(new Date(mainInfo[i].day)).getDay()%7];
        whatWeather.innerHTML = mainInfo[i].weather.replaceAll('_',' ').toUpperCase().formulate();
        temp.innerHTML = mainInfo[i].temperature_max.toFixed(0) + "/" + mainInfo[i].temperature_min.toFixed(0);

        let iconName = mainInfo[i].weather.replaceAll('_',' ').formulate();
        let points = dailyCoords[iconName];

        fcIcon.style.backgroundPosition = `${points[0]}% ${points[1]}%`;
        ++i;
    }

    return ;
}