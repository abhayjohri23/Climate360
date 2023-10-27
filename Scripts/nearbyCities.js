let btnGroups = document.querySelectorAll('.middlePane');
function offMode(btnGrps){
    for(let btns of btnGrps){
        btns.style.backgroundColor = 'var(--box-color)';
        btns.style.outline = '0';
        btns.style.border = '0';
        btns.querySelector('.nearMeIcon').style.visibility = 'hidden';
    }
}

for(let module of btnGroups){
    module.addEventListener("click",(event) => {
        offMode(btnGroups);
        event.target.style.backgroundColor = 'inherit';
        event.target.style.border = '1px solid #092944';
        event.target.style.outline = '1px solid #0461A5';
        event.target.querySelector('.nearMeIcon').style.visibility = 'visible';
        
        const placeName = event.target.querySelector('.location').innerHTML;
        console.log(placeName);
        for(let i=0;i<placesArr.length;++i){
            if(placesArr[i][2].toLowerCase() === placeName.toLowerCase()){
                let dataPane = document.querySelector('#dataPane');
                let iconName = currentForecastData[i].summary.toString();
                let points = dbCoords[iconName];

                dataPane.querySelector('#cityName').innerHTML = placesArr[i][2];
                dataPane.querySelector('#chanceOfRain').innerHTML = currentForecastData[i].summary.replaceAll('_',' ').formulate();
                dataPane.querySelector('#avgTemp').innerHTML = `${currentForecastData[i].temperature.toFixed(0).toString()}°`;
                
                document.querySelector('.mainImageIcon').style.backgroundPosition = `${points[0]}% ${points[1]}%`;

                fillHourlyDataPane(hourlyForecastData[i]);
                fillDailyDataPane(dailyForecastData[i]);
                break;
            }
        }
    });
}

initialLoad('Cities');

if(theme === 'light'){
    document.documentElement.style.setProperty('--icon-color-after', '#35455e');
    document.documentElement.style.setProperty('--icon-color-before', '#969ca5');
    document.documentElement.style.setProperty('--background-color', '#dedede');
    document.documentElement.style.setProperty('--box-color', '#eaecef');
    document.documentElement.style.setProperty('--font-color', '#444d5b');
    document.documentElement.style.setProperty('--heading-color', '#a0a5ae');
    document.documentElement.style.setProperty('--scroller-thumb-color','#747981b3');
}
else{
    document.documentElement.style.setProperty('--icon-color-after', '#F0F1F1');
    document.documentElement.style.setProperty('--icon-color-before', '#737880');
    document.documentElement.style.setProperty('--background-color', '#0b131e');
    document.documentElement.style.setProperty('--box-color', '#202B3B');
    document.documentElement.style.setProperty('--font-color', '#e0e1e1');
    document.documentElement.style.setProperty('--heading-color', '#8c929c');
    document.documentElement.style.setProperty('--scroller-thumb-color','#747981b3');
}