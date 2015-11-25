//coupon module
var CouponsModule = (function () {
    // If you want to declare things that are private to the module, 
    // simply declare them here without returning them
    var privatethingy = 10;
    
    // Only things that are returned from this closure is exposed
    return {
        getCoupons: function (callback) {
           
            // $ means that the function is being called from JQuery
            // We pass the parameters for the api as an object
            // The success function is called when the data is recieved
            // The callback allows us to pass this data back out main js file.
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://clydedsouza-nandosoapi.azurewebsites.net/api/Coupons",
                success: function (data) {
                    callback(data);
                }
            });
        }
    }
}());
var MenuItemModule = (function () {
    // If you want to declare things that are private to the module, 
    // simply declare them here without returning them
    var privatethingy = 10;
    var pvt;
    // Only things that are returned from this closure is exposed
    return {
        getMenuItem: function (pvt,callback) {
            alert(pvt);
            // $ means that the function is being called from JQuery
            // We pass the parameters for the api as an object
            // The success function is called when the data is recieved
            // The callback allows us to pass this data back out main js file.
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://clydedsouza-nandosoapi.azurewebsites.net/api/Menus/"+pvt,
                success: function (data) {
                    callback(data);
                }
            });
        }
    }
}());