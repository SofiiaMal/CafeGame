//reset local storage

document.getElementById("resetLocalStorageBtn").onclick = function() {
    localStorage.setItem("username", "User");
    localStorage.setItem("purchasedToppings", "true,true,true,false,false,false,false");
    localStorage.setItem("selectedTopings", "cherryBlossom,mint,starfruit");
    localStorage.setItem("purchasedCookies", "true,true,true,false,false,false,false");
    localStorage.setItem("selectedCookies", "plain,chocoChip,drawnOn");
    localStorage.setItem("purchasedSpecials", "true,true,true,false,false,false,true,true,true,false,false,false");
    localStorage.setItem("selectedSpecials", "chocoCake,pumpkinCake,pinkCake,smallFruitStick,jellyStick,candyPlate");
    localStorage.setItem("moneyDay", "200,1");
    localStorage.setItem("purchasedCup", "true,false,false,false,false,false,false,false,false");
    localStorage.setItem("purchasedKettle", "true,false,false,false,false,false,false,false,false");
    localStorage.setItem("selectedCupKettle", "cup1,kettle1");

    location.reload();
}

//error message

const errorMessageCloseBtn = document.getElementById("errorMessageCloseBtn");
errorMessageCloseBtn.onclick = function(){
    document.getElementsByClassName("errorMessage")[0].classList.add("hidden");
    document.getElementsByClassName("blackOutPanel")[0].classList.add("hidden");
}

//getting and changing username

const headerPlayerName = document.getElementById("headerPlayerName");

headerPlayerName.onclick = function(){
    document.getElementsByClassName("mainMenuPopUp")[0].classList.remove("hidden");
    document.getElementsByClassName("blackOutPanel")[0].classList.remove("hidden");
}

const userNameConfirmBtn = document.getElementById("userNameConfirmBtn");

userNameConfirmBtn.onclick = function(){
    localStorage.username = document.getElementById("usernameTextField").value;
    document.getElementById("headerPlayerName").textContent = `Hello, ${localStorage.username}`;
    document.getElementsByClassName("mainMenuPopUp")[0].classList.add("hidden");
    document.getElementsByClassName("blackOutPanel")[0].classList.add("hidden");
}

const usernamePopUpCloseBtn = document.getElementById("usernamePopUpClose");

usernamePopUpCloseBtn.onclick = function(){
    document.getElementsByClassName("mainMenuPopUp")[0].classList.add("hidden");
    document.getElementsByClassName("blackOutPanel")[0].classList.add("hidden");
}

//tea toppings

isPurchasedTopping();
toppingSelectedOnLoad();

function isPurchasedTopping(){
    let isPurchased = localStorage.purchasedToppings.split(",");

    if(isPurchased[3] == "true"){
        document.getElementById("lavenderToppingPurchase").classList.add("hidden");
        document.getElementsByClassName("levanderTopping")[0].classList.remove("hidden");
    }
    if(isPurchased[4] == "true"){
        document.getElementById("sunflowerToppingPurchase").classList.add("hidden");
        document.getElementsByClassName("sunflowerTopping")[0].classList.remove("hidden");
    }
    if(isPurchased[5] == "true"){
        document.getElementById("roseToppingPurchase").classList.add("hidden");
        document.getElementsByClassName("roseTopping")[0].classList.remove("hidden");
    }
    if(isPurchased[6] == "true"){
        document.getElementById("lemonToppingPurchase").classList.add("hidden");
        document.getElementsByClassName("lemonTopping")[0].classList.remove("hidden");
    }
}

