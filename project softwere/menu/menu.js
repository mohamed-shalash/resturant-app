var my_div = document.getElementById("show-login"),
    my_login = document.getElementById("login"),
    my_new_acc = document.getElementById("new-account"),
    my_image = document.getElementById("close-login"),
    new_acc_div = document.getElementById("creat-account"),
    close_regest = document.getElementById("close-regest-form"),
    meal_order_btn = document.getElementById("meal-order"),
    meal_disorder_btn = document.getElementById("meal-disorder"),
    drink_order_btn = document.getElementById("drink-order"),
    drink_disorder_btn = document.getElementById("drink-disorder"),
    dessert_order_btn = document.getElementById("dessert-order"),
    dessert_disorder_btn = document.getElementById("dessert-disorder");


my_login.onclick = function(){
    'use strict';
    my_div.className = "login-show";

}    

my_image.onclick = function(){
    'use strict';
    my_div.className = "login";
}

my_new_acc.onclick = function(){
    'use strict';
    new_acc_div.className = "creat-account-show ";
}

close_regest.onclick = function(){
    'use strict';
    new_acc_div.className = "creat-account-hidden";
}



meal_order_btn.onclick = function(){
    'use strict';
    meal_disorder_btn.style.opacity = 1;


    meal_disorder_btn.onclick = function(){
        'use strict'
        meal_disorder_btn.style.opacity = 0;
    }

}

drink_order_btn.onclick = function(){
    'use strict';
    drink_disorder_btn.style.opacity = 1;

    drink_disorder_btn.onclick = function(){
        'use strict'
        drink_disorder_btn.style.opacity = 0;
    }

}

dessert_order_btn.onclick = function(){
    'use strict';
    dessert_disorder_btn.style.opacity = 1;

    dessert_disorder_btn.onclick = function(){
        'use strict'
        dessert_disorder_btn.style.opacity = 0;
    }

}