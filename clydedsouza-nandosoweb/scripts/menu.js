document.addEventListener("DOMContentLoaded", function () {
    //console.log("DOM loaded and ready to go!");
    loadWebsiteHeader();
    loadWebsiteFooter();
    loadMenu();
});

// Used to load the student data - can actually do without this function
// if you are not doing anything else in the load.
function loadMenu() {
    MenuModule.getMenu(displayMenu);
}

// This is the function we pass into StudentModule as the callback
// It takes the data returned from the API call (studenList) and an input
var printMenuText = "";
var starters = [];
var mains = [];
var deserts = [];
var drinks = [];
function displayMenu(menuList) {
    // Loop through the menu for starters
    console.log(menuList);
    for (var i = 0; i < menuList.length; i++) {
        if (menuList[i].Course == 0) {
            starters.push(i);            
        }
        else if (menuList[i].Course == 1) {
            mains.push(i);
        }
        else if (menuList[i].Course == 2) {
            deserts.push(i);
        }
        else{
            drinks.push(i);
        }       
    }   //end for
    printMenu(starters, menuList);
    document.getElementById('startersMenu').innerHTML = printMenuText;
    printMenu(mains, menuList);
    document.getElementById('mainsMenu').innerHTML = printMenuText;
    printMenu(deserts, menuList);
    document.getElementById('desertsMenu').innerHTML = printMenuText;
    printMenu(drinks, menuList);
    document.getElementById('drinksMenu').innerHTML = printMenuText;
}

var commonCourse=[];
function printMenu(commonCourse, menuList) {
    printMenuText = "";
    console.log(menuList);
    console.log(commonCourse);
    for (var i = 0; i < commonCourse.length; i++)
    {        
        printMenuText += "<div class='row'>";
        printMenuText += "<div class='col-lg-8 col-md-8 col-sm-8 col-xs-8'>";
        printMenuText += "<p><span  class='menu-item'>" + menuList[commonCourse[i]].Item + "</span></br>";
        printMenuText += "" + menuList[commonCourse[i]].Description + "&nbsp;" + decodeLevel(menuList[commonCourse[i]].Level) + "</p>";
        printMenuText += "</div>";
        printMenuText += "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-4'>";
        printMenuText += "<b>$ " + roundOffPrice(menuList[commonCourse[i]].Price) + "</b>";
        printMenuText += "</div>";
        printMenuText += "</div>";
    }
    if (printMenuText == "") {
        printMenuText = "We are crafting awesome stuff here. Add this to your watchlist and come back soon ;)";
    }
}

// function decodeLevel(level) moved to common.js since it was used by multiple files
// f