function toppingSelectedOnLoad(){
    let isSelected = localStorage.selectedTopings.split(",");

    if(isSelected.includes("cherryBlossom")){
        document.getElementById("cherryTopping").checked = true;
    }
    else{
        document.getElementById("cherryTopping").checked = false;
    }
    if(isSelected.includes("mint")){
        document.getElementById("mintTopping").checked = true;
    }
    else{
        document.getElementById("mintTopping").checked = false;
    }
    if(isSelected.includes("starfruit")){
        document.getElementById("starFruitTopping").checked = true;
    }
    else{
        document.getElementById("starFruitTopping").checked = false;
    }
    if(isSelected.includes("lavender")){
        document.getElementById("lavenderTopping").checked = true;
    }
    else{
        document.getElementById("lavenderTopping").checked = false;
    }
    if(isSelected.includes("sunflower")){
        document.getElementById("sunflowerTopping").checked = true;
    }
    else{
        document.getElementById("sunflowerTopping").checked = false;
    }
    if(isSelected.includes("rose")){
        document.getElementById("roseTopping").checked = true;
    }
    else{
        document.getElementById("roseTopping").checked = false;
    }
    if(isSelected.includes("lemon")){
        document.getElementById("lemonTopping").checked = true;
    }
    else{
        document.getElementById("lemonTopping").checked = false;
    }
}

const toppingConfirmBtn = document.getElementById("toppingConfirmBtn");

toppingConfirmBtn.onclick = function(){
    let tempCount = 0;
    let tempArray = [];

    if(document.getElementById("cherryTopping").checked == true){
        tempCount++;
    }
    if(document.getElementById("mintTopping").checked == true){
        tempCount++;
    }
    if(document.getElementById("starFruitTopping").checked == true){
        tempCount++;
    }
    if(document.getElementById("lavenderTopping").checked == true){
        tempCount++;
    }
    if(document.getElementById("sunflowerTopping").checked == true){
        tempCount++;
    }
    if(document.getElementById("roseTopping").checked == true){
        tempCount++;
    }
    if(document.getElementById("lemonTopping").checked == true){
        tempCount++;
    }

    if(tempCount == 3){
        if(document.getElementById("cherryTopping").checked == true){
           tempArray.push("cherryBlossom");
        }
        if(document.getElementById("mintTopping").checked == true){
            tempArray.push("mint");
        }
        if(document.getElementById("starFruitTopping").checked == true){
            tempArray.push("starfruit");
        }
        if(document.getElementById("lavenderTopping").checked == true){
            tempArray.push("lavender");
        }
        if(document.getElementById("sunflowerTopping").checked == true){
            tempArray.push("sunflower");
        }
        if(document.getElementById("roseTopping").checked == true){
            tempArray.push("rose");
        }
        if(document.getElementById("lemonTopping").checked == true){
            tempArray.push("lemon");
        }

        localStorage.selectedTopings = tempArray.toString();
    }
    else{
        document.getElementById("errorMessagePopUp").textContent = "Please select 3 tea toppings. No more than 3, no less than 3.";
        document.getElementsByClassName("errorMessage")[0].classList.remove("hidden");
        document.getElementsByClassName("blackOutPanel")[0].classList.remove("hidden");
    }
}

//cookies

isPurchasedCookie();
cookieSelectedOnLoad();

function isPurchasedCookie(){
    let isPurchased = localStorage.purchasedCookies.split(",");

    if(isPurchased[3] == "true"){
        document.getElementById("dominoCookiePurchase").classList.add("hidden");
        document.getElementsByClassName("dominoCookie")[0].classList.remove("hidden");
    }
    if(isPurchased[4] == "true"){
        document.getElementById("cardCookiePurchase").classList.add("hidden");
        document.getElementsByClassName("cardCookie")[0].classList.remove("hidden");
    }
    if(isPurchased[5] == "true"){
        document.getElementById("starJellyCookiePurchase").classList.add("hidden");
        document.getElementsByClassName("starJellyCookie")[0].classList.remove("hidden");
    }
    if(isPurchased[6] == "true"){
        document.getElementById("flowerCookiePurchase").classList.add("hidden");
        document.getElementsByClassName("flowerCookie")[0].classList.remove("hidden");
    }
}

