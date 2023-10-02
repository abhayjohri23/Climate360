const seeMoreBtn = document.querySelector('#seeMoreBtn');
seeMoreBtn.addEventListener("click",event => {
    event.target.style.visibility = 'hidden';
    document.querySelector('.airConditions').style.overflow = 'auto';
});