// Background Color Change Toggle Button

var x='white';
function backgroundColorChange(){
    const element = document.getElementById('main-page');
    const element1 = document.getElementById('nav-bar');
    const element2 = document.getElementById('charA');
    const element3 = document.getElementById('hire-me');
    if(x==='white'){
        element.style.backgroundColor="white";
        element.style.color='black';
        element1.style.backgroundColor='red';
        element1.style.color='black';
        element2.style.color='white';
        x='black';
    }
    else{
        element.style.backgroundColor='black';
        element.style.color='white';
        element1.style.backgroundColor='rgba(178, 169, 169, 0.301)';
        element1.style.color='white';
        element2.style.color='red';
        x='white';
    }
}

document.getElementById('theme').onclick=function(){
    backgroundColorChange();
}

// ------------ Submit button -------------


