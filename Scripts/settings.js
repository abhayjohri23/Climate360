const leftBtns = document.getElementsByClassName('leftBtn');
const rightBtns = document.getElementsByClassName('rightBtn');

for(let leftBtn of leftBtns){
    leftBtn.addEventListener("click",(event)=>{
        var toggler = event.target.parentElement.querySelector('.toggleThumb');
        toggler.style.left = '0.4%';
        setUnits('us');
    });
}

for(let rightBtn of rightBtns){
    rightBtn.addEventListener("click",(event)=>{
        var toggler = event.target.parentElement.querySelector('.toggleThumb');
        toggler.style.left = '49.6%';
        setUnits('uk');
    });
}

const leftToggle = document.querySelector('.leftToggle');
leftToggle.addEventListener("click",(event) => {
    var toggler = event.target.parentElement.querySelector('.switchThumb');
    toggler.style.left = '0.4%'
    setThemes('dark');
});

const rightToggle = document.querySelector('.rightToggle');
rightToggle.addEventListener("click",(event) => {
    var toggler = event.target.parentElement.querySelector('.switchThumb');
    toggler.style.left = '44%'
    setThemes('light');
});

function setPositions(){
    let toggleThumbs = document.querySelectorAll('.toggleThumb');
    for(thumb of toggleThumbs){
        thumb.style.left = (units === 'uk') ? '49.6%' : '0.4%';
    }

    document.querySelector('#themesChange').querySelector('.switchThumb').style.left = (theme === 'dark') ? '0.4%':'44%';
}

setPositions();
