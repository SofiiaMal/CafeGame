# CafeGame
A cafe game where you serve customers tea and cookies and sometimes specials.
* Please note that the game relies on the local storage to save your progress

# How to play : Main Menu
On the header of main menu you can see your comey, what day you are on, and a greetings. By clicking on "Hello, X" you can change your username
On the side panel you can see different categories : 
* Base Menu :
  - Opened by default
  - You can buy and customize your tea toppings and cookies you serve. You can buy new toppings for 250 coins each and cookies for 150 coins each.
  - If "Select" label under the topping or a cookie type is green, it means that the topping/cookie type is currently selected and will be used the next day.
  - To change selected toppings/cookies manually change selected toppings/cookies and than click "confirm". You must select 3 toppings or cookies.
* Special menu
  - You can buy and customize your specials. You can buy new specials for 250 coins each.
  - If "Select" label under the special is green, it means that the special is currently selected and will be used the next day.
  - To change selected specials manually change selected specials and than click "confirm". You must select 6 specials.
* Talents
  - WIP
* Utilities Visual
  - You can scroll left and right to see 9 variants of kettles and cups.
  - You can buy and customize your tea kettle and tea cups. You can buy new look for tea kettle or tea cup for 150 coins each.
  - If "Select" label under the kettle or tea cup is green, it means that the kettle/cup is currently selected and will be used the next day.
  - To change selected kettle/cup manually change selected kettle/cup and than click "confirm". You must select only 1 kettle and only 1 cup.
* Achivements
  - WIP
* Extras
  - You can click "reset progress" to reset your progress
  - Some statistics
* Start the day
  - By clicking on "Start the day" you will see a confirmation window. By clicking on the "Start the day" on confirmation window you will be taken to the game page
 
# How to play : Game Screen
First you will see a confirmation window to start the day or return to main menu

* Day length
  - The designated day length is 5 minutes, as the time goes the progress bar will change
  - I strongly recommend finishing the day in 5 minutes, but if you don't, well, nothing happens, you can't really lose because of the time
* Customers
  - After a certain time after starting a day or after finishing an order, a new customer will come with an order.
  - Clicking a customer while holding an order will "serve" the order to a customer and the game will compare order and served prepared order
  - If you give a customer a correct order, you will see a red heart next to them, customer will leave after a few moments, you will receive some money based on order type
  - If you give a customer a wrong order, you will see a broken purple heart next to them, customer will leave after a few moments, you will lose some money
* Orders
  - There are three order types
  - "Just tea" : customer will ask for a cup of tea with sugar and topping. Gives you 20 coins
  - "Tea and Cookies" : customer will ask for tea with sugar and topping, and cookies. Gives you 30 coins
  - "Tea, Cookies and a Special" : customer will ask for tea with sugar and topping, cookies and a special. Gives you 45 coins
* Currently holding and a Trash Bin
  - Above trays for preparing orders you will see a "currently holding" square. It displays what you are currently holding. It changes based on what element you clicked last (more on that in next two sections).
  - Clicking on trash bin clears your currently holding. If you are holding a prepared order, clicking on the trash bin will clear the tray of that order.
* Preparing an order : tea, toppings, sugar, cookies
  - Clicking on a topping jar makes you hold a topping from that jar.
  - Clicking on a sugar pile makes you hold a sugar cube.
  - Clicking on a cookie box makes you hold that cookie plate.
  - Clicking on tray while holding something will make the game to try and add what you are holding to the tray/prepared order
  - Step 1 : click on tea cup left to the trays, than click on a tray while holding a tea cup to add an empty tea cup to the tray
  - Step 2 : click on tea kettle top right to the trays, than click on a tray with an empty cup of tea. This will fill the tea cup with tea and a default "no sugar".
  - Adding sugar : you can add sugar once the tea cup on the tray is full. By the default order has "no sugar", clicking on the tray with a sugar cube will change the sugar to "one sugar" -> "two sugar" -> "three sugar"
  - Customers will ask for either one sugar, two sugar, three sugar or no sugar
  - Adding topping : you can add topping once the tea cup on the tray is full. Click on the tray while holding a topping to add it to the prepared order
  - Adding cookies : you can add a cookie plate once the tea cup on the tray is full. Click on the tray while holding a cookie plate to add it to the prepared order
* Preparing an order : Special
  - CLicking on the special menu paper will show you the menu with all your selected specials
  - Clicking on one of the specials will "order" it : if there is a free spot, a five-second count down will start, and after that you will be able to pick up the special and add it to a tray with prepared order
  - You can add a special once the tea cup on the tray is full
  - You can have two special max on the working space (meaning, 2 specials not added to the order). If both spaces are in use you won't be able to get a new special
  - You can clear the space by adding a special to an order. You _can't_ clear it with just a trash bin
* Serving an Order
  - Clicking on a tray while not holding anything will make you hold that tray/it's prepared order
  - Clicking on a trash bin while holding a prepared order will result in that order being tarshed and tray cleared
  - Clicking on a customer while holding a prepared order will result in serving that order to that customer.
* Side Panel
  - Has an information about current game and problem-solving buttons
  - "Day X" : shows what day is it
  - "Customers left to Serve : X" : shows how many customers are left to serve before the day is over
  - "This day's earnings : X" : shows how much you've earned today
  - "start timer" : restarts the timer (but again, timer doesn't do anything, so...)
  - "new customer" : summons a new customer if there is a spot available. Serving that customer will affect the "customers left to serve" count
  - "remove customer" : removes a customer, first one on the right spot, than one on the left spot. *Removing the customer that way will not summon a new one. You will have to summon one yourself with a button*
