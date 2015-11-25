﻿var headerText = "";
headerText = "<div class=' navbar navbar-inverse navbar-fixed-top nav-header'>";
headerText += "<div class='container'>";
headerText += "<div class='navbar-header'>";
headerText += "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>";
headerText += "<span class='icon-bar'></span>";
headerText += "<span class='icon-bar'></span>";
headerText += "<span class='icon-bar'></span>";
headerText += "</button>";
headerText += "<a class='navbar-brand' href='/'>Nandoso</a>";
headerText += "</div>";
headerText += "<div class='navbar-collapse collapse navbar-right'>";
headerText += "<ul class='nav navbar-nav'>";
headerText += "<li><a href='/'>Home</a></li>";
headerText += "<li><a href='/menu'>Menu</a></li>";
headerText += "<li><a href='/specials'>Specials</a></li>";
headerText += "<li><a href='/feedback'>Feedback</a></li>";
headerText += "<li><a href='/find-us'>Find Us</a></li>";
headerText += "</ul>";
headerText += "</div>";
headerText += "</div>";
headerText += "</div>";
headerText += "<div class='container-fluid custom-jumbotron-container'>";
headerText += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 jumbotron'><div class='content'>";
headerText += "<img src='http://googledrive.com/host/0B3iPDNpwGU-tM25wT1VSUmJvdjA/nandoso-light.png' height='90' width='90' class='img img-responsive site-logo'/>";
headerText += "<h1 class='header-text'>Nandoso</h1>";
headerText += "</div></div>";
headerText += "</div>";

function loadWebsiteHeader() {
    document.getElementById('websiteHeader').innerHTML = headerText;
}

var d = new Date();
var year = d.getFullYear();
var footerText = "";
footerText += "<div class='container-fluid footer'>";
footerText += "<div class='container'>";
footerText += "<div class='row'>";
footerText += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
footerText += "<a href='/'>Home</a> | <a href='/menu'>Menu</a> | <a href='/specials'>Specials</a> | <a href='/feedback'>Feedback</a> | <a href='/find-us'>Find Us</a></br>";
footerText += "&copy Nandoso Restaurants Ltd, " + year;
footerText += "</div>"; // col
footerText += "</div>"; // row
footerText += "</div>"; // container
footerText += "</div>"; // container fluid

function loadWebsiteFooter() {
    document.getElementById('websiteFooter').innerHTML = footerText;
}

// decodes spicy level into color codes
var level, levelText;
function decodeLevel(level) {
    if (level == 0) {
        levelText = "<span class='label label-success'>Mild</span>";
    }
    else if (level == 1) {
        levelText = "<span class='label label-warning'>Medium</span>";
    }
    else {
        levelText = "<span class='label label-danger'>Hot</span>";
    }
    return levelText;
}