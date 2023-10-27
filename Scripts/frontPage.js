const urlParams = new URLSearchParams(window.location.search);
const theme = urlParams.get('theme');

if(theme === 'light'){
    document.documentElement.style.setProperty('--frontBox-color', '#eaecef');
    document.documentElement.style.setProperty('--background-color', '#f5f5f5');
    document.documentElement.style.setProperty('--font-color','#202b3b');
}
else if(theme === 'dark'){
    document.documentElement.style.setProperty('--frontBox-color', '#202B3B');
    document.documentElement.style.setProperty('--background-color', '#0b131e');
    document.documentElement.style.setProperty('--font-color','#e0e1e1');
}

