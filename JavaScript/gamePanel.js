import * as orderGen from '../JavaScript/orderGeneration.js';
import * as imgSrc from '../JavaScript/imageSources.js';
import * as gameSequense from './gameSequense.js';

const headerTime = document.getElementById("timeLeftHeader");
const startTimerBtn = document.getElementById("testStartTimer");
const timeSlider = document.getElementById("myRange");

timeSlider.value = 0;
timeSlider.dispatchEvent(new Event("input")); 

timeSlider.oninput = function() {
    let imageUrl = "";

    if (this.value <= 49) {
        imageUrl = "../Images/misc/sunSlider.png";
    } 
    else if (this.value >= 50 && this.value <= 75) {
        imageUrl = "../Images/misc/doubleSlider.png";
    } 
    else if (this.value >= 76) {
        imageUrl = "../Images/misc/moonSlider.png";
    }

    if (imageUrl) {
        this.style.setProperty("--thumb-image", `url(${imageUrl})`);
    }

    var x = this.value ;
    var color = 'linear-gradient(90deg, rgb(130, 121, 178)' + x + '%, rgb(255, 241, 143)' + x + '%)';
    this.style.background = color;
} 

let timeMin = 5;
let timeSec = 0;
let sliderUpdateCount = 0;
let myInterval;

startTimerBtn.onclick = startTimer;

export function startTimer(){
    timeSlider.value = 0;
    timeSlider.dispatchEvent(new Event("input"));
    timeMin = 5;
    timeSec = 0;
     // Clear any existing interval before starting a new one
     clearInterval(myInterval);

     // Start the timer
     myInterval = setInterval(timeUpdate, 1000);
}

export function stopTimer(){
    clearInterval(myInterval);
}

function timeUpdate(){
    if (timeMin == 0 && timeSec == 0) {
        clearInterval(myInterval); 
        return;
    }

    if (timeSec == 0) {
        timeMin--;      // Reduce minutes
        timeSec = 59;   // Reset seconds
        sliderUpdateCount++;
    } 
    else {
        timeSec--;      // Reduce seconds
        sliderUpdateCount++;
    }

    if(sliderUpdateCount == 3){
        timeSlider.value++;
        timeSlider.dispatchEvent(new Event("input"));
        sliderUpdateCount = 0;
    }

    headerTime.textContent = `Time Left: ${timeMin} min ${timeSec} sec`;
}

const newCustomerBtn = document.getElementById("newCustomer");
const removeCustomerBtn = document.getElementById("removeCustomer");

newCustomerBtn.onclick = orderGen.newOrder;

removeCustomerBtn.onclick = function(){
    if(orderGen.isOrderGen[1]){
        orderGen.isOrderGen[1]=false;
        orderGen.orderLines[1]="null";

        document.getElementsByClassName("order")[1].classList.add("hidden");
        document.getElementsByClassName("customer")[1].classList.add("hidden");

        document.getElementsByClassName("customerImg")[1].src = "";
        document.getElementsByClassName("toppingImg")[1].src = "";
        document.getElementsByClassName("sugarImg")[1].src = "";
        document.getElementsByClassName("cookieImg")[1].src = "";
        document.getElementsByClassName("specialImg")[1].src = "";
        return;
    }
    if(orderGen.isOrderGen[0]){
        orderGen.isOrderGen[0]=false;
        orderGen.orderLines[0]="null";
        
        document.getElementsByClassName("order")[0].classList.add("hidden");
        document.getElementsByClassName("customer")[0].classList.add("hidden");

        document.getElementsByClassName("customerImg")[1].src = "";
        document.getElementsByClassName("toppingImg")[1].src = "";
        document.getElementsByClassName("sugarImg")[1].src = "";
        document.getElementsByClassName("cookieImg")[1].src = "";
        document.getElementsByClassName("specialImg")[1].src = "";
    }
}

document.getElementById("dayCountGame").textContent = `Day ${localStorage.moneyDay.split(",")[1]}`

document.getElementById("teaCupTake").src = imgSrc.cupImageSource[localStorage.selectedCupKettle.split(",")[0]];
document.getElementById("teaTake").src = imgSrc.kettleImageSource[localStorage.selectedCupKettle.split(",")[1]];