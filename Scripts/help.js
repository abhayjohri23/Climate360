let dropBtns = document.querySelectorAll('.drops');
let sections = document.querySelectorAll('.cont');
let contentArea = document.querySelector('#content');
let faqFileName = 'faqs.txt', ppFileName = 'privacy-policies.txt', tncFileName = 'terms-and-conditions.txt',contactFileName = 'contactUs.txt';


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
        let fileName;
        
        if(pTag.innerHTML == 'TERMS AND CONDITIONS')            fileName = tncFileName;
        else if(pTag.innerHTML == 'PRIVACY POLICY')             fileName = ppFileName;
        else if(pTag.innerHTML == 'CONTACT US')                 fileName = contactFileName;
        else if(pTag.innerHTML == 'GENERAL FAQs')               fileName = faqFileName;

        fetch(`../Text files/${fileName}`)
        .then(response=>{
            return response.text();
        }).then(data=>{
            contentArea.innerHTML = data;
        });
        
        
        
    });
}

if(theme === 'light'){
    document.documentElement.style.setProperty('--icon-color-after', '#35455e');
    document.documentElement.style.setProperty('--icon-color-before', '#969ca5');
    document.documentElement.style.setProperty('--background-color', '#dedede');
    document.documentElement.style.setProperty('--box-color', '#eaecef');
    document.documentElement.style.setProperty('--font-color', '#444d5b');
    document.documentElement.style.setProperty('--scroller-thumb-color','#747981b3');
}
else{
    document.documentElement.style.setProperty('--icon-color-after', '#F0F1F1');
    document.documentElement.style.setProperty('--icon-color-before', '#737880');
    document.documentElement.style.setProperty('--background-color', '#0b131e');
    document.documentElement.style.setProperty('--box-color', '#202B3B');
    document.documentElement.style.setProperty('--font-color', '#e0e1e1');
    document.documentElement.style.setProperty('--scroller-thumb-color','#747981b3');
}