function cookieSelectedOnLoad(){
    let isSelected = localStorage.selectedCookies.split(",");

    if(isSelected.includes("plain")){
        document.getElementById("plainCookie").checked = true;
    }
    else{
        document.getElementById("plainCookie").checked = false;
    }
    if(isSelected.includes("chocoChip")){
        document.getElementById("chocoChipCookie").checked = true;
    }
    else{
        document.getElementById("chocoChipCookie").checked = false;
    }
    if(isSelected.includes("drawnOn")){
        document.getElementById("drawnOnCookie").checked = true;
    }
    else{
        document.getElementById("drawnOnCookie").checked = false;
    }
    if(isSelected.includes("domino")){
        document.getElementById("dominoCookie").checked = true;
    }
    else{
        document.getElementById("dominoCookie").checked = false;
    }
    if(isSelected.includes("card")){
        document.getElementById("cardCookie").checked = true;
    }
    else{
        document.getElementById("cardCookie").checked = false;
    }
    if(isSelected.includes("starjelly")){
        document.getElementById("starJellyCookie").checked = true;
    }
    else{
        document.getElementById("starJellyCookie").checked = false;
    }
    if(isSelected.includes("flowerCookie")){
        document.getElementById("flowerCookie").checked = true;
    }
    else{
        document.getElementById("flowerCookie").checked = false;
    }
}

const cookieConfirmBtn = document.getElementById("cookieConfirmBtn");

cookieConfirmBtn.onclick = function(){
    let tempCount = 0;
    let tempArray = [];

    if(document.getElementById("plainCookie").checked == true){
        tempCount++;
    }
    if(document.getElementById("chocoChipCookie").checked == true){
        tempCount++;
    }
    if(document.getElementById("drawnOnCookie").checked == true){
        tempCount++;
    }
    if(document.getElementById("dominoCookie").checked == true){
        tempCount++;
    }
    if(document.getElementById("cardCookie").checked == true){
        tempCount++;
    }
    if(document.getElementById("starJellyCookie").checked == true){
        tempCount++;
    }
    if(document.getElementById("flowerCookie").checked == true){
        tempCount++;
    }

    if(tempCount == 3){
        if(document.getElementById("plainCookie").checked == true){
           tempArray.push("plain");
        }
        if(document.getElementById("chocoChipCookie").checked == true){
            tempArray.push("chocoChip");
        }
        if(document.getElementById("drawnOnCookie").checked == true){
            tempArray.push("drawnOn");
        }
        if(document.getElementById("dominoCookie").checked == true){
            tempArray.push("domino");
        }
        if(document.getElementById("cardCookie").checked == true){
            tempArray.push("card");
        }
        if(document.getElementById("starJellyCookie").checked == true){
            tempArray.push("starjelly");
        }
        if(document.getElementById("flowerCookie").checked == true){
            tempArray.push("flowerCookie");
        }

        localStorage.selectedCookies = tempArray.toString();
    }
    else{
        document.getElementById("errorMessagePopUp").textContent = "Please select 3 cookie types. No more than 3, no less than 3.";
        document.getElementsByClassName("errorMessage")[0].classList.remove("hidden");
        document.getElementsByClassName("blackOutPanel")[0].classList.remove("hidden");
    }
}

//specials

isPurchasedSpecial();
specialSelectedOnLoad();

function isPurchasedSpecial(){
    let isPurchased = localStorage.purchasedSpecials.split(",");

    if(isPurchased[3] == "true"){
        document.getElementById("strawberryCakePurchase").classList.add("hidden");
        document.getElementsByClassName("strawberryCake")[0].classList.remove("hidden");
    }
    if(isPurchased[4] == "true"){
        document.getElementById("kiwiCakePurchase").classList.add("hidden");
        document.getElementsByClassName("kiwiCake")[0].classList.remove("hidden");
    }
    if(isPurchased[5] == "true"){
        document.getElementById("blueberryCakePurchase").classList.add("hidden");
        document.getElementsByClassName("blueberryCake")[0].classList.remove("hidden");
    }
    if(isPurchased[9] == "true"){
        document.getElementById("colorStickPurchase").classList.add("hidden");
        document.getElementsByClassName("colorStick")[0].classList.remove("hidden");
    }
    if(isPurchased[10] == "true"){
        document.getElementById("fruitStickBigPurchase").classList.add("hidden");
        document.getElementsByClassName("fruitStickBig")[0].classList.remove("hidden");
    }
    if(isPurchased[11] == "true"){
        document.getElementById("puddingPlatePurchase").classList.add("hidden");
        document.getElementsByClassName("puddingPlate")[0].classList.remove("hidden");
    }
}

