/*
 * Description: In this javascript I will develop an auto configurator.....
 * Author: Stephan Csorba
 * Version: 1.1
 * Date: 11, January 2020
 * Author link: https://www.linkedin.com/in/skcsorba/  
 */

// Set my variables
var autos           = ['','Audi','BMW','Fiat'];
var plaatjes        = ['https://i.pinimg.com/236x/49/6f/f4/496ff46d7a02e73dadfe5059cbdad027--smileys-emoji-faces.jpg','https://nos.nl/data/image/2019/09/03/574724/1008x567.jpg','https://images.autowereld.com/1600x1000/168770-m8-gran-coupe-opener-2.jpg','https://www.fiat.nl/content/dam/fiat/cross/menu/desktop/fiat-500-rockstar-green-desktop-308x174.jpg'];

// Multilevel array variable
var autos_object    = {
                       a: { value: '', img : 'https://i.pinimg.com/236x/49/6f/f4/496ff46d7a02e73dadfe5059cbdad027--smileys-emoji-faces.jpg' }, 
                       b: { value: 'Audi', img: 'https://nos.nl/data/image/2019/09/03/574724/1008x567.jpg' }, 
                       c: { value: 'BMW', img: 'https://images.autowereld.com/1600x1000/168770-m8-gran-coupe-opener-2.jpg' }, 
                       d: { value: 'Fiat', img: 'https://www.fiat.nl/content/dam/fiat/cross/menu/desktop/fiat-500-rockstar-green-desktop-308x174.jpg' }
                      };

// Execute my function
opdracht_4();

// For loop
function opdracht_1(){
    // Total number of auto's
    var total = autos.length;
    // Loop but not more then the total of cars
    for(var x = 0; x < total; x++){
        if(autos[x] == ''){
            autos[x] = 'Geen auto';
        }
        document.getElementsByClassName("append-tabel")[0].innerHTML += '<tr id="'+ autos[x] +'"><td>' + autos[x] + '</td>' + '<td><img src="' + plaatjes[x] + '" alt=""/></td></tr>';
    }
}

// For in loop
function opdracht_2(){
    // Loop but not more then the total of cars
    for(const prop in autos_object){
        var geen_auto_label = 'Geen auto';
        document.getElementsByClassName("append-tabel")[0].innerHTML += '<tr id="'+ (autos_object[prop].value == '' ? geen_auto_label  : autos_object[prop].value) +'"><td>' + (autos_object[prop].value == '' ? geen_auto_label  : autos_object[prop].value) + '</td>' + '<td><img src="' + autos_object[prop].img + '" alt=""/></td></tr>';
    }
}

// While
function opdracht_3(){
    // Total number of auto's
    var total = autos.length;
    var x     = 0;
    // Loop but not more then the total of cars
    while(x < total){
        if(autos[x] == ''){
            autos[x] = 'Geen auto';
        }
        document.getElementsByClassName("append-tabel")[0].innerHTML += '<tr id="'+ autos[x] +'"><td>' + autos[x] + '</td>' + '<td><img src="' + plaatjes[x] + '" alt=""/></td></tr>';
        x++;
    }
}

// Do-while
function opdracht_4(){
    // Total number of auto's
    var total = autos.length;
    var x     = 0;
    // Loop but not more then the total of cars
    do{
        if(autos[x] == ''){
            autos[x] = 'Geen auto';
        }
        document.getElementsByClassName("append-tabel")[0].innerHTML += '<tr id="'+ autos[x] +'"><td>' + autos[x] + '</td>' + '<td><img src="' + plaatjes[x] + '" alt=""/></td></tr>';
        x++;
    }
    while(x < total);
}