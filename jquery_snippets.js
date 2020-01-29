/* This code is meanst to be used for scraping tickers off of Yahoos biggest movers winner and losers and then apply to stockCharts.com */



$.(".Fw(600)")

$(document).ready(function(){

})

dir($(".classname"))
for (i=0; i<newArr.length; i++){console.log(newArr[i].innerHTML)}
$("a")[52]
$(document).ready(function(){
    console.log("shite")
})

//1st snippet
//First injec this code into the head by adding in console
var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

//set variables to manipulate
let newArr;
let list;
let SearchAddress;


//2nd Snippet
//Then get the range of elements
newArr = $("a").slice(50,75)

list = "";
for (i=0; i<newArr.length; i++){
    list += newArr[i].innerHTML + ",";
}
console.log(list);
//https://www.stockcharts.com/freecharts/candleglance.html?VIR,KKPNF,VIE,DNLI,GSX,WIMHF,MRNA,NVRO|D|0

SearchAddress = "https://www.stockcharts.com/freecharts/candleglance.html?" + list + "|D|0";
//clickable link for stock details
console.log(SearchAddress);

//EHTH VIR ADPT TEAM INTC BLDP CSPCY PAAS TXG PTBRY AU AG