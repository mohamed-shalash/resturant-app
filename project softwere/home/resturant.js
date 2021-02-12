
var my_button_open = document.getElementById("menue-button-open"),
    my_div = document.getElementById("menue-selected"),
    my_body = document.querySelector('body'),
    my_button_close = document.getElementById("menue-button-close");



my_button_open.onclick = function(){
    'use strict';
    my_div.className = "menue-selected1";
    my_body.className = "body1";
    my_button_open.className = "open-menue-hidden";
    my_button_close.className = "close-menue";
};

my_button_close.onclick = function(){
    'use strict';
    my_div.className = "menue-selected2";
    my_button_open.className = "open-menue";
    my_button_close.className = "close-menue-hidden";

}
