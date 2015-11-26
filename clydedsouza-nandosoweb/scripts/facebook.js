// check facebook login status

var accessCard = "";

function logoutFacebook() {
    FB.logout(function (response) {
        console.log(response);
        document.getElementById("status").innerHTML = "You have logged out";
        document.getElementById('coupons').innerHTML = "";
        document.getElementById("userPhoto").setAttribute("src", 'Content/user-default-image.png');
        checkLoginState();
        window.location = "/specials";
       //// $('#loginButton').css('display', 'block');
        //$('#logoutButton').css('display', 'none');
        //checkLoginState();
        //$('#loginButton').css('display', 'block');
        //$('#logoutButton').css('display', 'none');
    });
}

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    alert("chk 1");
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log( response.authResponse.accessToken);
        displayFacebookProfile();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log into this app to reveal coupons.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log into this app to reveal coupons.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId: '435171393345092',
        cookie     : true,  // enable cookies to allow the server to access 
        // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.2' // use version 2.2
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.

// fb login confirmed display user details
function displayFacebookProfile() {
    $('#loginButton').css('display', 'none');
    $('#logoutButton').css('display', 'block');
    console.log('Welcome!  Fetching your information.... ');
    // display name
    FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML = 'Howdy, ' + response.name + '';
    });
    // display picture
    FB.api('/me/picture?type=normal', function (response) {
        document.getElementById("userPhoto").setAttribute("src", response.data.url);
    });
    // give access to coupons and call getCouponData ()
    MenuItemModule.getMenuItem(getCouponData);
}

function displayDefaultProfile() {

    // revoke access to coupons
    printCouponText = "";
    printCouponText += "<div class='row'>";
    printCouponText += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
    printCouponText += "<p>Login using your facebook id to reveal these interesting coupons</p>";
    printCouponText += "</div></div>";
    document.getElementById('coupons').innerHTML = printCouponText;
}