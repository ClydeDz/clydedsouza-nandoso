document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded and ready to go!");
    loadStudentsh();
});

// Used to load the student data - can actually do without this function
// if you are not doing anything else in the load.
function loadStudentsh() {
    MenuModule.getMenu(setupStudentsTable);
}
var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()]; 
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