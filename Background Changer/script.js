
// for mixed colour when click
/*
const body = document.body;

body.addEventListener("click",changeBackgroundColor);

function changeBackgroundColor(){

    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;

}

function getRandomColor() {
    const letters = '89ABCDEF';
    let color = "#"
    
    for(let i =0; i < 6; i++){
        color +=letters[Math.floor(Math.random() * 16)];
        console.log(color);
    }    
}    
*/
// for light colour when click 

/*
const body = document.body;

body.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    const lightRandomColor = getLightRandomColor();
    body.style.backgroundColor = lightRandomColor;
}

function getLightRandomColor() {
    const letters = '89ABCDEF'; // Use lighter colors, excluding '01234567'
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 8)]; // Use the first 8 characters for lighter shades
    }

    return color;
}

return color;
*/

//for only dark colour when click

const body = document.body;

body.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    const darkRandomColor = getDarkRandomColor();
    body.style.backgroundColor = darkRandomColor;
}    

function getDarkRandomColor() {
    const letters = '01234567'; // Use only the darker colors
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 8)];
    }    

    return color;
}    



