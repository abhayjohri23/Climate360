function searchWeather(){
    var inputFieldText = document.querySelector('input.box').value;
    var objects = getPlaceDetails(inputFieldText);
    console.log(objects);
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
        const result = fetch(url, options)
        .then(response => {
            return response.json();
        });
        return result;
    } catch (error) {
        console.error(error);
    }
} 