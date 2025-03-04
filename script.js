fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
    });

fetch('side-bar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('side-bar-container').innerHTML = data;
    });

fetch('login-page.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('login-page-container').innerHTML = data;
    });
    
//acionamento da side bar
function bars(){
    const bar = document.getElementById('side-bar');

    if(bar.style.left === '-250px'){
        bar.style.left = '0px';
    } else {
        bar.style.left = '-250px';
    }
}