const seeMoreBtn = document.querySelector('#seeMoreBtn');
seeMoreBtn.addEventListener("click",event => {
    event.target.style.visibility = 'hidden';
    document.querySelector('.airConditions').style.overflow = 'auto';
});

initialLoad('dashboard');

if(theme === 'light'){
    document.documentElement.style.setProperty('--icon-color-after', '#35455e');
    document.documentElement.style.setProperty('--icon-color-before', '#969ca5');
    document.documentElement.style.setProperty('--background-color', '#dedede');
    document.documentElement.style.setProperty('--box-color', '#eaecef');
    document.documentElement.style.setProperty('--font-color', '#444d5b');
    document.documentElement.style.setProperty('--heading-color', '#a0a5ae');
    document.documentElement.style.setProperty('--scroller-thumb-color','#747981b3');
}
else{
    document.documentElement.style.setProperty('--icon-color-after', '#F0F1F1');
    document.documentElement.style.setProperty('--icon-color-before', '#737880');
    document.documentElement.style.setProperty('--background-color', '#0b131e');
    document.documentElement.style.setProperty('--box-color', '#202B3B');
    document.documentElement.style.setProperty('--font-color', '#e0e1e1');
    document.documentElement.style.setProperty('--heading-color', '#8c929c');
    document.documentElement.style.setProperty('--scroller-thumb-color','#747981b3');
}