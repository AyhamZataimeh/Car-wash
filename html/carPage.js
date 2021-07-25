var cost=2.0
var dryClean=document.getElementById("dryclean")
var engine=document.getElementById("engine")
var submit=document.getElementById("submit")
var selcet=document.getElementById("select")
var o1=document.getElementById("o1")
var o2=document.getElementById("o2")
var o3=document.getElementById("o3")

var button=document.getElementById("button")
var p=document.getElementById("p")
console.log(button);
console.log(o1);
function change() {
  if (o1.selected==true) {
    cost*=2

  }

  if (o2.selected==true) {

    cost*=2;


  }else {
  }

  if (o3.selected==true) {

    cost*=3;

  }

}



function price() {
  p.innerHTML="Total price: "+cost+"JD"



}
function out() {
  p.innerHTML=""

}
function dry() {
  if(dryClean.checked==true){
    cost+=6.0
  }else{
    cost=2.0
    eng()
  }

}
function eng () {
  if(engine.checked==true){
    cost+=4.0
  }else {
    cost=2.0
    dry()
  }

}