function specialSelectedOnLoad(){
    let isSelected = localStorage.selectedSpecials.split(",");

    if(isSelected.includes("chocoCake")){
        document.getElementById("chocoCake").checked = true;
    }
    else{
        document.getElementById("chocoCake").checked = false;
    }
    if(isSelected.includes("pumpkinCake")){
        document.getElementById("pumpkinCake").checked = true;
    }
    else{
        document.getElementById("pumpkinCake").checked = false;
    }
    if(isSelected.includes("pinkCake")){
        document.getElementById("pinkCake").checked = true;
    }
    else{
        document.getElementById("pinkCake").checked = false;
    }
    if(isSelected.includes("strawberryCake")){
        document.getElementById("strawberryCake").checked = true;
    }
    else{
        document.getElementById("strawberryCake").checked = false;
    }
    if(isSelected.includes("kiwiCake")){
        document.getElementById("kiwiCake").checked = true;
    }
    else{
        document.getElementById("kiwiCake").checked = false;
    }
    if(isSelected.includes("blueberryCake")){
        document.getElementById("blueberryCake").checked = true;
    }
    else{
        document.getElementById("blueberryCake").checked = false;
    }
    if(isSelected.includes("smallFruitStick")){
        document.getElementById("fruitStickSmall").checked = true;
    }
    else{
        document.getElementById("fruitStickSmall").checked = false;
    }
    if(isSelected.includes("jellyStick")){
        document.getElementById("jellyStick").checked = true;
    }
    else{
        document.getElementById("jellyStick").checked = false;
    }
    if(isSelected.includes("candyPlate")){
        document.getElementById("candyPlate").checked = true;
    }
    else{
        document.getElementById("candyPlate").checked = false;
    }
    if(isSelected.includes("colorStick")){
        document.getElementById("colorStick").checked = true;
    }
    else{
        document.getElementById("colorStick").checked = false;
    }
    if(isSelected.includes("bigFruitStick")){
        document.getElementById("fruitStickBig").checked = true;
    }
    else{
        document.getElementById("fruitStickBig").checked = false;
    }
    if(isSelected.includes("puddingPlate")){
        document.getElementById("puddingPlate").checked = true;
    }
    else{
        document.getElementById("puddingPlate").checked = false;
    }
}

const specialConfirmBtn = document.getElementById("specialConfirmBtn");

