function handlePrev(){
    const ul = document.getElementById("ul");
    const style = ul.currentStyle || window.getComputedStyle(ul);

    const currentMargin =  parseInt(style.marginLeft, 10);
    console.log(currentMargin)

    if(currentMargin > -3100){
        ul.style.marginLeft = `${currentMargin-195}px`
    }
   
}

function handleNext(){
    const ul = document.getElementById("ul");
    const style = ul.currentStyle || window.getComputedStyle(ul);

    const currentMargin =  parseInt(style.marginLeft);
    console.log(currentMargin)

    if(currentMargin < 0){
        ul.style.marginLeft = `${currentMargin+195}px`
    }
}