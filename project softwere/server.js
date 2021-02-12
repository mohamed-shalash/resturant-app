var express =require('express');
//var http =require('http');
var mysql =require('mysql');
var app =express();
var bodyparser =require('body-parser');
//var datef =require('dataformate');

app.set('view engine','ejs');
app.use('/js',express.static(__dirname+'/node_modules/bootstrap/dist/js'));
app.use('/js',express.static(__dirname+'/node_modules/jquery/dist/js')); 
//app.use('/logo.png',express.static('logo.png'));
app.use('/home',express.static('home'));
app.use('/about',express.static('about'));
app.use('/menu',express.static('menu'));
app.use('/orders',express.static('orders'));
app.use(express.static('menu'));
app.use(express.static('home'));
app.use(express.static('about'));
app.use(express.static('orders'));

var user="null",pass="null",num;

var urlencodeparser =bodyparser.urlencoded({extended :false});

const conn= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"project"
});

app.get('/',function(req,res){
    conn.query("select * from meals_tbl",function(err,result){
        console.log("hi "+pass+" "+user);
        conn.query("select * from order_tbl ",function(err,resu){
            //console.log(result);
            console.log("hi "+pass+" "+user);
            res.render(__dirname+"/menu"+"/menu.ejs",{pagetitle:"menu",item:result,user:user,password:pass,num:num,orders:resu});
        });
    });
});
app.get('/home',function(req,res){
    res.render(__dirname+"/home"+"/resturant.ejs",{pagetitle:"home"});
});
app.get('/about',function(req,res){
    res.render(__dirname+"/about"+"/about.ejs",{pagetitle:"galary"});
});
app.get('/orders',function(req,res){
    var qu="SELECT order_tbl.order_id,user_tbl.email,meals_tbl.meal_name,meals_tbl.meal_price,user_tbl.firist_name,user_tbl.last_name,user_tbl.address,user_tbl.phonenum FROM order_tbl, user_tbl , meals_tbl WHERE order_tbl.user_num =user_tbl.user_id and order_tbl.meal_num =meals_tbl.meal_id";
    conn.query(qu,function(err,resu){
        res.render(__dirname+"/orders"+"/ord.ejs",{pagetitle:"order",item:resu});
    });
});
app.get('/menu:id',function(req,res){
    //if(req.params.id == ':1')
    //console.log("hi");
    conn.query("select * from meals_tbl",function(err,result){
        //console.log(result);
        console.log("hi "+pass+" "+user);
        conn.query("select * from order_tbl ",function(err,resu){
            //console.log(result);
            console.log("hi "+pass+" "+user);
            res.render(__dirname+"/menu"+"/menu.ejs",{pagetitle:"menu",item:result,user:user,password:pass,num:num,orders:resu});
        });
        //res.render(__dirname+"/menu"+"/menu.ejs",{pagetitle:"menu",item:result,user:user,password:pass,num:num});
    });
});
app.post("/menu/add",urlencodeparser,function(req,res){
    //INSERT INTO user_tbl(`PASSWORD`, `phonenum`, `firist_name`, `last_name`, `email`, `address`)
     //VALUES ('123','020555444','ah','med','ah@gmail.com','cairo')
    var qu ="INSERT INTO user_tbl(PASSWORD, phonenum, firist_name, last_name, email, address) values ('";
    qu += req.body.password+"','";
    qu += req.body.phone+"','";
    qu += req.body.first_name+"','";
    qu += req.body.last_name+"','";
    qu += req.body.email+"','";
    qu += req.body.address+"')";
    //console.log(qu);
    conn.query(qu,function(err,result){
        res.redirect('/menu:1');
    });
});

app.post("/menu/sub",urlencodeparser,function(req,res){
    var qu ="select * from user_tbl where PASSWORD = '"+req.body.password+"'"+" and email = '"+req.body.user_em+"' ;";
    conn.query(qu,function(err,result){
        if(result.length > 0){
            num =result[0].user_id;
            user =result[0].email;
            pass=result[0].PASSWORD;
            if(user =="admin.com"&& pass =="admin3000"){
                res.redirect('/orders');
            }else
            res.redirect('/menu:1');
            } 
        else{ console.log("error"); res.redirect('/home');}
        
    });
});
app.post("/menu_ord:id",urlencodeparser,function(req,res){
    var qu ="INSERT INTO `order_tbl`( `user_num`, `meal_num`) VALUES ("+num+","+req.params.id+");";
    console.log(qu);
    if(num ==undefined){user="",res.redirect('/menu:1');}
    else
    conn.query(qu,function(err,result){            
            res.redirect('/menu:1');
    });
});
app.post("/menu_del:id",urlencodeparser,function(req,res){
    var qu ="DELETE FROM `order_tbl` WHERE `user_num` ="+num+" and `meal_num`= "+req.params.id;
    console.log(qu);
    if(num ==undefined){user="",res.redirect('/menu:1');}
    else
    conn.query(qu,function(err,result){            
            res.redirect('/menu:1');
    });
});


app.post('/ord_del:id',function(req,res){
    var qu ="DELETE FROM `order_tbl` WHERE order_id = "+req.params.id;
    conn.query(qu,function(err,result){            
        res.redirect('/orders');
});
});

app.listen(4000,'192.168.1.2');