const leftBtns = document.getElementsByClassName('leftBtn');
const rightBtns = document.getElementsByClassName('rightBtn');

for(let leftBtn of leftBtns){
    leftBtn.addEventListener("click",(event)=>{
        var toggler = event.target.parentElement.querySelector('.toggleThumb');
        toggler.style.left = '0.4%';
    });
}

for(let rightBtn of rightBtns){
    rightBtn.addEventListener("click",(event)=>{
        var toggler = event.target.parentElement.querySelector('.toggleThumb');
        toggler.style.left = '49.6%';
    });
}