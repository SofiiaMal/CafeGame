export default function localStorageSetUp(){
    if (!localStorage.getItem("username")) {
        localStorage.setItem("username", "User");
    }
    
    if (!localStorage.getItem("purchasedToppings")) {
        localStorage.setItem("purchasedToppings", "true,true,true,false,false,false,false");
    }
    
    if (!localStorage.getItem("selectedTopings")) {
        localStorage.setItem("selectedTopings", "cherryBlossom,mint,starfruit");
    }
    
    if (!localStorage.getItem("purchasedCookies")) {
        localStorage.setItem("purchasedCookies", "true,true,true,false,false,false,false");
    }
    
    if (!localStorage.getItem("selectedCookies")) {
        localStorage.setItem("selectedCookies", "plain,chocoChip,drawnOn");
    }
    
    if (!localStorage.getItem("purchasedSpecials")) {
        localStorage.setItem("purchasedSpecials", "true,true,true,false,false,false,true,true,true,false,false,false");
    }
    
    if (!localStorage.getItem("selectedSpecials")) {
        localStorage.setItem("selectedSpecials", "chocoCake,pumpkinCake,pinkCake,smallFruitStick,jellyStick,candyPlate");
    }
    
    if (!localStorage.getItem("moneyDay")) {
        localStorage.setItem("moneyDay", "200,1");
    }
    
    if (!localStorage.getItem("purchasedCup")) {
        localStorage.setItem("purchasedCup", "true,false,false,false,false,false,false,false,false");
    }
    
    if (!localStorage.getItem("purchasedKettle")) {
        localStorage.setItem("purchasedKettle", "true,false,false,false,false,false,false,false,false");
    }
    
    if (!localStorage.getItem("selectedCupKettle")) {
        localStorage.setItem("selectedCupKettle", "cup1,kettle1");
    }
}