
function offMode(btnGrps){
    for(let btns of btnGrps){
        btns.style.backgroundColor = '#202B3B';
        btns.style.outline = '0';
        btns.style.border = '0';
    }
}

let btnGroups = document.querySelectorAll('.middlePane');
for(let module of btnGroups){
    module.addEventListener("click",(event) => {
        offMode(btnGroups);
        event.target.style.backgroundColor = 'inherit';
        event.target.style.border = '1px solid #092944';
        event.target.style.outline = '1px solid #0461A5';
    });
}