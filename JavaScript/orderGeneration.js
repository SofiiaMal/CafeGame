import * as imgSource from '../JavaScript/imageSources.js';
import * as gameSequense from '../JavaScript/gameSequense.js';
import localStorageSetUp from './localStorageSetUp.js';

localStorageSetUp();

export let orderLines = ["null", "null"]
export let isOrderGen = [false, false];

class Order{
    cup = "full";

    constructor(topping, sugar, cookies, special, price){
        this.topping = topping;
        this.sugar = sugar;
        this.cookies = cookies;
        this.special = special;
        this.price = price;
    }
}

function orderGeneration(){
    let orderType = Math.floor(Math.random() * 4) + 1;
    let possibleToppings = localStorage.selectedTopings.split(",");
    let possibleSugar = ["no", "one", "two", "three"];
    let possibleCookies = localStorage.selectedCookies.split(",");
    let possibleSpecials = localStorage.selectedSpecials.split(",");

    if(orderType == 1){
        return new Order(
            randomItem(possibleToppings),
            randomItem(possibleSugar),
            "no",
            "no",
            20
        )
    }

    if(orderType == 2 || orderType == 3){
        return new Order(
            randomItem(possibleToppings),
            randomItem(possibleSugar),
            randomItem(possibleCookies),
            "no",
            30
        )
    }

    if(orderType == 4){
        return new Order(
            randomItem(possibleToppings),
            randomItem(possibleSugar),
            randomItem(possibleCookies),
            randomItem(possibleSpecials),
            45
        )
    }

} 

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const toppingImg = document.getElementsByClassName("toppingImg");
const sugarImg = document.getElementsByClassName("sugarImg");
const cookieImg = document.getElementsByClassName("cookieImg");
const specialImg = document.getElementsByClassName("specialImg");

const customerImg = document.getElementsByClassName("customerImg");

export function newOrder(){
    switch (true) {  
        case !isOrderGen[0]:  
            orderLines[0] = orderGeneration(); 
            isOrderGen[0] = true;  
            orderImgUpdate(0);
            break;  
        case !isOrderGen[1]:  
            orderLines[1] = orderGeneration();
            isOrderGen[1] = true; 
            orderImgUpdate(1); 
            break;  
        default:  
            return;
    }

}

function orderImgUpdate(i){
    let tempCustomer = "customer" + (Math.floor(Math.random() * 15) + 1);
    let order = orderLines[i];

    document.getElementsByClassName("teaCupOrderImg")[i].src = imgSource.cupFullImageSource[localStorage.selectedCupKettle.split(",")[0]];
    customerImg[i].src = imgSource.customerImageSource[tempCustomer] || "";
    toppingImg[i].src = imgSource.toppingImageSource[order.topping] || "";
    sugarImg[i].src = imgSource.sugarImageSource[order.sugar] || "";
    cookieImg[i].src = imgSource.cookieImageSource[order.cookies] || "";
    specialImg[i].src = imgSource.specialImageSource[order.special] || "";

    document.getElementsByClassName("order")[i].classList.remove("hidden");
    document.getElementsByClassName("customer")[i].classList.remove("hidden");
}

let toppings = ["", "", ""];
let cookies = ["", "", ""];
let specials = ["", "", "", "", "", ""];
let holding = ["", "", ""];

const toppingJar1 = document.getElementById("toppingJar1");
const toppingJar2 = document.getElementById("toppingJar2");
const toppingJar3 = document.getElementById("toppingJar3");

const cookieBox1 = document.getElementById("cookieBox1");
const cookieBox2 = document.getElementById("cookieBox2");
const cookieBox3 = document.getElementById("cookieBox3");

const specialOrder1 = document.getElementById("specialOrder1");
const specialOrder2 = document.getElementById("specialOrder2");
const specialOrder3 = document.getElementById("specialOrder3");
const specialOrder4 = document.getElementById("specialOrder4");
const specialOrder5 = document.getElementById("specialOrder5");
const specialOrder6 = document.getElementById("specialOrder6");

