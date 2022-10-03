import { UI } from "./dom.js";

const handleMenu = () => {
    console.log(lateralMenu);
    if (lateralMenu.target.classList.contains('header__lateral-hidden')) {
        lateralMenu.target.classList.remove('header__lateral-hidden');
    } else {
        lateralMenu.target.classList.add('header__lateral-hidden');
    }
}


const buttonMenu = new UI('lateral__menu', 'click', handleMenu);
const buttonClose = new UI('close__menu', 'click', handleMenu);
const lateralMenu = new UI('header__lateral')

buttonMenu.listenEvent();
buttonClose.listenEvent();
