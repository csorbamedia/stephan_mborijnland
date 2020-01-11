/*
 * Description: In this javascript I will develop an auto configurator.....
 * Author: Stephan Csorba
 * Version: 1.0
 * Date: 11, January 2020
 * Author link: https://www.linkedin.com/in/skcsorba/  
 */

// Set my variables
var autos           = ['','Audi','BMW','Fiat'];
var auto_prompt     = prompt("Welk nummer auto merk moet worden weergegeven?");
var cookie_key      = 'auto';

// Start the programm
init();

// Get our variables based on the input of an user
function init(){
    if (auto_prompt == 1) {
        // Show the response in our div with classname "append"
        document.getElementsByClassName("append")[0].innerHTML = "Ik heb <strong>" + autos[1] + "</strong> gekozen!";
        // Save our cookie and write our choice
        save_cookie(cookie_key, autos[1]);
    }else if(auto_prompt == 2){
        document.getElementsByClassName("append")[0].innerHTML = "Ik heb <strong>" + autos[2] + "</strong> gekozen!";
        save_cookie(cookie_key, autos[2]);
    }else if(auto_prompt == 3){
        document.getElementsByClassName("append")[0].innerHTML = "Ik heb <strong>" + autos[3] + "</strong> gekozen!";
        save_cookie(cookie_key, autos[3]);
    }else{
        document.getElementsByClassName("append")[0].innerHTML = "Het automerk bestaat niet!";
        save_cookie(cookie_key, 'Geen auto gekozen!');
    }
}

// Here I will save and write my cookie
function save_cookie(key, value, period = get_period(), path = '/'){
    if(key != '' && value != ''){
        var mycookie = document.cookie = key + '=' + value + '; expires=' + period + '; path=' + path + ';';
        // If the cookie has been set write it to my div
        if(mycookie){
            // Only get the value from the cookie
            document.getElementsByClassName("cookies")[0].innerHTML += '<br/>' + read_cookie(key) + '<br/>';
            // Get the full cookie params
            document.getElementsByClassName("cookies")[0].innerHTML += mycookie + '<br/>';
        }
    }
}

// Here I will read the cookie value
function read_cookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Get the actual time
function get_period(exdays = 7){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    return expires;
}