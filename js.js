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


document.querySelector('.button').addEventListener('mouseenter',function(e){
console.log('mouse in');
e.preventDefault();
});



// ba estefadeh az Eventlistener va estefadeh az 
//mouseenter ma mitoonim functionemono ejra konim

//++++++++++++++++++++++++++++++++++++++++++++++
document.querySelector('.button').addEventListener
('mouseout',function(e){
    console.log('mouse out');
    e.preventDefault();
})

// dastoore mouseout barayeh inke harvaght mouse raft biroon 
// barat function ejra koneh

