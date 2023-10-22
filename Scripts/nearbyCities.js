let btnGroups = document.querySelectorAll('.middlePane');
function offMode(btnGrps){
    for(let btns of btnGrps){
        btns.style.backgroundColor = '#202B3B';
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
    });
}