specialConfirmBtn.onclick = function(){
    let tempCount = 0;
    let tempArray = [];

    if(document.getElementById("chocoCake").checked == true){
        tempCount++;
    }
    if(document.getElementById("pumpkinCake").checked == true){
        tempCount++;
    }
    if(document.getElementById("pinkCake").checked == true){
        tempCount++;
    }
    if(document.getElementById("strawberryCake").checked == true){
        tempCount++;
    }
    if(document.getElementById("kiwiCake").checked == true){
        tempCount++;
    }
    if(document.getElementById("blueberryCake").checked == true){
        tempCount++;
    }
    if(document.getElementById("fruitStickSmall").checked == true){
        tempCount++;
    }
    if(document.getElementById("jellyStick").checked == true){
        tempCount++;
    }
    if(document.getElementById("candyPlate").checked == true){
        tempCount++;
    }
    if(document.getElementById("colorStick").checked == true){
        tempCount++;
    }
    if(document.getElementById("fruitStickBig").checked == true){
        tempCount++;
    }
    if(document.getElementById("puddingPlate").checked == true){
        tempCount++;
    }

    if(tempCount == 6){
        if(document.getElementById("chocoCake").checked == true){
           tempArray.push("chocoCake");
        }
        if(document.getElementById("pumpkinCake").checked == true){
            tempArray.push("pumpkinCake");
        }
        if(document.getElementById("pinkCake").checked == true){
            tempArray.push("pinkCake");
        }
        if(document.getElementById("strawberryCake").checked == true){
            tempArray.push("strawberryCake");
        }
        if(document.getElementById("kiwiCake").checked == true){
            tempArray.push("kiwiCake");
        }
        if(document.getElementById("blueberryCake").checked == true){
            tempArray.push("blueberryCake");
        }
        if(document.getElementById("fruitStickSmall").checked == true){
            tempArray.push("smallFruitStick");
        }
        if(document.getElementById("jellyStick").checked == true){
            tempArray.push("jellyStick");
        }
        if(document.getElementById("candyPlate").checked == true){
            tempArray.push("candyPlate");
        }
        if(document.getElementById("colorStick").checked == true){
            tempArray.push("colorStick");
        }
        if(document.getElementById("fruitStickBig").checked == true){
            tempArray.push("bigFruitStick");
        }
        if(document.getElementById("puddingPlate").checked == true){
            tempArray.push("puddingPlate");
        }

        localStorage.selectedSpecials = tempArray.toString();
    }
    else{
        document.getElementById("errorMessagePopUp").textContent = "Please select 6 specials. No more than 6, no less than 6.";
        document.getElementsByClassName("errorMessage")[0].classList.remove("hidden");
        document.getElementsByClassName("blackOutPanel")[0].classList.remove("hidden");
    }
}

//kettle

isPurchasedKettle();
kettleSelectedOnLoad();

function isPurchasedKettle(){
    let isPurchased = localStorage.purchasedKettle.split(",");

    if(isPurchased[1] == "true"){
        document.getElementById("kettle2Purchase").classList.add("hidden");
        document.getElementsByClassName("kettle2Look")[0].classList.remove("hidden");
    }
    if(isPurchased[2] == "true"){
        document.getElementById("kettle3Purchase").classList.add("hidden");
        document.getElementsByClassName("kettle3Look")[0].classList.remove("hidden");
    }
    if(isPurchased[3] == "true"){
        document.getElementById("kettle4Purchase").classList.add("hidden");
        document.getElementsByClassName("kettle4Look")[0].classList.remove("hidden");
    }
    if(isPurchased[4] == "true"){
        document.getElementById("kettle5Purchase").classList.add("hidden");
        document.getElementsByClassName("kettle5Look")[0].classList.remove("hidden");
    }
    if(isPurchased[5] == "true"){
        document.getElementById("kettle6Purchase").classList.add("hidden");
        document.getElementsByClassName("kettle6Look")[0].classList.remove("hidden");
    }
    if(isPurchased[6] == "true"){
        document.getElementById("kettle7Purchase").classList.add("hidden");
        document.getElementsByClassName("kettle7Look")[0].classList.remove("hidden");
    }
    if(isPurchased[7] == "true"){
        document.getElementById("kettle8Purchase").classList.add("hidden");
        document.getElementsByClassName("kettle8Look")[0].classList.remove("hidden");
    }
    if(isPurchased[8] == "true"){
        document.getElementById("kettle9Purchase").classList.add("hidden");
        document.getElementsByClassName("kettle9Look")[0].classList.remove("hidden");
    }
}

