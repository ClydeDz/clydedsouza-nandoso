document.addEventListener("DOMContentLoaded", function () {
    //console.log("DOM loaded and ready to go!");
    //loadStudentsh();
    hideCoupons();
    MenuItemModule.getMenuItem(getCouponData);

});

// hidden coupons
function hideCoupons() {
    
    $('#loginButton').css('visibility','visible');
    $('#logoutButton').css('visibility', 'hidden');
    //document.getElementById('loginButton').hidden = 'visible';
    //document.getElementById('logoutButton').hidden = 'hidden';
    //var hideCouponsText = "";
    //hideCouponsText += "<div class='row'>";
    //hideCouponsText += "<div class='row'>";
    //hideCouponsText += "</div>";
}

var couponsData;
var menuData;
function getCouponData(_menuData) {
    menuData = _menuData
    console.log(menuData);
    CouponsModule.getCoupons(loadCouponsData);
}
function temp(temp_var) {
    //console.log(temp_var);
    couponsData = temp_var;
    onlyMenuItem(temp_var[1].MenuID);
}
var r;
function onlyMenuItem(r) {
    MenuItemModule.getMenuItem(r, getMenuItem);
}
var en;
function getMenuItem(en) {
    menuData = en;
    //console.log(en);
}
// Used to load the student data - can actually do without this function
// if you are not doing anything else in the load.




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
var printCouponText = "";
// This is the function we pass into StudentModule as the callback
// It takes the data returned from the API call (studenList) and an input
function loadCouponsData(couponsDataSet) {
    console.log('coupons' + couponsDataSet);
    printCouponText += "<div class='row'>";
    for (var i = 0; i < couponsDataSet.length; i++) {
        printCouponText += "<div class='col-lg-6 col-md=6 col-sm-12 col-xs-12'>";
        printCouponText += "<div class='coupon-item'><div class='ticket'>";
        printCouponText += "<h3>CODE: " + couponsDataSet[i].Code + "</h3>";
        printCouponText += "<p>You have received <b>" + couponsDataSet[i].Discount + "%</b> off on your next purchase of " + getMenuTitle(couponsDataSet[i].MenuID) + "";
        printCouponText += "<br/>Expires on: " + couponsDataSet[i].ExpiresOn + "";
        printCouponText += "<br/>" + ((couponsDataSet[i].Exemptions == "") ? "Standard T&C apply. See at the bottom of this page" : "" + couponsDataSet[i].Exemptions) + "</p>";
        printCouponText += "</div></div></div>";
    }
    printCouponText += "</div>";
    if (printCouponText == "") {
        document.getElementById('coupons').innerHTML = "We are out of coupons at the moment. We promise we shall get back better offers very soon.";
    }
    else {
        document.getElementById('coupons').innerHTML = printCouponText;
    }
}

function getMenuTitle(_id) {
    var returnText = "";
    for (var i = 0; i < menuData.length; i++) {
        if (menuData[i].ID == _id) {
            returnText = menuData[i].Item;
        }
    }
    return returnText;
}