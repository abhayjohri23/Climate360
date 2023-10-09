let dropBtns = document.querySelectorAll('.drops');
let sections = document.querySelectorAll('.cont');

function resetAll(){
    for(let sectn of sections){
        var pTag = sectn.querySelector('p');
        var spanTag = sectn.querySelector('span');

        sectn.style.backgroundColor = 'var(--box-color)';
        sectn.style.border = 'none';  

        pTag.style.color = 'var(--icon-color-before)';
        pTag.style.fontWeight = '650';

        spanTag.style.transform = 'rotate(0deg)';
        spanTag.style.color = 'var(--icon-color-before)';
    }
}

for(let sectn of sections){
    sectn.addEventListener('click', event =>{
        resetAll();  
        var target = event.target;
        var pTag = event.target.querySelector('p');
        var spanTag = event.target.querySelector('span');

        target.style.backgroundColor = 'inherit';
        target.style.border = '1px solid #0095ff';  

        pTag.style.color = 'var(--icon-color-after)';
        pTag.style.fontWeight = '500';
        
        spanTag.style.transform = 'rotate(-90deg)';
        spanTag.style.color = 'var(--icon-color-after)';
        
        var contentTag = document.querySelector('#content');
        var text = fetch('../Text files/terms-and-conditions.txt').then(response => response.data).catch(error=>console.log(error));
        async function getResponse(text){
            contentTag.innerHTML = text.then(resp => {
                text.text();
            });
        }

        getResponse(text);
        
    });
}