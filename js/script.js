"use strict"
const numberOfSeries = +prompt("Nechta serial Ko'rdingiz?", "");

const seriesDB = {
  count : numberOfSeries,
  series : {},
  actors : {},
  genres : [],
  privat : false,

}

// const a = prompt("Oxirgi ko'rgan serailnigiz?");
//  b = prompt("Nechi baho berasiz?");
//  c = prompt("Oxirgi ko'rgan serailnigiz?");
//  d = prompt("Nechi baho berasiz?");
//  seriesDB.series[a] = b;
//  seriesDB.series[c] = d;
 
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

 if(seriesDB.count<=5){
  console.log("Siz kam serial ko'ribsiz");
 }else if(seriesDB.count>5 && seriesDB.count<=10){
  console.log("Siz yaxshi serialchi ekansiz");
 }else if(seriesDB.count>10){
  console.log("Siz zvezda serialchi ekansiz")

 }
 console.log(seriesDB);











