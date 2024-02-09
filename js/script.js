// Hadi bach affchier un message par le  navigateur .
// alert("Hello js")
// var x =10   
// var y= 25;

// Hadi bach m utiliser haja ta3 html b javascript 
// document.writeln("<h1> +x+ </h1>")

// Hakda n affichier f console 
// console.log(y)

// document.writeln(" <h2> This y value : "+y+" </h2> ");

// La fonction typeof bach nearfou type  
// console.log(typeof x)

// var name_2  = "44" 
//  Hed la function bach tweli integer 
// name_2 = parseInt(name_2)
// console.log( typeof name_2 );
// console.log(name_2 + 5)

// document.writeln("<input type=\"text\">")

// var c = prompt("Enter c ?");
// var b = prompt("Enter b ?");        
// c = parseInt(c);
// b = parseInt(b);
// var d = c + b;
// var k = c - b; 
// var e = c * 2;
// var a = c / 2;
// alert(" Addition est :  " +d+ " soustraction est = " + k +  " multplication =  " +e+ ", devisition = "  +a );

// Exercice de Age 
// var Age_user = prompt(" Enter your age ");
// if (Age_user >= 18)
// {
//     alert(" vous etes majour");
// }
// else {
//     alert("vous etes pas un majour");
// }

// Exercice de Les Nom :
// var name_1 = prompt("Whats your name ?");
// if (name_1 == "Amine" || name_1  == "amine") {
//     alert("You are " +name_1)
// } else if ( name_1 == "Younes")
// {
//     alert("You are " +name_1)
// } else {
//     alert ("Sorry we didnt find your name ")
// }

// Exercice de Age_2 :

// var Age = prompt("Whats your age");
// Age = parseInt(Age)
// if ( Age <= 12 )
// {
//     alert("Vous etes un enfant") ;
// } else if ( Age <= 17 ) {
//     alert("Vous etes un adult s") ;
// } else if ( Age <= 59) { 
//     alert("Vous etes un majeur") ;
// } else if ( Age >= 60) {
//     alert("Vous etes un vieux") ;
// }
// if ( Age >= 1 && Age <= 11)
// {
//     alert("Vous etes un enfant") ;
// } else if ( Age >= 12 && Age <= 17 )
// {
//     alert(" Vous etes un adult")
// } else if (Age >= 18 && Age <= 59)
// {
//     alert("Vous etes un majeur")
// } else if (Age > 60 )
// {
//     alert|("Vous etes un vieux")
// }

// Les boucle :
// for (var i = 0 ; i<12 ; i++)
// {
//     document.write(" <input type=\"password\"> <button> Click  "+(i+1)+" </button> <br> ")
// }

// Les Function :
// var made , make_1
// function my_first_function (made , make_1)
// {
//     return made + make_1
// }
// made = my_first_function(14 , 10)
// console.log(made)

// function multplication (x , y) 
// {
//     var s = x * y 
//     alert(s)
// }
// multplication(2,6)
// multplication(2,7)
// function divition (x,y)
// {
//     if ( x == 0 || y == 0)
//     {
//         alert("Eror404")
//     } else {
//        var s = x / y
//         alert(s)
//     }
// }

// LES FUNCTION
// function Op (x , y , z)
// {
//     var s ;
//     if ( z == "+" ) {
//         s = x + y ;
//         console.log(s)
//     } else if ( z == "-" ) {
//         s = x - y
//         console.log(s)
//     } else if ( z == "*" ) {
//         s = x*y
//         console.log(s)
//     } else if ( z == "/" ) {     
//         if ( x == 0 || y == 0)
//         {
//            alert("Eror404")
//         } else {
//            var s = x / y
//            console.log(s)
//         }
//     } else {
//         alert("Operation is not disponible")
//     }
// }
// var x = prompt(" Give the operation symbol ")
// Op(0,2,x)
// var s = 1
// On click hiya boucle toujour tched la valeur dyalha 
// cghol boucle infinis
// function  functionclick() {
    // alert("yes we did it")
        
            // s = s + 1 ;
            // document.getElementById('num').innerHTML =  +s
            // document.getElementById('jsjs').innerHTML= document.getElementById('jsjs').innerHTML+"web"+ s
