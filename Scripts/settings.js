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
    applytheme('dark');
});

const rightToggle = document.querySelector('.rightToggle');
rightToggle.addEventListener("click",(event) => {
    var toggler = event.target.parentElement.querySelector('.switchThumb');
    toggler.style.left = '44%'
    setThemes('light');
    applytheme('light');
});

function setPositions(){
    let toggleThumbs = document.querySelectorAll('.toggleThumb');
    for(thumb of toggleThumbs){
        thumb.style.left = (units === 'uk') ? '49.6%' : '0.4%';
    }

    document.querySelector('#themesChange').querySelector('.switchThumb').style.left = (theme === 'dark') ? '0.4%':'44%';
}

setPositions();

function applytheme(theme){
    if(theme === 'light'){
        document.documentElement.style.setProperty('--icon-color-after', '#35455e');
        document.documentElement.style.setProperty('--icon-color-before', '#969ca5');
        document.documentElement.style.setProperty('--background-color', '#dedede');
        document.documentElement.style.setProperty('--box-color', '#eaecef');
        document.documentElement.style.setProperty('--font-color', '#444d5b');
        document.documentElement.style.setProperty('--heading-color', '#a0a5ae');
        document.documentElement.style.setProperty('--scroller-thumb-color','#747981b3');
        document.documentElement.style.setProperty('--scrollBar-container-color','#c4cad3');
        document.documentElement.style.setProperty('--toggleThumb-color','rgba(198, 201, 205, 0.4);');
        document.documentElement.style.setProperty('--switch-color','#ccc');
        document.documentElement.style.setProperty('--switch-bg-color','#2c74da');
    }
    else{
        document.documentElement.style.setProperty('--icon-color-after', '#F0F1F1');
        document.documentElement.style.setProperty('--icon-color-before', '#737880');
        document.documentElement.style.setProperty('--background-color', '#0b131e');
        document.documentElement.style.setProperty('--box-color', '#202B3B');
        document.documentElement.style.setProperty('--font-color', '#e0e1e1');
        document.documentElement.style.setProperty('--heading-color', '#8c929c');
        document.documentElement.style.setProperty('--scroller-thumb-color','#747981b3');
        document.documentElement.style.setProperty('--scrollBar-container-color','#202B3B');
        document.documentElement.style.setProperty('--toggleThumb-color','#2f4a7d4d');
        document.documentElement.style.setProperty('--switch-color','#2c74da');
        document.documentElement.style.setProperty('--switch-bg-color','#ccc');
    }
}

applytheme(theme);
