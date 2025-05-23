import * as menuConfigModule from './stuffPurcahse.js';
import * as userInformation from '../JavaScript/userInformation.js';
import localStorageSetUp from './localStorageSetUp.js';

localStorageSetUp();

document.getElementById("headerPlayerName").textContent = `Hello, ${localStorage.username}`;

moneyUpdate();

export function moneyUpdate() {
    document.getElementById("headerMoney").textContent = `${Number(localStorage.moneyDay.split(",")[0])}`;
    document.getElementById("headerDayCount").textContent = `Day ${Number(localStorage.moneyDay.split(",")[1])}`;
}

const baseMenuBtn = document.getElementById("baseMenuBtn");
const specialMenuBtn = document.getElementById("specialMenuBtn");
const talentsBtn = document.getElementById("talentsBtn");
const utilitiesVisualBtn = document.getElementById("utilitiesVisualBtn");
const achivementsBtn = document.getElementById("achivementsBtn");
const testingBtn = document.getElementById("testingBtn");

baseMenuBtn.onclick = function(){
    document.getElementsByClassName("menuPanel specialMenu")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel testing")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel achivements")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel utilitiesVisual")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel talents")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel baseMenu")[0].classList.remove("hidden");
}

specialMenuBtn.onclick = function(){
    document.getElementsByClassName("menuPanel baseMenu")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel talents")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel utilitiesVisual")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel achivements")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel testing")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel specialMenu")[0].classList.remove("hidden");
}

talentsBtn.onclick = function(){
    document.getElementsByClassName("menuPanel specialMenu")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel baseMenu")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel utilitiesVisual")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel achivements")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel testing")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel talents")[0].classList.remove("hidden");
}

utilitiesVisualBtn.onclick = function(){
    document.getElementsByClassName("menuPanel specialMenu")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel talents")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel baseMenu")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel achivements")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel testing")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel utilitiesVisual")[0].classList.remove("hidden");
}

achivementsBtn.onclick = function(){
    document.getElementsByClassName("menuPanel specialMenu")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel talents")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel utilitiesVisual")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel baseMenu")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel testing")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel achivements")[0].classList.remove("hidden");
}

testingBtn.onclick = function(){
    document.getElementsByClassName("menuPanel specialMenu")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel talents")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel utilitiesVisual")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel achivements")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel baseMenu")[0].classList.add("hidden");
    document.getElementsByClassName("menuPanel testing")[0].classList.remove("hidden");
}

let scrollContainerKettle = document.getElementsByClassName("optionGallery")[0];
let leftKettleScroll = document.getElementById("leftKettle");
let rightKettleScroll = document.getElementById("rightKettle");

let scrollContainerCup = document.getElementsByClassName("optionGallery")[1];
let leftCupScroll = document.getElementById("leftCup");
let rightCupScroll = document.getElementById("rightCup");

scrollContainerKettle.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainerKettle.scrollLeft += evt.deltaY;
})

leftKettleScroll.addEventListener("click", ()=>{
    scrollContainerKettle.style.scrollBehavior = "smooth";
    scrollContainerKettle.scrollLeft -= 400;
})

rightKettleScroll.addEventListener("click", ()=>{
    scrollContainerKettle.style.scrollBehavior = "smooth";
    scrollContainerKettle.scrollLeft += 400;
})

scrollContainerCup.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainerCup.scrollLeft += evt.deltaY;
})

leftCupScroll.addEventListener("click", ()=>{
    scrollContainerCup.style.scrollBehavior = "smooth";
    scrollContainerCup.scrollLeft -= 400;
})

rightCupScroll.addEventListener("click", ()=>{
    scrollContainerCup.style.scrollBehavior = "smooth";
    scrollContainerCup.scrollLeft += 400;
})

document.getElementById("startDayImg").onclick = function(){
    document.getElementsByClassName("mainMenuPopUp startTheDay")[0].classList.remove("hidden");
    document.getElementsByClassName("blackOutPanel")[0].classList.remove("hidden");
}

document.getElementById("startTheDayCancel").onclick = function(){
    document.getElementsByClassName("mainMenuPopUp startTheDay")[0].classList.add("hidden");
    document.getElementsByClassName("blackOutPanel")[0].classList.add("hidden");
}

document.getElementById("startTheDayBtn").onclick = function(){
    document.getElementsByClassName("mainMenuPopUp startTheDay")[0].classList.add("hidden");
    document.getElementsByClassName("blackOutPanel")[0].classList.add("hidden");
}
