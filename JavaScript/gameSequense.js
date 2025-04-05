import * as orderGen from '../JavaScript/orderGeneration.js';
import * as gamePanel from '../JavaScript/gamePanel.js';
import * as mainFile from './script.js';

mainFile.localStorageSetUp();

let customerCount = Number(localStorage.moneyDay.split(",")[1]) + 3;
customerCount >= 7 ? customerCount=7 : customerCount=customerCount;

let customerDisplay = customerCount;

let tempDay = Number(localStorage.moneyDay.split(",")[1]);
document.getElementById("beforeDayGame").textContent = `Day ${tempDay}`;

document.getElementById("customersLeftGame").textContent = `Customers Left to Serve : ${customerCount}`;

let customerDelayStart = [2000, 3000, 4000, 5000];
let customerDelayAfter = [5000, 6000, 4000, 7000];
let earning = 0;

document.getElementById("startGameBtn").onclick = function(){
    document.getElementsByClassName("beforeStart")[0].classList.add("hidden");
    
    gamePanel.startTimer();

    newCustomer(customerDelayStart[Math.floor(Math.random() * customerDelayStart.length)])
    setTimeout(newCustomer(customerDelayStart[Math.floor(Math.random() * customerDelayStart.length)]), 2000)
}

function newCustomer(delay){
    if(customerCount !== 0){
            setTimeout(function(){
            orderGen.newOrder();
            }, delay)
        customerCount--;
    }
}

export function earningsUpdate(money){
    customerDisplay--;
    document.getElementById("customersLeftGame").textContent = `Customers Left to Serve : ${customerDisplay}`;

    earning += money;
    document.getElementById("earningsGame").textContent = `This day's earnings : ${earning}`;

    if(customerDisplay !==0){
        newCustomer(customerDelayAfter[Math.floor(Math.random() * customerDelayAfter.length)])
    }
    if(customerDisplay == 0){
        setTimeout(function(){
            gamePanel.stopTimer();

            let tempArray = localStorage.moneyDay.split(",");
            let tempMoney = Number(tempArray[0]) + earning;
            let tempDay = Number(tempArray[1]) + 1;
            tempArray[0] = tempMoney.toString();
            tempArray[1] = tempDay.toString();
            localStorage.moneyDay = tempArray.toString();

            document.getElementById("dayAfterGame").textContent = `Day ${tempDay-1} is done!`;
            document.getElementById("earningsAfterDay").textContent = `Today's earnings : ${earning}`;

            document.getElementsByClassName("beforeStart afterDay")[0].classList.remove("hidden");

        }, 2000)
    }
}