// }

// change background color of div & button exercise
// function changecolor() {
//     if ( document.getElementById('lol').style.backgroundColor == 'red' && document.getElementById('red').style.backgroundColor =='red')
//     {
//         document.getElementById('lol').style.backgroundColor='lightgrey'
//         document.getElementById('red').style.backgroundColor='lightgrey'
//     } else {
//         document.getElementById('lol').style.backgroundColor='red'
//         document.getElementById('red').style.backgroundColor='red'
//     }
//     if (document.getElementById('green').style.backgroundColor =='green')
//     {
//         document.getElementById('green').style.backgroundColor ='lightgrey'
//     }
// }
// function changecolor2() {
//     if (document.getElementById('lol').style.backgroundColor =='green' && document.getElementById('green').style.backgroundColor =='green')
//     {
//         document.getElementById('lol').style
//         document.getElementById('green').style.backgroundColor='lightgrey'
//     } else {
//         document.getElementById('lol').style.backgroundColor='green'
//         document.getElementById('green').style.backgroundColor='green'
//     }
//     if ( document.getElementById('red').style.backgroundColor == 'red')
//     {
//         document.getElementById('red').style.backgroundColor ='lightgrey'
//     } 
// }

// -------------------------------
// FontChanger Exercise 
// var s = 10
// function Bigger_Font() {
//     s = s + 10
//     document.getElementById('fontchanger').style.fontSize = +s+ 'px'
    // document.getElementById('fuck-shit').style.fontSize = 50 + 'px'
    // console.log(document.getElementById('fontchanger').style.fontSize = 5 ) 
// }
// function Smaller_Font()
// {
//     s = s - 10
//     document.getElementById('fontchanger').style.fontSize = + s + 'px'
// }
// console.log(s)



// ----------------------------------------------
// Les evenment

// change value
// function changevalue(event) {
//     var v = event.target.value
//     document.getElementById('you').setAttribute("value",v)
// }

// exo 1
// function changecolor_body(event) {

//     var color_body = event.target.value

    // solution not optimal
    // if ( color_body == "red")
    // {
    //     document.getElementById('youn').style.backgroundColor='red'
    // }
    // if ( color_body == "blue")
    // {
    //     document.getElementById('youn').style.backgroundColor='blue'
    // }
    // if ( color_body == "green")
    // {
    //     document.getElementById('youn').style.backgroundColor='green'
    // }

    // solution optimal
//     document.getElementById('youn').style.backgroundColor = color_body
//     console.log(color_body)

// }

// ..............
//OnKeydown event

// exemple 1
// function ondown(event) {
//     var input_take = event.target.value
//     input_take = input_take.length
    
//     if( input_take != 0)
//     {
//         document.getElementById("c").style.visibility = "visible"
//         if(input_take < 8  )
//         {
//             document.getElementById("c").innerHTML = " password weak "
//             document.getElementById("c").style.color='red'
//             document.writeln(input_take)
    
//         }
//         if(input_take >= 8 && input_take < 12 )
//         {
//             document.getElementById("c").innerHTML = " password moyen"
//             document.getElementById("c").style.color='orange'
//             document.writeln(input_take)
    
//         }
//         if(input_take >= 12 )
//         {
//             document.getElementById("c").innerHTML = " password strong "
//             document.getElementById("c").style.color='green'
//             document.writeln(input_take)
    
//         } 
//     } else if(input_take == 0) {
//         document.getElementById("c").style.visibility = "hidden"
//     }   
// }

// exo 2 
// function upkey (event) {
//     var countdown_35 = 35
//     var v = event.target.value
//     v = v.length
//     result = countdown_35 - v
//     document.getElementById("shit").style.backgroundColor = 'intial'
//     document.getElementById('cs').innerHTML= (countdown_35 - v )

//     if ( result == 0)
//     {
//         document.getElementById('cs').innerHTML= (countdown_35 - v )
//         document.getElementById("shit").style.backgroundColor = 'red'
//         document.getElementById('shit').disabled=true
//     }
// } 

