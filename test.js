// ==UserScript==
// @name         Test_script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.in/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==
window.addEventListener("load", lookuptoys,false);
function lookuptoys (){
console.log("lookuptoys is running");
$('.a-truncate-cut').css('color', 'red');
console.log("Style has been applied");
}
