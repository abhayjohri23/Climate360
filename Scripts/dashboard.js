const seeMoreBtn = document.querySelector('#seeMoreBtn');
seeMoreBtn.addEventListener("click",event => {
    event.target.style.visibility = 'hidden';
    document.querySelector('.airConditions').style.overflow = 'auto';
});

const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2e0b7c2f57mshbaf13e7cc92be15p16369bjsnc34a01c4c15a',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}