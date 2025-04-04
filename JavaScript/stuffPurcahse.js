import * as mainModule from "./script.js";

const lavenderToppingPurchaseBtn = document.getElementById("lavenderToppingPurchase");
const sunflowerToppingPurchaseBtn = document.getElementById("sunflowerToppingPurchase");
const roseToppingPurchaseBtn = document.getElementById("roseToppingPurchase");
const lemonToppingPurchaseBtn = document.getElementById("lemonToppingPurchase");

lavenderToppingPurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 250){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 250;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        lavenderToppingPurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("levanderTopping")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedToppings.split(",");
        temporalArray[3] = "true";
        localStorage.purchasedToppings = temporalArray.toString();
    }
}

sunflowerToppingPurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 250){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 250;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        sunflowerToppingPurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("sunflowerTopping")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedToppings.split(",");
        temporalArray[4] = "true";
        localStorage.purchasedToppings = temporalArray.toString();
    }
}

roseToppingPurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 250){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 250;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        roseToppingPurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("roseTopping")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedToppings.split(",");
        temporalArray[5] = "true";
        localStorage.purchasedToppings = temporalArray.toString();
    }
}

lemonToppingPurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 250){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 250;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        lemonToppingPurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("lemonTopping")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedToppings.split(",");
        temporalArray[6] = "true";
        localStorage.purchasedToppings = temporalArray.toString();
    }
}

const dominoCookiePurchaseBtn = document.getElementById("dominoCookiePurchase");
const cardCookiePurchaseBtn = document.getElementById("cardCookiePurchase");
const starJellyCookiePurchaseBtn = document.getElementById("starJellyCookiePurchase");
const flowerCookiePurchaseBtn = document.getElementById("flowerCookiePurchase");

dominoCookiePurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        dominoCookiePurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("dominoCookie")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedCookies.split(",");
        temporalArray[3] = "true";
        localStorage.purchasedCookies = temporalArray.toString();
    }
}

cardCookiePurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        cardCookiePurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("cardCookie")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedCookies.split(",");
        temporalArray[4] = "true";
        localStorage.purchasedCookies = temporalArray.toString();
    }
}

starJellyCookiePurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        starJellyCookiePurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("starJellyCookie")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedCookies.split(",");
        temporalArray[5] = "true";
        localStorage.purchasedCookies = temporalArray.toString();
    }
}

flowerCookiePurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        flowerCookiePurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("flowerCookie")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedCookies.split(",");
        temporalArray[6] = "true";
        localStorage.purchasedCookies = temporalArray.toString();
    }
}

const kettle2PurchaseBtn = document.getElementById("kettle2Purchase");
const kettle3PurchaseBtn = document.getElementById("kettle3Purchase");
const kettle4PurchaseBtn = document.getElementById("kettle4Purchase");
const kettle5PurchaseBtn = document.getElementById("kettle5Purchase");
const kettle6PurchaseBtn = document.getElementById("kettle6Purchase");
const kettle7PurchaseBtn = document.getElementById("kettle7Purchase");
const kettle8PurchaseBtn = document.getElementById("kettle8Purchase");
const kettle9PurchaseBtn = document.getElementById("kettle9Purchase");

kettle2PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        kettle2PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("kettle2Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedKettle.split(",");
        temporalArray[1] = "true";
        localStorage.purchasedKettle = temporalArray.toString();
    }
}

kettle3PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        kettle3PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("kettle3Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedKettle.split(",");
        temporalArray[2] = "true";
        localStorage.purchasedKettle = temporalArray.toString();
    }
}

kettle4PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        kettle4PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("kettle4Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedKettle.split(",");
        temporalArray[3] = "true";
        localStorage.purchasedKettle = temporalArray.toString();
    }
}

kettle5PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        kettle5PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("kettle5Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedKettle.split(",");
        temporalArray[4] = "true";
        localStorage.purchasedKettle = temporalArray.toString();
    }
}

kettle6PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        kettle6PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("kettle6Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedKettle.split(",");
        temporalArray[5] = "true";
        localStorage.purchasedKettle = temporalArray.toString();
    }
}

kettle7PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        kettle7PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("kettle7Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedKettle.split(",");
        temporalArray[6] = "true";
        localStorage.purchasedKettle = temporalArray.toString();
    }
}

kettle8PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        kettle8PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("kettle8Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedKettle.split(",");
        temporalArray[7] = "true";
        localStorage.purchasedKettle = temporalArray.toString();
    }
}

