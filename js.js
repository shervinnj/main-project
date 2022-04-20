// document.querySelector('.button').addEventListener('click',
// function(e){
//     console.log('hello world');
//     e.preventDefault
// })

//ba estefadeh az addEventListenner ma mitoonim
//be elemanemoon raftar bedim
//ma dar mesaleh balah goftim har vaght click kardim 
//bia dastooreh hello world chap kon 
//va ziresh az dastooreh preventDefault estefadeh kardim
//ta zamani ke hello world chap mishe napadidi nashe
//in dastoor prevent karesh ine ke raftar haye 
//taghaye tag hayi ke javascript
//be soorateh pishfarz dareh ro khonsa mikoneh1


//+++++++++++++++++++++++++++++++++++++++++++
// document.querySelector('.button').addEventListener('dblclick',function(e){
//     console.log("duble click");
//     e.preventDefault();
// })

// estedeh az tarfand Eventlistner va function barayeh inke
// 2 bar click konim rooyeh tagemoon ta amaliyat anjam beshe
// vali dar marhaleyeh aval bayad be jayeh click bezarim dblclick


// document.querySelector('.button').addEventListener('mouseenter',function(e){
// console.log('mouse in');
// e.preventDefault();
// });



// ba estefadeh az Eventlistener va estefadeh az 
//mouseenter ma mitoonim functionemono ejra konim

//++++++++++++++++++++++++++++++++++++++++++++++
// document.querySelector('.button').addEventListener
// ('mouseout',function(e){
//     console.log('mouse out');
//     e.preventDefault();
// })

// dastoore mouseout barayeh inke harvaght mouse raft biroon 
// barat function ejra koneh

// let heading=document.querySelectorAll('.title')[1];
// document.body.addEventListener('mousemove',function(e){

// heading.innerHTML=`x:${e.offsetX} y:${e.offsetY}`

// e.preventDefault();
// });
//ba estefadeh az in dastoot mitoonim mokhtasatr mousemoemoon ro safeh ro bedast biyarim
//faghat zamani ke az function estefadeh mikonim bayad havasemoon bashe
// e ke dakheleh parantez kozashtim rooyeh dastooreh 
//ofsettX va offsetY estefadeh konim

// let tex=document.querySelector('#add-book input');
// let link=document.querySelector('.button');

// link.addEventListener('click',function(e){
//     console.log(tex.value);
//     tex.value='';
// })

//ba estefadeh az in dastoor ma valu input send mikonim
//be consol.log
//va bad to function khateh akhar make sure
//text.value=""; chon badesh pak she

// let tex=document.querySelector('#add-book input');
// let btn=document.querySelector('.button');
// btn.addEventListener('click',function(e){
//     console.log(tex.value);
//     tex.value="";
// })



// let nu=document.querySelector('#add-book input');
// let al=document.body;
// let bahal=document.querySelector('a');
// console.log(bahal);
// al.addEventListener('mouseover',function(e){
//     bahal.innerHTML=`x:${e.offsetX} y:${e.offsetY}`
// })


//projeh khodam

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let inputText=document.querySelector('#add-book input');

// inputText.addEventListener('focus',function(e){
//     console.log('selected');
// })


//ba in dastooreh balah vaghti ma input select kardim
//barayeh ma dar consol neshon mideh ke select shode
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// inputText.addEventListener('blur',function(e){
//     console.log('unselected');
// })

//ba estefadeh az in dastoor ma zamani ke unselect kardim
//bara ma neshoon mideh ke dige ro input select nistim


// let checkBox=document.querySelector('#hide input');

// checkBox.checked=true;
// checkBox.checked=false;

//ba estefadeh az in dastoor mitoonim megdareh 
//pishfarze check box bezarim true ke cheked bekhore
// ya false ke unchecked beshe



 let checkBox=document.querySelector('#hide input');
 let heading=document.querySelector('.title')[1];
 let ul=document.querySelectorAll('ul');

 checkBox.addEventListener('click',function(e){
     if(checkBox.checked){
         heading.style.display='none';
         ul.style.display='none';
     }else{
        heading.style.display='initial';
        ul.style.display='initial';
     }
 })
 //astefadeh az dastooreh if va css toonestim
 //zamani ke click mikonim rooyeh check box ye elemant hazf beshe 
 