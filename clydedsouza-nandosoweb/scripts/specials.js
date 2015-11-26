document.addEventListener("DOMContentLoaded", function () {
    //console.log("DOM loaded and ready to go!");
    loadWebsiteHeader();
    loadWebsiteFooter();
    //loadSpecials();
    SpecialsModule.getSpecial(loadSpecials);
    document.getElementById('coupons').innerHTML = "" + loggedOutCoupons;
    checkLoginState();
});

var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[d.getDay()]; 
var printMenuText="";
// Used to load the student data - can actually do without this function
// if you are not doing anything else in the load.
function loadSpecials(specialsData) {
    for (var i = 0; i < specialsData.length; i++) {
        if (specialsData[i].Day == day && specialsData[i].OnSpecial == true) {
            printMenuText += "<div class='row menu-item-container'>";
            printMenuText += "<div class='col-lg-8 col-md-8 col-sm-8 col-xs-8'>";
            printMenuText += "<p><span  class='menu-item'>" + specialsData[i].Item + "</span></br>";
            printMenuText += "" + specialsData[i].Description + "&nbsp;" + decodeLevel(specialsData[i].Level) + "</p>";
            printMenuText += "</div>";
            printMenuText += "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-4'>";
            printMenuText += "Today's special <b>$ " + roundOffPrice((specialsData[i].Price - ((specialsData[i].Discount / 100) * specialsData[i].Price))) + "</b><br/>Original price $ " + roundOffPrice(specialsData[i].Price);
            printMenuText += "</div>";
            printMenuText += "</div>";
        }
    }
    if (printMenuText == "") {
        document.getElementById('specialsMenu').innerHTML = "We have no specials today. Come back tomorrow for more exciting one-day offers or login using your facebook id below to reveal cool coupons.";
    }
    else {
        document.getElementById('specialsMenu').innerHTML = printMenuText;
    }
}

// This is the function we pass into StudentModule as the callback
// It takes the data returned from the API call (studenList) and an input
function setupStudentsTable(studentsList) {

    // Get a reference to the table body so we can add our rows in
    var studentTable = document.getElementById("specialsTable");
    console.log(studentsList.length);
    console.log(studentsList);
    // Loop through all the student/name objects 
    for (var i = 0; i < studentsList.length; i++) {
       // alert(studentsList[].OnSpecial);
        if (studentsList[i].Day == "Monday" && studentsList[i].OnSpecial==true) {
            //Create a new row element
            var row = document.createElement("tr");

            //Create our data cells and append to row
            var firstNameCol = document.createElement("td");
            firstNameCol.innerHTML = studentsList[i].Item;
            row.appendChild(firstNameCol);

            var lastNameCol = document.createElement("td");
            lastNameCol.innerHTML = "Original $ "+studentsList[i].Price;
            row.appendChild(lastNameCol);

            var country = document.createElement("td");
            country.innerHTML = " Today $ " + (studentsList[i].Price-((studentsList[i].Discount/100)*studentsList[i].Price));
            row.appendChild(country);

            // Append our rows to the table 
            studentTable.appendChild(row);
        }
        //else {
        //    document.getElementById('specialsTable').innerHTML = "No spcl today";
        //}


    }

}