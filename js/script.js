"use strict";
const seriesDB = {
  count : 0,
  series : {},
  actors : {},
  genres : [],
  privat : false,
  start : function(){
  seriesDB.count = +prompt("Nechta serial Ko'rdingiz?", "")

  while(
    seriesDB.count == '' || seriesDB.count == null ||isNaN(seriesDB.count)
  ){
    seriesDB.count = +prompt("Nechta serial Ko'rdingiz?", "");

  }
},
serialHisob: function (){
   for(let i=0; i<2; i++){
  console.log(i);
  const a = prompt("Oxirgi ko'rgan serailnigiz?");
  const      b = prompt("Nechi baho berasiz?");

  if(a !== null &&  b !== null && a !== "" && b !== "" ){

    seriesDB.series[a] = b;
    console.log("done");
  }else{
    console.log("error");
    i--;
  }

 }
},
serialLevilShow: function (){
  if(seriesDB.count<5){
  console.log("Siz kam serial ko'ribsiz");
 }else if(seriesDB>5 && seriesDB<10){
  console.log("Siz yaxshi serialchi ekansiz");
 }else if(seriesDB.count>10){
  console.log("Siz serial zvezda ekansiz")
 }
 },

showDB: function (){
  if(!seriesDB.privat){
    console.log(seriesDB);
  }
},

visiblDB: function(){
 if(seriesDB.privat){
  seriesDB.privat = false;
 }else{
  seriesDB.privat = true;
 }
},

wiretGenres: function(){
  for(let i = 0; i<=2; i++){
      // const genre = prompt(`Yaxshi ko'rgan janringiz ${i+1}`);
      // if(genre == '' || genre == null){
      //   console.log("Kechrasiz maydon bush bulmasligi kerak!");
      //   i--;
      // }else{
      //   seriesDB.genres[i] = genre;

       }
      let genres = prompt("Yaxshi ko'rgan janiringizni vergul yordamida yozing").toLowerCase();
      if(genres == '' || genres == null){
         console.log("Kechrasiz maydon bush bulmasligi kerak!");
         i--;
       }else{
      seriesDB.genres = genres.split(", ");
      seriesDB.genres.sort();

  }

    seriesDB.genres.forEach((item, index) => {
      console.log(`Yaxshi kurgan janiringiz ${index+1} - nomi ${item}`)
    });

 }
}