const specialReceive1 = document.getElementById("specialReceive1");
const specialReceive2 = document.getElementById("specialReceive2");
const specialPaperTable = document.getElementById("specialPaperTable");
const currentlyHolding = document.getElementById("crntlyHoldingImg");

const teaCupTake = document.getElementById("teaCupTake");
const teaKettleTake = document.getElementById("teaTake");
const trashCan = document.getElementById("trashCanGame");
const sugarPileTake = document.getElementById("sugarTake");

const prepTray1 = document.getElementById("prepOrder1");
const prepTray2 = document.getElementById("prepOrder2");

specialPaperTable.onclick = function(){
    document.getElementById("specialMenuChoice").classList.remove("hidden");
    document.getElementById("tintedScreen").classList.remove("hidden");

    setTimeout(function(){
        document.addEventListener("click", closeMenu);
    }, 1000) 
    
}

function closeMenu(event) {
    if (!document.getElementById("specialMenuChoice").contains(event.target)) {
        document.getElementById("specialMenuChoice").classList.add("hidden");
        document.getElementById("tintedScreen").classList.add("hidden");

        document.removeEventListener("click", closeMenu);
    }
}

userChoiceUpdate()

function userChoiceUpdate(){
    toppings = localStorage.selectedTopings.split(",");
    cookies = localStorage.selectedCookies.split(",");
    specials = localStorage.selectedSpecials.split(",");

    toppingJar1.src = imgSource.toppingJarImageSource[toppings[0]];
    toppingJar2.src = imgSource.toppingJarImageSource[toppings[1]];
    toppingJar3.src = imgSource.toppingJarImageSource[toppings[2]];

    cookieBox1.src = imgSource.cookieBoxImageSource[cookies[0]];
    cookieBox2.src = imgSource.cookieBoxImageSource[cookies[1]];
    cookieBox3.src = imgSource.cookieBoxImageSource[cookies[2]];

    specialOrder1.src = imgSource.specialImageSource[specials[0]];
    specialOrder2.src = imgSource.specialImageSource[specials[1]];
    specialOrder3.src = imgSource.specialImageSource[specials[2]];
    specialOrder4.src = imgSource.specialImageSource[specials[3]];
    specialOrder5.src = imgSource.specialImageSource[specials[4]];
    specialOrder6.src = imgSource.specialImageSource[specials[5]];
}

let specialArrive = ["", ""];
let specialHold = ["", ""];

specialOrder1.onclick = function(){
    switch (true) {  
        case !specialHold[0]:  
            specialGetting(specialReceive1, specials[0])
            specialHold[0] = true;  

            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        case !specialHold[1]:  
            specialGetting(specialReceive2, specials[0])
            specialHold[1] = true; 
            
            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        default:  
            return;
    }
}

specialOrder2.onclick = function(){
    switch (true) {  
        case !specialHold[0]:  
            specialGetting(specialReceive1, specials[1])
            specialHold[0] = true;  

            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        case !specialHold[1]:  
            specialGetting(specialReceive2, specials[1])
            specialHold[1] = true; 
            
            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        default:  
            return;
    }
}

specialOrder3.onclick = function(){
    switch (true) {  
        case !specialHold[0]:  
            specialGetting(specialReceive1, specials[2])
            specialHold[0] = true;  

            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        case !specialHold[1]:  
            specialGetting(specialReceive2, specials[2])
            specialHold[1] = true; 
            
            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        default:  
            return;
    }
}

specialOrder4.onclick = function(){
    switch (true) {  
        case !specialHold[0]:  
            specialGetting(specialReceive1, specials[3])
            specialHold[0] = true;  

            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        case !specialHold[1]:  
            specialGetting(specialReceive2, specials[3])
            specialHold[1] = true; 
            
            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        default:  
            return;
    }
}

