const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function islampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if ( !islampBroken () ) {
    lamp.src='img lamp/ligada.jpg';
}
}
function lampOff() {
    if ( !islampBroken () ) {
    lamp.src='img lamp/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src='img lamp/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('dblclick', lampBroken);






