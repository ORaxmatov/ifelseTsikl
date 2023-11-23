"use strict"
let numberOfSeries;

function serialSoni(){
  numberOfSeries = +prompt("Nechta serial Ko'rdingiz?", "");
}

serialSoni();

const seriesDB = {
  count : numberOfSeries,
  series : {},
  actors : {},
  genres : [],
  privat : false,

}

function serialHisob(){
   for(let i=0; i<2; i++){
  console.log(i);
  const a = prompt("Oxirgi ko'rgan serailnigiz?");
  const b = prompt("Nechi baho berasiz?");

  if(a != null &&  b != null && a != "" && b != "" ){

    seriesDB.series[a] = b;
    console.log("done");
  }else{
    console.log("error");
    i--;
  }

 }
}

serialHisob();

 function serialLevilShow(){
  if(seriesDB.count<5){
  console.log("Siz kam serial ko'ribsiz");
 }else if(seriesDB>5 && seriesDB<10){
  console.log("Siz yaxshi serialchi ekansiz");
 }else if(seriesDB.count){

 }
 }

 serialLevilShow();

console.log(seriesDB);

function showDB(hidden){
  if(!hidden){
    console.log(seriesDB);
  }
}

showDB(seriesDB.privat);

function wiretGenres(){
  for(let i = 0; i<=2; i++){
      const genre = prompt(`Yaxshi ko'rgan janringiz ${i+1}`);
      seriesDB.genres[i] = genre;
  }

}

wiretGenres();
 