specialOrder5.onclick = function(){
    switch (true) {  
        case !specialHold[0]:  
            specialGetting(specialReceive1, specials[4])
            specialHold[0] = true;  

            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        case !specialHold[1]:  
            specialGetting(specialReceive2, specials[4])
            specialHold[1] = true; 
            
            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        default:  
            return;
    }
}

specialOrder6.onclick = function(){
    switch (true) {  
        case !specialHold[0]:  
            specialGetting(specialReceive1, specials[5])
            specialHold[0] = true;  

            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        case !specialHold[1]:  
            specialGetting(specialReceive2, specials[5])
            specialHold[1] = true; 
            
            document.getElementById("specialMenuChoice").classList.add("hidden");
            document.getElementById("tintedScreen").classList.add("hidden");
            break;  
        default:  
            return;
    }
}

function specialGetting(where, what){
    where.src = "./Images/misc/timer5.png";
    setTimeout(function(){
        where.src = "./Images/misc/timer4.png";
        setTimeout(function(){
            where.src = "./Images/misc/timer3.png";
            setTimeout(function(){
                where.src = "./Images/misc/timer2.png";
                setTimeout(function(){
                    where.src = "./Images/misc/timer1.png";
                    setTimeout(function(){
                        where.src = imgSource.specialImageSource[what];
                        if(where == specialReceive1){
                            specialArrive[0] = what;
                        }
                        else{
                            specialArrive[1] = what;
                        }
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

let prepOrder1 = new Order("none", "none", "none", "none");
prepOrder1.cup = "none";
let prepOrder2 = new Order("none", "none", "none", "none");
prepOrder2.cup = "none";

trashCan.onclick = () => {
    if(holding[1] == "prepOrder1"){
        prepOrder1.cup = "none";
        prepOrder1.topping = "none";
        prepOrder1.sugar = "none";
        prepOrder1.cookies = "none";
        prepOrder1.special = "none";

        document.getElementById("cupPrep1").src = "";
        document.getElementsByClassName("toppingPrepImg tray1")[0].src = imgSource.toppingImageSource[prepOrder1.topping] || "";
        document.getElementsByClassName("sugarPrepImg tray1")[0].src = imgSource.sugarImageSource[prepOrder1.sugar] || "";
        document.getElementsByClassName("cookiePrepImg tray1")[0].src = imgSource.cookieImageSource[prepOrder1.cookies] || "";
        document.getElementsByClassName("specialPrepImg tray1")[0].src = imgSource.specialImageSource[prepOrder1.special] || "";
    }
    if(holding[1] == "prepOrder2"){
        prepOrder2.cup = "none";
        prepOrder2.topping = "none";
        prepOrder2.sugar = "none";
        prepOrder2.cookies = "none";
        prepOrder2.special = "none";

        document.getElementById("cupPrep2").src = "";
        document.getElementsByClassName("toppingPrepImg tray2")[0].src = imgSource.toppingImageSource[prepOrder2.topping] || "";
        document.getElementsByClassName("sugarPrepImg tray2")[0].src = imgSource.sugarImageSource[prepOrder2.sugar] || "";
        document.getElementsByClassName("cookiePrepImg tray2")[0].src = imgSource.cookieImageSource[prepOrder2.cookies] || "";
        document.getElementsByClassName("specialPrepImg tray2")[0].src = imgSource.specialImageSource[prepOrder2.special] || "";
    }

    holding[0] = "";
    holding[1] = "";

    currentlyHolding.src = "";
}

sugarPileTake.onclick = () => {
    holding[0] = "sugar";
    holding[1] = "sugarCube";

    currentlyHolding.src = imgSource.sugarImageSource.sugarCube;
}

teaCupTake.onclick = () => {
    holding[0] = "cup";
    holding[1] = "empty";

    currentlyHolding.src = "./Images/misc/teaCupHeld.png";
}

teaKettleTake.onclick = () => {
    holding[0] = "cup";
    holding[1] = "full";

    currentlyHolding.src = "./Images/misc/teaHeld.png";
}

toppingJar1.onclick = () => {
    holding[0] = "topping";
    holding[1] = toppings[0];

    currentlyHolding.src = imgSource.toppingImageSource[toppings[0]];
}

toppingJar2.onclick = () => {
    holding[0] = "topping";
    holding[1] = toppings[1];

    currentlyHolding.src = imgSource.toppingImageSource[toppings[1]];
}

toppingJar3.onclick = () => {
    holding[0] = "topping";
    holding[1] = toppings[2];

    currentlyHolding.src = imgSource.toppingImageSource[toppings[2]];
}

cookieBox1.onclick = () => {
    holding[0] = "cookies";
    holding[1] = cookies[0];

    currentlyHolding.src = imgSource.cookieImageSource[cookies[0]];
}

cookieBox2.onclick = () => {
    holding[0] = "cookies";
    holding[1] = cookies[1];

    currentlyHolding.src = imgSource.cookieImageSource[cookies[1]];
}

cookieBox3.onclick = () => {
    holding[0] = "cookies";
    holding[1] = cookies[2];

    currentlyHolding.src = imgSource.cookieImageSource[cookies[2]];
}

specialReceive1.onclick = () => {
    if(specialArrive[0] !== ""){
        holding[0] = "special";
        holding[1] = specialArrive[0];
        holding[2] = "specialReceive1";

        currentlyHolding.src = imgSource.specialImageSource[specialArrive[0]];
    } 
}

specialReceive2.onclick = () => {
    if(specialArrive[1] !== ""){
        holding[0] = "special";
        holding[1] = specialArrive[1];
        holding[2] = "specialReceive2";

        currentlyHolding.src = imgSource.specialImageSource[specialArrive[1]];
    } 
}

prepTray1.onclick = () => {
    if(holding[0] !== "" && holding[1] !== ""){
        if(prepOrder1.cup == "none"){
            if(holding[1] == "empty"){
                prepOrder1.cup = "empty";
               
                document.getElementById("cupPrep1").src = imgSource.cupImageSource[localStorage.selectedCupKettle.split(",")[0]];
            }
        }
        if(prepOrder1.cup == "empty"){
            if(holding[1] == "full"){
                prepOrder1.cup = "full";
                prepOrder1.sugar = "no";
                
                document.getElementById("cupPrep1").src = imgSource.cupFullImageSource[localStorage.selectedCupKettle.split(",")[0]];
                document.getElementsByClassName("sugarPrepImg tray1")[0].src = imgSource.sugarImageSource.no;
            }
        }
        if(prepOrder1.cup == "full"){
            
            if(holding[2] == "specialReceive1"){
                prepOrder1[holding[0]] = holding[1];
                    specialHold[0] = false;
                    specialArrive[0] = "";
                    specialReceive1.src = "";
                    holding[2] = "";
            }
            else if(holding[2] == "specialReceive2"){
                prepOrder1[holding[0]] = holding[1];
                    specialHold[1] = false;
                    specialArrive[1] = "";
                    specialReceive2.src = "";
                    holding[2] = "";
            }
            else if(holding[1] !== "sugarCube"){
                prepOrder1[holding[0]] = holding[1];
            }
            else{
                if(prepOrder1.sugar == "two"){
                    prepOrder1.sugar = "three";
                }
                if(prepOrder1.sugar == "one"){
                    prepOrder1.sugar = "two";
                }
                if(prepOrder1.sugar == "none" || prepOrder1.sugar == "no"){
                    prepOrder1.sugar = "one";
                }
            }
        }

        document.getElementsByClassName("toppingPrepImg tray1")[0].src = imgSource.toppingImageSource[prepOrder1.topping] || "";
        document.getElementsByClassName("sugarPrepImg tray1")[0].src = imgSource.sugarImageSource[prepOrder1.sugar] || "";
        document.getElementsByClassName("cookiePrepImg tray1")[0].src = imgSource.cookieImageSource[prepOrder1.cookies] || "";
        document.getElementsByClassName("specialPrepImg tray1")[0].src = imgSource.specialImageSource[prepOrder1.special] || "";

        holding[0] = "";
        holding[1] = "";
        currentlyHolding.src = "";
    }
    else{
        holding[0] = "prepOrder";
        holding[1] = "prepOrder1";

        currentlyHolding.src = "./Images/misc/prepOrder1Held.png";
    }
}

prepTray2.onclick = () => {
    if(holding[0] !== "" && holding[1] !== ""){
        if(prepOrder2.cup == "none"){
            if(holding[1] == "empty"){
               prepOrder2.cup = "empty";
               
               document.getElementById("cupPrep2").src = imgSource.cupImageSource[localStorage.selectedCupKettle.split(",")[0]];
            }
        }
        if(prepOrder2.cup == "empty"){
            if(holding[1] == "full"){
                prepOrder2.cup = "full";
                prepOrder2.sugar = "no";
                
                document.getElementById("cupPrep2").src = imgSource.cupFullImageSource[localStorage.selectedCupKettle.split(",")[0]];
                document.getElementsByClassName("sugarPrepImg tray2")[0].src = imgSource.sugarImageSource.no;
            }
        }
        if(prepOrder2.cup == "full"){
            
            if(holding[2] == "specialReceive1"){
                prepOrder2[holding[0]] = holding[1];
                    specialHold[0] = false;
                    specialArrive[0] = "";
                    specialReceive1.src = "";
                    holding[2] = "";
            }
            else if(holding[2] == "specialReceive2"){
                prepOrder2[holding[0]] = holding[1];
                    specialHold[1] = false;
                    specialArrive[1] = "";
                    specialReceive2.src = "";
                    holding[2] = "";
            }
            else if(holding[1] !== "sugarCube"){
                prepOrder2[holding[0]] = holding[1];
            }
            else{
                if(prepOrder2.sugar == "two"){
                    prepOrder2.sugar = "three";
                }
                if(prepOrder2.sugar == "one"){
                    prepOrder2.sugar = "two";
                }
                if(prepOrder2.sugar == "none" || prepOrder2.sugar == "no"){
                    prepOrder2.sugar = "one";
                }
            }
        }

        document.getElementsByClassName("toppingPrepImg tray2")[0].src = imgSource.toppingImageSource[prepOrder2.topping] || "";
        document.getElementsByClassName("sugarPrepImg tray2")[0].src = imgSource.sugarImageSource[prepOrder2.sugar] || "";
        document.getElementsByClassName("cookiePrepImg tray2")[0].src = imgSource.cookieImageSource[prepOrder2.cookies] || "";
        document.getElementsByClassName("specialPrepImg tray2")[0].src = imgSource.specialImageSource[prepOrder2.special] || "";
    
        holding[0] = "";
        holding[1] = "";
        currentlyHolding.src = "";
    }
    else{
        holding[0] = "prepOrder";
        holding[1] = "prepOrder2";

        currentlyHolding.src = "./Images/misc/prepOrder2Held.png";
    }
}

document.getElementsByClassName("customerImg line1")[0].onclick = () => {
    if(holding[1] == "prepOrder1" || holding[1] == "prepOrder2"){
    let comparisonResult;
    let clearOrder;
    if(holding[1] == "prepOrder1"){
        comparisonResult = compareOrders(orderLines[0], prepOrder1);
        clearOrder = "prepOrder1";
    }
    if(holding[1] == "prepOrder2"){
        comparisonResult = compareOrders(orderLines[0], prepOrder2);
        clearOrder = "prepOrder2";
    }


    if(comparisonResult){
        document.getElementById("reactionLine1Positive").classList.remove("hidden");
        setTimeout(function(){
            gameSequense.earningsUpdate(orderLines[0].price);
            isOrderGen[0]=false;
            orderLines[0]="null";
                
            document.getElementsByClassName("order")[0].classList.add("hidden");
            document.getElementsByClassName("customer")[0].classList.add("hidden");
            document.getElementById("reactionLine1Positive").classList.add("hidden");
        
            document.getElementsByClassName("customerImg")[0].src = "";
            document.getElementsByClassName("toppingImg")[0].src = "";
            document.getElementsByClassName("sugarImg")[0].src = "";
            document.getElementsByClassName("cookieImg")[0].src = "";
            document.getElementsByClassName("specialImg")[0].src = "";

            if(clearOrder == "prepOrder1"){
                prepOrder1.cup = "none";
                prepOrder1.topping = "none";
                prepOrder1.sugar = "none";
                prepOrder1.cookies = "none";
                prepOrder1.special = "none";
        
                document.getElementById("cupPrep1").src = "";
                document.getElementsByClassName("toppingPrepImg tray1")[0].src = imgSource.toppingImageSource[prepOrder1.topping] || "";
                document.getElementsByClassName("sugarPrepImg tray1")[0].src = imgSource.sugarImageSource[prepOrder1.sugar] || "";
                document.getElementsByClassName("cookiePrepImg tray1")[0].src = imgSource.cookieImageSource[prepOrder1.cookies] || "";
                document.getElementsByClassName("specialPrepImg tray1")[0].src = imgSource.specialImageSource[prepOrder1.special] || "";
            }
            if(clearOrder == "prepOrder2"){
                prepOrder2.cup = "none";
                prepOrder2.topping = "none";
                prepOrder2.sugar = "none";
                prepOrder2.cookies = "none";
                prepOrder2.special = "none";
        
                document.getElementById("cupPrep2").src = "";
                document.getElementsByClassName("toppingPrepImg tray2")[0].src = imgSource.toppingImageSource[prepOrder2.topping] || "";
                document.getElementsByClassName("sugarPrepImg tray2")[0].src = imgSource.sugarImageSource[prepOrder2.sugar] || "";
                document.getElementsByClassName("cookiePrepImg tray2")[0].src = imgSource.cookieImageSource[prepOrder2.cookies] || "";
                document.getElementsByClassName("specialPrepImg tray2")[0].src = imgSource.specialImageSource[prepOrder2.special] || "";
            }
        
            if(holding[1] == "prepOrder1" || holding[1] == "prepOrder2"){
                holding[0] = "";
                holding[1] = "";
                currentlyHolding.src = "";
            }

        }, 2000)
    }
    else if(!comparisonResult){
        document.getElementById("reactionLine1Negative").classList.remove("hidden");
        setTimeout(function(){
            gameSequense.earningsUpdate(-10);
            isOrderGen[0]=false;
            orderLines[0]="null";
                
            document.getElementsByClassName("order")[0].classList.add("hidden");
            document.getElementsByClassName("customer")[0].classList.add("hidden");
            document.getElementById("reactionLine1Negative").classList.add("hidden");
        
            document.getElementsByClassName("customerImg")[0].src = "";
            document.getElementsByClassName("toppingImg")[0].src = "";
            document.getElementsByClassName("sugarImg")[0].src = "";
            document.getElementsByClassName("cookieImg")[0].src = "";
            document.getElementsByClassName("specialImg")[0].src = "";

            if(clearOrder == "prepOrder1"){
                prepOrder1.cup = "none";
                prepOrder1.topping = "none";
                prepOrder1.sugar = "none";
                prepOrder1.cookies = "none";
                prepOrder1.special = "none";
        
                document.getElementById("cupPrep1").src = "";
                document.getElementsByClassName("toppingPrepImg tray1")[0].src = imgSource.toppingImageSource[prepOrder1.topping] || "";
                document.getElementsByClassName("sugarPrepImg tray1")[0].src = imgSource.sugarImageSource[prepOrder1.sugar] || "";
                document.getElementsByClassName("cookiePrepImg tray1")[0].src = imgSource.cookieImageSource[prepOrder1.cookies] || "";
                document.getElementsByClassName("specialPrepImg tray1")[0].src = imgSource.specialImageSource[prepOrder1.special] || "";
            }
            if(clearOrder == "prepOrder2"){
                prepOrder2.cup = "none";
                prepOrder2.topping = "none";
                prepOrder2.sugar = "none";
                prepOrder2.cookies = "none";
                prepOrder2.special = "none";
        
                document.getElementById("cupPrep2").src = "";
                document.getElementsByClassName("toppingPrepImg tray2")[0].src = imgSource.toppingImageSource[prepOrder2.topping] || "";
                document.getElementsByClassName("sugarPrepImg tray2")[0].src = imgSource.sugarImageSource[prepOrder2.sugar] || "";
                document.getElementsByClassName("cookiePrepImg tray2")[0].src = imgSource.cookieImageSource[prepOrder2.cookies] || "";
                document.getElementsByClassName("specialPrepImg tray2")[0].src = imgSource.specialImageSource[prepOrder2.special] || "";
            }
        
            if(holding[1] == "prepOrder1" || holding[1] == "prepOrder2"){
                holding[0] = "";
                holding[1] = "";
                currentlyHolding.src = "";
            }

        }, 2000)
    }
} 
}

document.getElementsByClassName("customerImg line2")[0].onclick = () => {
    if(holding[1] == "prepOrder1" || holding[1] == "prepOrder2"){
    let comparisonResult;
    let clearOrder;
    if(holding[1] == "prepOrder1"){
        comparisonResult = compareOrders(orderLines[1], prepOrder1);
        clearOrder = "prepOrder1";
    }
    if(holding[1] == "prepOrder2"){
        comparisonResult = compareOrders(orderLines[1], prepOrder2);
        clearOrder = "prepOrder2";
    }

    if(comparisonResult){
        document.getElementById("reactionLine2Positive").classList.remove("hidden");
        setTimeout(function(){
            gameSequense.earningsUpdate(orderLines[1].price);
            isOrderGen[1]=false;
            orderLines[1]="null";
                
            document.getElementsByClassName("order")[1].classList.add("hidden");
            document.getElementsByClassName("customer")[1].classList.add("hidden");
            document.getElementById("reactionLine2Positive").classList.add("hidden");
        
            document.getElementsByClassName("customerImg")[1].src = "";
            document.getElementsByClassName("toppingImg")[1].src = "";
            document.getElementsByClassName("sugarImg")[1].src = "";
            document.getElementsByClassName("cookieImg")[1].src = "";
            document.getElementsByClassName("specialImg")[1].src = "";

            if(clearOrder == "prepOrder1"){
                prepOrder1.cup = "none";
                prepOrder1.topping = "none";
                prepOrder1.sugar = "none";
                prepOrder1.cookies = "none";
                prepOrder1.special = "none";
        
                document.getElementById("cupPrep1").src = "";
                document.getElementsByClassName("toppingPrepImg tray1")[0].src = imgSource.toppingImageSource[prepOrder1.topping] || "";
                document.getElementsByClassName("sugarPrepImg tray1")[0].src = imgSource.sugarImageSource[prepOrder1.sugar] || "";
                document.getElementsByClassName("cookiePrepImg tray1")[0].src = imgSource.cookieImageSource[prepOrder1.cookies] || "";
                document.getElementsByClassName("specialPrepImg tray1")[0].src = imgSource.specialImageSource[prepOrder1.special] || "";
            }
            if(clearOrder == "prepOrder2"){
                prepOrder2.cup = "none";
                prepOrder2.topping = "none";
                prepOrder2.sugar = "none";
                prepOrder2.cookies = "none";
                prepOrder2.special = "none";
        
                document.getElementById("cupPrep2").src = "";
                document.getElementsByClassName("toppingPrepImg tray2")[0].src = imgSource.toppingImageSource[prepOrder2.topping] || "";
                document.getElementsByClassName("sugarPrepImg tray2")[0].src = imgSource.sugarImageSource[prepOrder2.sugar] || "";
                document.getElementsByClassName("cookiePrepImg tray2")[0].src = imgSource.cookieImageSource[prepOrder2.cookies] || "";
                document.getElementsByClassName("specialPrepImg tray2")[0].src = imgSource.specialImageSource[prepOrder2.special] || "";
            }
        
            if(holding[1] == "prepOrder1" || holding[1] == "prepOrder2"){
                holding[0] = "";
                holding[1] = "";
                currentlyHolding.src = "";
            }

        }, 2000)
    }
    else if(!comparisonResult){
        document.getElementById("reactionLine2Negative").classList.remove("hidden");
        setTimeout(function(){
            gameSequense.earningsUpdate(-10);
            isOrderGen[1]=false;
            orderLines[1]="null";
                
            document.getElementsByClassName("order")[1].classList.add("hidden");
            document.getElementsByClassName("customer")[1].classList.add("hidden");
            document.getElementById("reactionLine2Negative").classList.add("hidden");
        
            document.getElementsByClassName("customerImg")[1].src = "";
            document.getElementsByClassName("toppingImg")[1].src = "";
            document.getElementsByClassName("sugarImg")[1].src = "";
            document.getElementsByClassName("cookieImg")[1].src = "";
            document.getElementsByClassName("specialImg")[1].src = "";

            if(clearOrder == "prepOrder1"){
                prepOrder1.cup = "none";
                prepOrder1.topping = "none";
                prepOrder1.sugar = "none";
                prepOrder1.cookies = "none";
                prepOrder1.special = "none";
        
                document.getElementById("cupPrep1").src = "";
                document.getElementsByClassName("toppingPrepImg tray1")[0].src = imgSource.toppingImageSource[prepOrder1.topping] || "";
                document.getElementsByClassName("sugarPrepImg tray1")[0].src = imgSource.sugarImageSource[prepOrder1.sugar] || "";
                document.getElementsByClassName("cookiePrepImg tray1")[0].src = imgSource.cookieImageSource[prepOrder1.cookies] || "";
                document.getElementsByClassName("specialPrepImg tray1")[0].src = imgSource.specialImageSource[prepOrder1.special] || "";
            }
            if(clearOrder == "prepOrder2"){
                prepOrder2.cup = "none";
                prepOrder2.topping = "none";
                prepOrder2.sugar = "none";
                prepOrder2.cookies = "none";
                prepOrder2.special = "none";
        
                document.getElementById("cupPrep2").src = "";
                document.getElementsByClassName("toppingPrepImg tray2")[0].src = imgSource.toppingImageSource[prepOrder2.topping] || "";
                document.getElementsByClassName("sugarPrepImg tray2")[0].src = imgSource.sugarImageSource[prepOrder2.sugar] || "";
                document.getElementsByClassName("cookiePrepImg tray2")[0].src = imgSource.cookieImageSource[prepOrder2.cookies] || "";
                document.getElementsByClassName("specialPrepImg tray2")[0].src = imgSource.specialImageSource[prepOrder2.special] || "";
            }
        
            if(holding[1] == "prepOrder1" || holding[1] == "prepOrder2"){
                holding[0] = "";
                holding[1] = "";
                currentlyHolding.src = "";
            }
            

        }, 2000)
    }
}
}

function compareOrders(whatOrder, whatPrepOrder){
    let count = 0;
    whatPrepOrder.cookies == "none" ? whatPrepOrder.cookies = "no" : count=count;
    whatPrepOrder.special == "none" ? whatPrepOrder.special = "no" : count=count;

    whatOrder.topping == whatPrepOrder.topping ? count++ : count=count;
    whatOrder.sugar == whatPrepOrder.sugar ? count++ : count=count;
    whatOrder.cookies == whatPrepOrder.cookies ? count++ : count=count;
    whatOrder.special == whatPrepOrder.special ? count++ : count=count;

    if(count == 4){
        return true;
    }
    else{
        return false;
    }
} 