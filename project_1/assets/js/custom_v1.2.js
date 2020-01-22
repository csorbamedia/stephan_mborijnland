/*
 * Description: In this javascript I will develop an auto configurator.....
 * Author: Stephan Csorba
 * Version: 1.2
 * Date: 11, January 2020
 * Author link: https://www.linkedin.com/in/skcsorba/  
 */

// Set my variables
var autos           = ['','Audi','BMW','Fiat'];
var plaatjes        = ['https://i.pinimg.com/236x/49/6f/f4/496ff46d7a02e73dadfe5059cbdad027--smileys-emoji-faces.jpg','https://nos.nl/data/image/2019/09/03/574724/1008x567.jpg','https://images.autowereld.com/1600x1000/168770-m8-gran-coupe-opener-2.jpg','https://www.fiat.nl/content/dam/fiat/cross/menu/desktop/fiat-500-rockstar-green-desktop-308x174.jpg'];
var cookie_key      = 'auto';

class MijnAutos{

    // Start our program
    constructor(){
        this.init();
    }

    // Get our variables based on the input of an user
    init(){
        this.render_table();
    }

    // Here we give the user an popup window
    pop(){
        // Get the current cookie value
        var current_cookie_value = this.read_cookie(cookie_key);
        // If there is not cookie prompt it to save it
        if(current_cookie_value == ''){
            var auto_prompt     = prompt("Welke auto moet geselecteerd worden?");
            if (auto_prompt == 1) {
                // Show the response in our div with classname "append"
                document.getElementsByClassName("append")[0].innerHTML = "Ik heb <strong>" + autos[1] + "</strong> gekozen!";
                // Save our cookie and write our choice
                this.save_cookie(cookie_key, autos[1]);
            }else if(auto_prompt == 2){
                document.getElementsByClassName("append")[0].innerHTML = "Ik heb <strong>" + autos[2] + "</strong> gekozen!";
                this.save_cookie(cookie_key, autos[2]);
            }else if(auto_prompt == 3){
                document.getElementsByClassName("append")[0].innerHTML = "Ik heb <strong>" + autos[3] + "</strong> gekozen!";
                this.save_cookie(cookie_key, autos[3]);
            }else{
                document.getElementsByClassName("append")[0].innerHTML = "Het automerk bestaat niet!";
                this.save_cookie(cookie_key, 'Geen auto');
            }
        }else{
            // Toon the keuze
            document.getElementsByClassName("append")[0].innerHTML = "Ik heb <strong>" + current_cookie_value + "</strong> gekozen!";
            // Select the table based on saved cookie
            document.getElementById(current_cookie_value).style.background = "red";
        }
    }

    // Here we render our table
    render_table(){
        // Total number of auto's
        var total = this.count_total_autos();
        // Loop but not more then the total of cars
        for(var x = 0; x < total; x++){
            if(autos[x] == ''){
                autos[x] = 'Geen auto';
            }
            document.getElementsByClassName("append-tabel")[0].innerHTML += '<tr id="'+ autos[x] +'"><td>' + autos[x] + '</td>' + '<td><img src="' + plaatjes[x] + '" alt=""/></td></tr>';
        }
        this.pop();
    }

    // Here I will save and write my cookie
    save_cookie(key, value, period = this.get_period(), path = '/'){
        if(key != '' && value != ''){
            var mycookie = document.cookie = key + '=' + value + '; expires=' + period + '; path=' + path + ';';
            // If the cookie has been set write it to my div
            if(mycookie){
                // Only get the value from the cookie
                document.getElementsByClassName("cookies")[0].innerHTML += '<br/>' + this.read_cookie(cookie_key) + '<br/>';
                // Get the full cookie params
                document.getElementsByClassName("cookies")[0].innerHTML += mycookie + '<br/>';
                // Highlight selection
                if(this.read_cookie(cookie_key) != ''){
                    document.getElementById(value).style.background = "red";
                }
            }
        }
    }

    // Here I will read the cookie value
    read_cookie(cname){
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
    get_period(exdays = 7){
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        return expires;
    }

    // Count variables in array
    count_total_autos(){
        return autos.length;
    }

}

new MijnAutos();