function kettleSelectedOnLoad(){
    let isSelected = localStorage.selectedCupKettle.split(",");

    if(isSelected.includes("kettle1")){
        document.getElementById("kettle1Look").checked = true;
    }
    else{
        document.getElementById("kettle1Look").checked = false;
    }
    if(isSelected.includes("kettle2")){
        document.getElementById("kettle2Look").checked = true;
    }
    else{
        document.getElementById("kettle2Look").checked = false;
    }
    if(isSelected.includes("kettle3")){
        document.getElementById("kettle3Look").checked = true;
    }
    else{
        document.getElementById("kettle3Look").checked = false;
    }
    if(isSelected.includes("kettle4")){
        document.getElementById("kettle4Look").checked = true;
    }
    else{
        document.getElementById("kettle4Look").checked = false;
    }
    if(isSelected.includes("kettle5")){
        document.getElementById("kettle5Look").checked = true;
    }
    else{
        document.getElementById("kettle5Look").checked = false;
    }
    if(isSelected.includes("kettle6")){
        document.getElementById("kettle6Look").checked = true;
    }
    else{
        document.getElementById("kettle6Look").checked = false;
    }
    if(isSelected.includes("kettle7")){
        document.getElementById("kettle7Look").checked = true;
    }
    else{
        document.getElementById("kettle7Look").checked = false;
    }
    if(isSelected.includes("kettle8")){
        document.getElementById("kettle8Look").checked = true;
    }
    else{
        document.getElementById("kettle8Look").checked = false;
    }
    if(isSelected.includes("kettle9")){
        document.getElementById("kettle9Look").checked = true;
    }
    else{
        document.getElementById("kettle9Look").checked = false;
    }
}

const kettleConfirmBtn = document.getElementById("kettleConfirmBtn");