// ......................

// On Focus event
// exemple 1
// function Focus_Event (event) {
//     var p = 400
//     document.getElementById("focus_id").style.width=  +p+ 'px'
//     document.getElementById("focus_id").style.borderColor=  'blue'

// }

// .........................

// onload
// exemple 1 
// function publicite_load() {
//     document.getElementById('publicity-container').style.visibility= "visible"
// }
// function deletepublicite() {
//     document.getElementById('publicity-container').style.visibility = "hidden"
// }
// publicite_load()

// -------------------------------

// event lisener

// document.getElementById('event_listener').addEventListener('click' , showmessage) 
// document.getElementById('event_listener').addEventListener('click' , showm)
// document.getElementById('event_listener').addEventListener('' , function()  {
//     document.getElementById("event_listener").innerHTML = document.getElementById("event_listener").innerHTML+ "-no-shit" 
    
// })

// var x , y
// function showmessage (){
//     alert("is okaaaaaaay")
// }
// function showm (){
//     // document.getElementById("event_listener").innerHTML = document.getElementById("event_listener").innerHTML+ "-shit"
//     x = parseInt(prompt(" give x"))
//     y = parseInt(prompt(" give y"))

//     s = power (x,y)
//     alert(s)
// }
// function power (x,y) {
//     if ( x > 0 && y > 0)
//     {
//         z = (Math.sqrt(x+y) + x) / y
//     } else {
//         z = (Math.abs(x) + Math.sin(y)) / Math.pow(y , 10)
//     }
//     return z
// }

// ,,,,,,,,,,,,,,,,,,,,,
// Date
// document.getElementById('event_listener').addEventListener("click",function(){
// d = new Date(" 2024-02-03 ")

// alert(month)
// })
// day = new Date().getDay()
// month = new Date().getMonth()
// year = new Date().getFullYear()	
// hours = new Date().getHours()
// console.log(month)
// function User_Age(your_year,your_month,your_day) {
//     var your_month = parseInt(prompt("your month"))
//     var your_year = parseInt(prompt("your year"))
//     var your_day = parseInt(prompt("your day"))
//     month_calc =  month -  your_month 
//     day_calc =  your_day - day 
//     console.log(day_calc)
    // console.log(month_calc)
    // if( month_calc < 0  ) {
//         if (day_calc < 0) {

//             age_year = (year - your_year) - 1
//             age_month = 12 + month_calc 
//             age_day  = 30 + day_calc
//             alert(+ age_year + " ans " + age_month + "month" + age_day + "day")
//         } else {
//             age_year = (year - your_year) - 1
//             age_month = 12 + month_calc 
//             age_day  = your_day - day 
//             alert(+ age_year + " ans " + age_month + "month" + age_day + "day")
//         }  
//     } else {
//         age_year = year - your_year
//         age_month = your_month - month 
//         console.log(your_month)
//         age_day  = your_day - day 
//         alert(+ age_year + " ans " + age_month + " month" + age_day + " day")
//     }
        
    
// }
// var your_year , your_month ,  your_day
// User_Age(your_year,your_month,your_day)

// ,,,,,,,,,,,,,,,,,
// chaine de character tableau : 
// var text = "test    text javascript "
// bach nahi white space m la phrase 
    // text=text.trim()
        // text = text.trimStart()
        // text = text.trimEnd()
        // c1 = text[2]
        // console.log(c1)
        //  f la fin yeneqes 1 kima 25 - 1 = 24 
        // str = text.slice(5,25)
        // str = text.slice(-30)
        // console.log(str)
        // t=text.length
        // text = text.substring(1,7)  
        // console.log(text)
    // text = text.toLowerCase()
    var text1 = "one two"
    var text2 = " three /"
    var text3 = text1.concat(" two ",text2)
    text3 = text3.repeat(5)
    console.log(text3)
    // text1 = text1.replace("n","JS")
    // text1 = text1.replaceAll("on","JS")
    s = text1   .split(" ")
    console.log(s)