kettle9PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        kettle9PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("kettle9Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedKettle.split(",");
        temporalArray[8] = "true";
        localStorage.purchasedKettle = temporalArray.toString();
    }
}

const cup2PurchaseBtn = document.getElementById("cup2Purchase");
const cup3PurchaseBtn = document.getElementById("cup3Purchase");
const cup4PurchaseBtn = document.getElementById("cup4Purchase");
const cup5PurchaseBtn = document.getElementById("cup5Purchase");
const cup6PurchaseBtn = document.getElementById("cup6Purchase");
const cup7PurchaseBtn = document.getElementById("cup7Purchase");
const cup8PurchaseBtn = document.getElementById("cup8Purchase");
const cup9PurchaseBtn = document.getElementById("cup9Purchase");

cup2PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        cup2PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("cup2Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedCup.split(",");
        temporalArray[1] = "true";
        localStorage.purchasedCup = temporalArray.toString();
    }
}

cup3PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        cup3PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("cup3Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedCup.split(",");
        temporalArray[2] = "true";
        localStorage.purchasedCup = temporalArray.toString();
    }
}

cup4PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        cup4PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("cup4Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedCup.split(",");
        temporalArray[3] = "true";
        localStorage.purchasedCup = temporalArray.toString();
    }
}

cup5PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        cup5PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("cup5Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedCup.split(",");
        temporalArray[4] = "true";
        localStorage.purchasedCup = temporalArray.toString();
    }
}

cup6PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        cup6PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("cup6Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedCup.split(",");
        temporalArray[5] = "true";
        localStorage.purchasedCup = temporalArray.toString();
    }
}

cup7PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        cup7PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("cup7Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedCup.split(",");
        temporalArray[6] = "true";
        localStorage.purchasedCup = temporalArray.toString();
    }
}

cup8PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        cup8PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("cup8Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedCup.split(",");
        temporalArray[7] = "true";
        localStorage.purchasedCup = temporalArray.toString();
    }
}

cup9PurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 150){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 150;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        cup9PurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("cup9Look")[0].classList.remove("hidden");
    
        let temporalArray = localStorage.purchasedCup.split(",");
        temporalArray[8] = "true";
        localStorage.purchasedCup = temporalArray.toString();
    }
}

const strawberryCakePurchaseBtn = document.getElementById("strawberryCakePurchase");
const kiwiCakePurchaseBtn = document.getElementById("kiwiCakePurchase");
const blueberryCakePurchaseBtn = document.getElementById("blueberryCakePurchase");
const colorStickPurchaseBtn = document.getElementById("colorStickPurchase");
const fruitStickBigPurchaseBtn = document.getElementById("fruitStickBigPurchase");
const puddingPlatePurchaseBtn = document.getElementById("puddingPlatePurchase");

strawberryCakePurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 250){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 250;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        strawberryCakePurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("strawberryCake")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedSpecials.split(",");
        temporalArray[3] = "true";
        localStorage.purchasedSpecials = temporalArray.toString();
    }
}

kiwiCakePurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 250){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 250;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        kiwiCakePurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("kiwiCake")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedSpecials.split(",");
        temporalArray[4] = "true";
        localStorage.purchasedSpecials = temporalArray.toString();
    }
}

blueberryCakePurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 250){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 250;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        blueberryCakePurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("blueberryCake")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedSpecials.split(",");
        temporalArray[5] = "true";
        localStorage.purchasedSpecials = temporalArray.toString();
    }
}

colorStickPurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 250){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 250;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        colorStickPurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("colorStick")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedSpecials.split(",");
        temporalArray[9] = "true";
        localStorage.purchasedSpecials = temporalArray.toString();
    }
}

fruitStickBigPurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 250){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 250;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        fruitStickBigPurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("fruitStickBig")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedSpecials.split(",");
        temporalArray[10] = "true";
        localStorage.purchasedSpecials = temporalArray.toString();
    }
}

puddingPlatePurchaseBtn.onclick = function(){
    if(Number(localStorage.moneyDay.split(",")[0]) >= 250){
        let tempArray = localStorage.moneyDay.split(",");
        let temp = Number(tempArray[0]) - 250;
        tempArray[0] = temp.toString();
        localStorage.moneyDay = tempArray.toString();

        mainModule.moneyUpdate();
        puddingPlatePurchaseBtn.classList.add("hidden");
        document.getElementsByClassName("puddingPlate")[0].classList.remove("hidden");

        let temporalArray = localStorage.purchasedSpecials.split(",");
        temporalArray[11] = "true";
        localStorage.purchasedSpecials = temporalArray.toString();
    }
}