kettleConfirmBtn.onclick = function(){
    let tempCount = 0;
    let tempArray = [];

    if(document.getElementById("kettle1Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("kettle2Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("kettle3Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("kettle4Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("kettle5Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("kettle6Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("kettle7Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("kettle8Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("kettle9Look").checked == true){
        tempCount++;
    }

    if(tempCount == 1){
        if(document.getElementById("kettle1Look").checked == true){
           tempArray.push("kettle1");
        }
        if(document.getElementById("kettle2Look").checked == true){
            tempArray.push("kettle2");
        }
        if(document.getElementById("kettle3Look").checked == true){
            tempArray.push("kettle3");
        }
        if(document.getElementById("kettle4Look").checked == true){
            tempArray.push("kettle4");
        }
        if(document.getElementById("kettle5Look").checked == true){
            tempArray.push("kettle5");
        }
        if(document.getElementById("kettle6Look").checked == true){
            tempArray.push("kettle6");
        }
        if(document.getElementById("kettle7Look").checked == true){
            tempArray.push("kettle7");
        }
        if(document.getElementById("kettle8Look").checked == true){
            tempArray.push("kettle8");
        }
        if(document.getElementById("kettle9Look").checked == true){
            tempArray.push("kettle9");
        }

        let temporalArray = localStorage.selectedCupKettle.split(",");
        temporalArray[1] = tempArray.toString();
        localStorage.selectedCupKettle = temporalArray.toString();

    }
    else{
        document.getElementById("errorMessagePopUp").textContent = "Please select 1 Kettle Look. No more than 1, no less than 1.";
        document.getElementsByClassName("errorMessage")[0].classList.remove("hidden");
        document.getElementsByClassName("blackOutPanel")[0].classList.remove("hidden");
    }
}

//cup



isPurchasedCup();
cupSelectedOnLoad();

function isPurchasedCup(){
    let isPurchased = localStorage.purchasedCup.split(",");

    if(isPurchased[1] == "true"){
        document.getElementById("cup2Purchase").classList.add("hidden");
        document.getElementsByClassName("cup2Look")[0].classList.remove("hidden");
    }
    if(isPurchased[2] == "true"){
        document.getElementById("cup3Purchase").classList.add("hidden");
        document.getElementsByClassName("cup3Look")[0].classList.remove("hidden");
    }
    if(isPurchased[3] == "true"){
        document.getElementById("cup4Purchase").classList.add("hidden");
        document.getElementsByClassName("cup4Look")[0].classList.remove("hidden");
    }
    if(isPurchased[4] == "true"){
        document.getElementById("cup5Purchase").classList.add("hidden");
        document.getElementsByClassName("cup5Look")[0].classList.remove("hidden");
    }
    if(isPurchased[5] == "true"){
        document.getElementById("cup6Purchase").classList.add("hidden");
        document.getElementsByClassName("cup6Look")[0].classList.remove("hidden");
    }
    if(isPurchased[6] == "true"){
        document.getElementById("cup7Purchase").classList.add("hidden");
        document.getElementsByClassName("cup7Look")[0].classList.remove("hidden");
    }
    if(isPurchased[7] == "true"){
        document.getElementById("cup8Purchase").classList.add("hidden");
        document.getElementsByClassName("cup8Look")[0].classList.remove("hidden");
    }
    if(isPurchased[8] == "true"){
        document.getElementById("cup9Purchase").classList.add("hidden");
        document.getElementsByClassName("cup9Look")[0].classList.remove("hidden");
    }
}

function cupSelectedOnLoad(){
    let isSelected = localStorage.selectedCupKettle.split(",");

    if(isSelected.includes("cup1")){
        document.getElementById("cup1Look").checked = true;
    }
    else{
        document.getElementById("cup1Look").checked = false;
    }
    if(isSelected.includes("cup2")){
        document.getElementById("cup2Look").checked = true;
    }
    else{
        document.getElementById("cup2Look").checked = false;
    }
    if(isSelected.includes("cup3")){
        document.getElementById("cup3Look").checked = true;
    }
    else{
        document.getElementById("cup3Look").checked = false;
    }
    if(isSelected.includes("cup4")){
        document.getElementById("cup4Look").checked = true;
    }
    else{
        document.getElementById("cup4Look").checked = false;
    }
    if(isSelected.includes("cup5")){
        document.getElementById("cup5Look").checked = true;
    }
    else{
        document.getElementById("cup5Look").checked = false;
    }
    if(isSelected.includes("cup6")){
        document.getElementById("cup6Look").checked = true;
    }
    else{
        document.getElementById("cup6Look").checked = false;
    }
    if(isSelected.includes("cup7")){
        document.getElementById("cup7Look").checked = true;
    }
    else{
        document.getElementById("cup7Look").checked = false;
    }
    if(isSelected.includes("cup8")){
        document.getElementById("cup8Look").checked = true;
    }
    else{
        document.getElementById("cup8Look").checked = false;
    }
    if(isSelected.includes("cup9")){
        document.getElementById("cup9Look").checked = true;
    }
    else{
        document.getElementById("cup9Look").checked = false;
    }
}

const cupConfirmBtn = document.getElementById("cupConfirmBtn");

cupConfirmBtn.onclick = function(){
    let tempCount = 0;
    let tempArray = [];

    if(document.getElementById("cup1Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("cup2Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("cup3Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("cup4Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("cup5Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("cup6Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("cup7Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("cup8Look").checked == true){
        tempCount++;
    }
    if(document.getElementById("cup9Look").checked == true){
        tempCount++;
    }

    if(tempCount == 1){
        if(document.getElementById("cup1Look").checked == true){
           tempArray.push("cup1");
        }
        if(document.getElementById("cup2Look").checked == true){
            tempArray.push("cup2");
        }
        if(document.getElementById("cup3Look").checked == true){
            tempArray.push("cup3");
        }
        if(document.getElementById("cup4Look").checked == true){
            tempArray.push("cup4");
        }
        if(document.getElementById("cup5Look").checked == true){
            tempArray.push("cup5");
        }
        if(document.getElementById("cup6Look").checked == true){
            tempArray.push("cup6");
        }
        if(document.getElementById("cup7Look").checked == true){
            tempArray.push("cup7");
        }
        if(document.getElementById("cup8Look").checked == true){
            tempArray.push("cup8");
        }
        if(document.getElementById("cup9Look").checked == true){
            tempArray.push("cup9");
        }

        let temporalArray = localStorage.selectedCupKettle.split(",");
        temporalArray[0] = tempArray.toString();
        localStorage.selectedCupKettle = temporalArray.toString();

    }
    else{
        document.getElementById("errorMessagePopUp").textContent = "Please select 1 Tea Cup Look. No more than 1, no less than 1.";
        document.getElementsByClassName("errorMessage")[0].classList.remove("hidden");
        document.getElementsByClassName("blackOutPanel")[0].classList.remove("hidden");
    }
}